
import React, { useState, useMemo, useEffect } from 'react';
import AuthCard from './components/AuthCard.tsx';
import InputField from './components/InputField.tsx';
import SocialButton from './components/SocialButton.tsx';
import OnboardingForm from './components/OnboardingForm.tsx';
import PlayingHistoryForm from './components/PlayingHistoryForm.tsx';
import NotificationModal from './components/NotificationModal.tsx';
import CommunityFeed from './components/CommunityFeed.tsx';
import PeopleFeed from './components/PeopleFeed.tsx';
import { AuthMode, UserProfile } from './types.ts';
import { Check, X, Shield, Loader2, ArrowLeft, ArrowRight, User, Mail } from 'lucide-react';
import { api } from './src/services/api.ts';
import { authService } from './src/services/authService.ts';


import { GoogleIcon, PickleOnLogo } from './src/icons/index.ts';

const GoogleAccountModal: React.FC<{ isOpen: boolean; onClose: () => void; onSelect: (email: string) => void }> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const accounts = [
    { name: 'Alex Thompson', email: 'alex.t@gmail.com' },
    { name: 'Thompson Creative', email: 'hello@thompson.io' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[15px] w-full max-w-sm overflow-hidden shadow-2xl animate-slide-up">
        <div className="p-8 pb-4 text-center">
          <div className="flex justify-center mb-6">
            <GoogleIcon />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sign in with Google</h3>
          <p className="text-gray-500 text-sm mb-6">to continue to PickleOn</p>

          <div className="space-y-3 mb-6">
            {accounts.map((acc) => (
              <button
                key={acc.email}
                onClick={() => onSelect(acc.email)}
                className="w-full flex items-center gap-4 px-3 py-4 rounded-[15px] hover:bg-gray-50 transition-colors border border-gray-100 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">
                  {acc.name[0]}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 leading-tight">{acc.name}</div>
                  <div className="text-sm text-gray-500">{acc.email}</div>
                </div>
              </button>
            ))}
            <button className="w-full flex items-center gap-4 px-3 py-4 rounded-[15px] hover:bg-gray-50 transition-colors border border-gray-100 italic text-gray-400">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <User size={18} />
              </div>
              <span>Use another account</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors py-2"
          >
            Cancel
          </button>
        </div>
        <div className="bg-gray-50 p-6 text-[11px] text-gray-400 text-center leading-relaxed font-medium">
          To continue, Google will share your name, email address, language preference, and profile picture with PickleOn.
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(false);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    buttonText: string;
    onButtonClick?: () => void;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
    buttonText: '',
  });

  const showNotification = (config: Omit<typeof notification, 'isOpen'>) => {
    setNotification({ ...config, isOpen: true });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      if (api.isAuthenticated()) {
        const session = authService.getSession();
        if (session && session.user) {
          setEmail(session.user.email || '');
          setIsLoggedIn(true);
        }
      }
    };

    checkSession();
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isEmailValid = useMemo(() => validateEmail(email), [email]);

  const passwordCriteria = useMemo(() => ({
    length: password.length >= 8,
    complexity: /[A-Z]/.test(password) && /[0-9]/.test(password),
  }), [password]);

  const passwordStrength = useMemo(() => {
    if (password.length === 0) return 0;
    return (passwordCriteria.length ? 1 : 0) + (passwordCriteria.complexity ? 1 : 0);
  }, [passwordCriteria]);

  const passwordsMatch = useMemo(() => password.length > 0 && password === confirmPassword, [password, confirmPassword]);

  const canSubmit = useMemo(() => {
    if (isLoading || isSocialLoading) return false;
    if (mode === 'forgot') return isEmailValid;

    const common = isEmailValid && password.length > 0;
    if (mode === 'signup') {
      return common && passwordCriteria.length && passwordsMatch && agreed;
    }
    return common;
  }, [mode, isEmailValid, password.length, passwordCriteria, passwordsMatch, agreed, isLoading, isSocialLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsLoading(true);

    try {
      if (mode === 'forgot') {
        await api.forgotPassword(email);
        setIsLoading(false);
        setMode('reset-success');
        return;
      }

      const result = mode === 'signup'
        ? await api.signup({ email, password })
        : await api.login({ email, password });

      setIsLoading(false);
      if (result.success) {
        if (result.user && result.user.id) {
          setCurrentUserId(result.user.id);
        }

        if (mode === 'signup') {
          showNotification({
            type: 'success',
            title: 'Success!',
            message: 'Your account has been created successfully. Welcome to aboard!',
            buttonText: 'Go to Dashboard',
            onButtonClick: () => {
              closeNotification();
              setMode('onboarding');
              setOnboardingStep(1);
            }
          });
        } else {
          setIsLoggedIn(true);
        }
      } else {
        showNotification({
          type: 'error',
          title: 'Error',
          message: result.message || 'Something went wrong. Please check your email or try again later.',
          buttonText: 'Try again',
          onButtonClick: closeNotification
        });
      }
    } catch (error) {
      console.error('Auth error:', error);
      setIsLoading(false);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred. Please try again later.',
        buttonText: 'Try again',
        onButtonClick: closeNotification
      });
    }
  };

  const handleOnboardingStep1Complete = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (currentUserId) {
        data.append('signUpId', currentUserId.toString());
      }

      const result = await api.submitOnboarding(data);
      if (result.success) {
        // Convert FormData back to object for local state (ignoring Files for now)
        const dataObj: any = {};
        data.forEach((value, key) => {
          if (!(value instanceof File)) {
            dataObj[key] = value;
          }
        });
        setUserData(prev => ({ ...prev, ...dataObj }));

        showNotification({
          type: 'success',
          title: 'Success!',
          message: 'Your profile has been created successfully. Let\'s continue!',
          buttonText: 'Continue',
          onButtonClick: () => {
            console.log('App: Continue button clicked in success modal. Moving to step 3 (Skipping 2)');
            closeNotification();
            setOnboardingStep(3);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      } else {
        showNotification({
          type: 'error',
          title: 'Error',
          message: result.message || 'Failed to save onboarding data. Please try again.',
          buttonText: 'Try again',
          onButtonClick: closeNotification
        });
      }
    } catch (error) {
      console.error('Onboarding step 1 error:', error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred during onboarding. Please try again.',
        buttonText: 'Try again',
        onButtonClick: closeNotification
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoUploadComplete = async (data: FormData) => {
    // This is now skipped, but keeping the handler for safety
    setIsLoading(true);
    try {
      if (currentUserId) {
        data.append('signUpId', currentUserId.toString());
      }
      const result = await api.uploadGallery(data);
      if (result.success) {
        showNotification({
          type: 'success',
          title: 'Success!',
          message: 'Your gallery has been uploaded successfully. One last step!',
          buttonText: 'Continue',
          onButtonClick: () => {
            closeNotification();
            setOnboardingStep(3);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      } else {
        showNotification({
          type: 'error',
          title: 'Error',
          message: result.message || 'Failed to upload gallery. Please try again.',
          buttonText: 'Try again',
          onButtonClick: closeNotification
        });
      }
    } catch (error) {
      console.error('Gallery upload error:', error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred during gallery upload. Please try again.',
        buttonText: 'Try again',
        onButtonClick: closeNotification
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnboardingFinalComplete = async (data: any) => {
    setIsLoading(true);
    try {
      // Add signUpId to the data
      const dataWithId = {
        ...data,
        signUpId: currentUserId
      };

      const result = await api.submitPlayingHistory(dataWithId);
      if (result.success) {
        setUserData(prev => ({ ...prev, ...data, email }));
        setIsLoggedIn(true);
      } else {
        showNotification({
          type: 'error',
          title: 'Error',
          message: result.message || 'Failed to save playing history. Please try again.',
          buttonText: 'Try again',
          onButtonClick: closeNotification
        });
      }
    } catch (error) {
      console.error('Onboarding error:', error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred during onboarding. Please try again.',
        buttonText: 'Try again',
        onButtonClick: closeNotification
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleClick = () => {
    setIsSocialLoading(true);
    setTimeout(() => {
      setIsGoogleModalOpen(true);
    }, 800);
  };

  const handleGoogleModalClose = () => {
    setIsGoogleModalOpen(false);
    setIsSocialLoading(false);
  };

  const handleGoogleSelect = async (selectedEmail: string) => {
    setIsGoogleModalOpen(false);
    setIsSocialLoading(true);
    setEmail(selectedEmail);
    try {
      const result = await api.login({ email: selectedEmail, social: true });
      if (result.success) {
        setMode('onboarding');
        setOnboardingStep(1);
      } else {
        showNotification({
          type: 'error',
          title: 'Error',
          message: result.message || 'Google login failed. Please try again.',
          buttonText: 'Try again',
          onButtonClick: closeNotification
        });
      }
    } catch (error) {
      console.error('Google login error:', error);
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'An error occurred during Google login. Please try again.',
        buttonText: 'Try again',
        onButtonClick: closeNotification
      });
    } finally {
      setIsSocialLoading(false);
    }
  };

  let content;

  if (mode === 'community-feed' || mode === 'people') {
    content = (
      <div className="min-h-screen bg-gray-50/50 animate-fade-in pb-20">
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md bg-white/80">
          <div className="flex items-center gap-8">
            <PickleOnLogo />

            <nav className="hidden md:flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100">
              <button
                onClick={() => setMode('community-feed')}
                className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${mode === 'community-feed' ? 'bg-white text-[#812926] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Feed
              </button>
              <button
                onClick={() => setMode('people')}
                className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${mode === 'people' ? 'bg-white text-[#812926] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                People
              </button>
            </nav>
          </div>

          <button
            onClick={() => {
              api.logout();
              setIsLoggedIn(false);
              setMode('login');
              setUserData(null);
            }}
            className="text-gray-400 hover:text-[#812926] font-bold text-sm transition-colors uppercase tracking-widest"
          >
            Logout
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-gray-100 px-4 py-2 rounded-2xl shadow-2xl z-50 flex items-center gap-2">
          <button
            onClick={() => setMode('community-feed')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${mode === 'community-feed' ? 'bg-[#812926] text-white shadow-lg shadow-[#812926]/20' : 'text-gray-400'}`}
          >
            Feed
          </button>
          <button
            onClick={() => setMode('people')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${mode === 'people' ? 'bg-[#812926] text-white shadow-lg shadow-[#812926]/20' : 'text-gray-400'}`}
          >
            People
          </button>
        </div>

        {mode === 'community-feed' ? <CommunityFeed /> : <PeopleFeed />}
      </div>
    );
  }
  else if (mode === 'signup-success') {
    content = null; // Handled by NotificationModal
  } else if (isLoggedIn) {
    content = (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
        <div className="bg-white p-12 rounded-[15px] shadow-2xl text-center max-w-[650px] w-full transform hover:scale-[1.01] transition-transform duration-500">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-slide-up">
            <Check className="text-green-500 w-12 h-12" />
          </div>
          <h1 className="text-gray-900 text-4xl font-black mb-4 tracking-tight animate-slide-up animate-stagger-1">Welcome to PickleOn</h1>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed animate-slide-up animate-stagger-2">
            Your profile is ready! You have successfully onboarded as <span className="text-[#812926] font-bold">{userData?.name || email}</span>.
          </p>
          <button
            onClick={() => {
              setMode('community-feed');
            }}
            className="w-full bg-[#812926] text-white h-[50px] rounded-[15px] font-bold hover:bg-[#6e2220] transition-all shadow-[0_20px_40px_-10px_rgba(129,41,38,0.4)] text-[17px] active:scale-95 animate-slide-up animate-stagger-3 px-3"
          >
            Go to Community Feed
          </button>
        </div>
      </div>
    );
  } else if (mode === 'onboarding') {
    content = (
      <AuthCard
        title="Let's Onboard you!"
        subtitle={onboardingStep === 1
          ? "Fill in your details in order to get started"
          : "Almost there! Let's hear about your playing history!"}
      >
        {onboardingStep === 1 && <OnboardingForm onComplete={handleOnboardingStep1Complete} />}
        {onboardingStep === 3 && <PlayingHistoryForm onComplete={handleOnboardingFinalComplete} />}
      </AuthCard>
    );
  } else if (mode === 'forgot' || mode === 'reset-success') {
    content = (
      <div className="relative">
        <AuthCard
          title=""
          subtitle=""
        >
          <div className="relative pt-4">
            {mode === 'forgot' ? (
              <div className="flex flex-col animate-fade-in">
                <button
                  onClick={() => setMode('login')}
                  className="absolute top-0 left-0 p-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors -mt-4 -ml-4"
                  aria-label="Back to Login"
                >
                  <ArrowLeft size={28} strokeWidth={2.5} />
                </button>

                <div className="text-center mb-10 mt-8">
                  <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-black tracking-tight mb-4">Forgot Password</h2>
                  <p className="text-gray-400 text-lg font-semibold leading-relaxed max-w-[95%] mx-auto">
                    Please enter your registered email below to receive a reset password link
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="mb-8 animate-slide-up">
                    <InputField
                      label="Email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(val) => { setEmail(val); setIsEmailTouched(true); }}
                      required
                    />
                    {isEmailTouched && email.length > 0 && !isEmailValid && (
                      <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5 ml-1">
                        <X size={12} /> Invalid email format
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || isLoading}
                    className="group relative w-full bg-[#812926] text-white h-[50px] rounded-[15px] text-[17px] font-bold hover:bg-[#6e2220] transition-all shadow-[0_20px_40px_-10px_rgba(129,41,38,0.4)] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden px-3"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin h-6 w-6" />
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center py-10 animate-slide-up">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-green-500 w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Check your Email</h2>
                <p className="text-gray-500 text-center mb-10 font-medium">
                  If an account exists for <span className="text-[#812926] font-bold">{email}</span>, you will receive a password reset link shortly.
                </p>
                <button
                  onClick={() => setMode('login')}
                  className="w-full bg-[#812926] text-white h-[50px] rounded-[15px] text-[17px] font-bold hover:bg-[#6e2220] transition-all shadow-lg active:scale-95 px-3"
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </AuthCard>
      </div>
    );
  } else {
    content = (
      <AuthCard
        title={mode === 'signup' ? 'Create Account' : 'Welcome Back'}
        subtitle={mode === 'signup' ? "Let's get started by filling out the form below" : "Fill out the information below to access your account"}
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-y-5 mb-8">
            <div className="animate-slide-up animate-stagger-1">
              <InputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(val) => { setEmail(val); setIsEmailTouched(true); }}
                required
              />
              {isEmailTouched && email.length > 0 && !isEmailValid && (
                <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5 ml-1">
                  <X size={12} /> Invalid email format
                </div>
              )}
            </div>

            <div className="animate-slide-up animate-stagger-2">
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={setPassword}
                required
              />
              {mode === 'login' && (
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setIsEmailTouched(false); }}
                    className="text-sm text-[#812926] hover:underline font-bold"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}

              {mode === 'signup' && password.length > 0 && (
                <div className="mt-4 p-5 bg-gray-50 rounded-[15px] border border-gray-100 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-gray-400">Security</span>
                    <span className={`text-xs font-bold ${passwordStrength === 0 ? 'text-red-500' : passwordStrength === 1 ? 'text-orange-400' : 'text-green-500'
                      }`}>
                      {passwordStrength === 0 ? 'Weak' : passwordStrength === 1 ? 'Medium' : 'Strong'}
                    </span>
                  </div>
                  <div className="flex gap-1.5 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mb-5">
                    <div className={`h-full transition-all duration-700 ease-out rounded-full ${passwordStrength === 0 ? 'bg-red-500 w-1/3' : passwordStrength === 1 ? 'bg-orange-400 w-2/3' : 'bg-green-500 w-full'
                      }`} />
                  </div>
                  <div className="space-y-3">
                    <div className={`flex items-center gap-3 text-xs font-medium transition-colors ${passwordCriteria.length ? 'text-green-600' : 'text-gray-400'}`}>
                      {passwordCriteria.length ? <Check size={14} /> : <Shield size={14} className="opacity-40" />}
                      <span>8+ Characters</span>
                    </div>
                    <div className={`flex items-center gap-3 text-xs font-medium transition-colors ${passwordCriteria.complexity ? 'text-green-600' : 'text-gray-400'}`}>
                      {passwordCriteria.complexity ? <Check size={14} /> : <Shield size={14} className="opacity-40" />}
                      <span>Uppercase & Number</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {mode === 'signup' && (
              <div className="animate-slide-up animate-stagger-3">
                <InputField
                  label="Confirm Password"
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  required
                />
                {confirmPassword.length > 0 && (
                  <div className={`flex items-center gap-2 mt-2 text-[10px] font-bold uppercase tracking-widest ${passwordsMatch ? 'text-green-500' : 'text-red-400'}`}>
                    {passwordsMatch ? <Check size={12} /> : <X size={12} />}
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="animate-slide-up animate-stagger-3">
            <button
              type="submit"
              disabled={!canSubmit}
              className="group relative w-full bg-[#812926] text-white h-[50px] rounded-[15px] text-[17px] font-bold mb-8 hover:bg-[#6e2220] transition-all shadow-[0_20px_40px_-10px_rgba(129,41,38,0.4)] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale overflow-hidden flex items-center justify-center px-3"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-6 w-6" />
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <span>{mode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </div>

          {mode === 'signup' && (
            <div className="flex justify-center mb-10 animate-fade-in">
              <div className="flex items-start gap-2.5 max-w-[95%] group">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 flex-shrink-0 appearance-none w-5 h-5 border-2 border-gray-200 rounded-md bg-white checked:bg-[#812926] checked:border-[#812926] cursor-pointer transition-all relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[1px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
                />
                <label htmlFor="terms" className="text-gray-500 font-semibold text-base leading-relaxed cursor-pointer select-none text-left">
                  I accept the <span className="text-gray-900 font-bold border-b border-gray-200 hover:border-[#812926] transition-colors">Terms of Service</span> and <span className="text-gray-900 font-bold border-b border-gray-200 hover:border-[#812926] transition-colors">Privacy Policy</span>.
                </label>
              </div>
            </div>
          )}

          <div className="relative mb-8 flex items-center gap-5 animate-fade-in">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="text-[13px] font-semibold text-gray-400 whitespace-nowrap">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="animate-slide-up animate-stagger-3">
            <SocialButton
              icon={isSocialLoading ? <Loader2 className="animate-spin w-5 h-5 text-gray-400" /> : <GoogleIcon />}
              label={isSocialLoading ? "Connecting..." : "Continue with Google"}
              onClick={handleGoogleClick}
              disabled={isLoading || isSocialLoading || (mode === 'signup' && !agreed)}
            />
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <p className="text-gray-400 font-semibold text-base tracking-tight">
              {mode === 'signup' ? 'Member already? ' : "New here? "}
              <button
                type="button"
                onClick={() => {
                  setMode(mode === 'signup' ? 'login' : 'signup');
                  setEmail(''); setPassword(''); setConfirmPassword(''); setAgreed(false); setIsEmailTouched(false);
                }}
                className="text-[#812926] font-semibold hover:underline underline-offset-4 ml-1.5"
              >
                {mode === 'signup' ? 'Log in instead' : 'Create profile'}
              </button>
            </p>
          </div>
        </form>
      </AuthCard>
    );
  }

  return (
    <div className="relative min-h-screen">
      {content}

      <GoogleAccountModal
        isOpen={isGoogleModalOpen}
        onClose={handleGoogleModalClose}
        onSelect={handleGoogleSelect}
      />

      <NotificationModal
        isOpen={notification.isOpen}
        onClose={closeNotification}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        buttonText={notification.buttonText}
        onButtonClick={notification.onButtonClick}
      />

      {isLoading && mode !== 'forgot' && (
        <div className="fixed inset-0 z-[150] bg-black/20 backdrop-blur-[2px] flex items-center justify-center pointer-events-auto">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3">
            <Loader2 className="w-10 h-10 text-[#812926] animate-spin" />
            <span className="font-bold text-gray-900">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
