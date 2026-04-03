
import React, { useState, useRef } from 'react';
import { Plus, ChevronRight, ChevronDown } from 'lucide-react';
import badgeDefinitions from '../src/data/badges/definitions.json';

interface OnboardingFormProps {
  onComplete: (data: any) => void;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    playingLevel: '',
    location: '',
    playingSinceMonth: '',
    playingSinceYear: '',
    powerHand: '',
    backHand: '',
    duprLink: '',
    oftenSeenPlayingAt: '',
    coverImage: null as string | null,
    profileImage: null as string | null,
    coverFile: null as File | null,
    profileFile: null as File | null,
  });

  const coverInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'profile') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [type === 'cover' ? 'coverFile' : 'profileFile']: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [type === 'cover' ? 'coverImage' : 'profileImage']: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.age &&
      formData.gender &&
      formData.playingLevel &&
      formData.location &&
      formData.playingSinceMonth &&
      formData.playingSinceYear &&
      formData.powerHand &&
      formData.backHand &&
      formData.duprLink &&
      formData.oftenSeenPlayingAt &&
      formData.coverImage &&
      formData.profileImage
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OnboardingForm: Next button clicked');
    if (isFormValid()) {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'coverImage' && key !== 'profileImage' && key !== 'coverFile' && key !== 'profileFile') {
          data.append(key, value as string);
        }
      });

      if (formData.profileFile) {
        console.log('OnboardingForm: Appending profile image', formData.profileFile.name);
        data.append('profileImage', formData.profileFile);
      }
      if (formData.coverFile) {
        console.log('OnboardingForm: Appending cover image', formData.coverFile.name);
        data.append('coverImage', formData.coverFile);
      }

      console.log('OnboardingForm: Calling onComplete with FormData');
      onComplete(data);
    } else {
      console.warn('OnboardingForm: Form is not valid', formData);
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, i) => (currentYear - i).toString());

  const inputBaseClass = "w-full h-[50px] bg-[#F9FAFB] rounded-[15px] px-3 outline-none transition-all font-medium text-[#6D727F] placeholder-[#6D727F]/75 border-2 border-transparent focus:bg-white focus:border-[#812926]/20 flex items-center text-base";
  const labelClass = "block text-[14px] font-normal text-[#6D727F] mb-2 ml-1 tracking-tight";

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      {/* Header Image Section - Horizontal Full Width but positioned below Title/Subtitle */}
      <div className="relative mb-36 -mx-6 md:-mx-[60px]">
        {/* Cover Image Container - Edge-to-edge horizontally with 15px radius */}
        <div
          onClick={() => coverInputRef.current?.click()}
          className="w-full h-48 bg-[#E5E7EB] rounded-[15px] flex flex-col items-center justify-center cursor-pointer overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all group"
        >
          {formData.coverImage ? (
            <img src={formData.coverImage} className="w-full h-full object-cover" alt="Cover" />
          ) : (
            <div className="flex flex-col items-center text-[#9CA3AF] group-hover:text-[#6B7280]">
              <Plus size={40} strokeWidth={2.5} />
              <span className="text-lg font-bold mt-1">Cover Image</span>
            </div>
          )}
          <input type="file" ref={coverInputRef} hidden accept="image/*" onChange={(e) => handleImageUpload(e, 'cover')} />
        </div>

        {/* Profile Image Container - Adjusted to match the 15px theme */}
        <div
          onClick={(e) => { e.stopPropagation(); profileInputRef.current?.click(); }}
          className="absolute -bottom-28 left-6 md:left-[60px] w-36 h-36 bg-[#D1D5DB] rounded-[15px] border-[8px] border-white/50 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:scale-105 transition-transform group/profile z-20 shadow-lg"
        >
          {formData.profileImage ? (
            <img src={formData.profileImage} className="w-full h-full object-cover" alt="Profile" />
          ) : (
            <div className="flex flex-col items-center text-[#9CA3AF] group-hover/profile:text-[#6B7280]">
              <Plus size={28} strokeWidth={2.5} />
              <div className="text-[12px] font-bold text-center leading-tight mt-1">
                Profile<br />Image
              </div>
            </div>
          )}
          <input type="file" ref={profileInputRef} hidden accept="image/*" onChange={(e) => handleImageUpload(e, 'profile')} />
        </div>
      </div>

      {/* Form Fields - Spaced down due to profile image overlap */}
      <div className="space-y-6 pt-4 animate-slide-up animate-stagger-1">
        <div>
          <label className={labelClass}>Full name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className={inputBaseClass}
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Age</label>
            <input
              type="number"
              placeholder="00"
              className={`${inputBaseClass} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-[#6D727F]`}
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Gender</label>
            <div className="relative">
              <select
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.gender ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
              >
                <option value="" disabled>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>Playing level</label>
          <div className="relative">
            <select
              className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.playingLevel ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
              value={formData.playingLevel}
              onChange={(e) => handleChange('playingLevel', e.target.value)}
            >
              <option value="" disabled>Select</option>
              {badgeDefinitions.playingLevels.map(level => (
                <option key={level.id} value={level.value}>{level.label}</option>
              ))}
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
          </div>
        </div>

        <div>
          <label className={labelClass}>Location</label>
          <input
            type="text"
            placeholder="City, state, country"
            className={inputBaseClass}
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Playing since</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <select
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.playingSinceMonth ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
                value={formData.playingSinceMonth}
                onChange={(e) => handleChange('playingSinceMonth', e.target.value)}
              >
                <option value="" disabled>Month</option>
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
            </div>
            <div className="relative">
              <select
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.playingSinceYear ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
                value={formData.playingSinceYear}
                onChange={(e) => handleChange('playingSinceYear', e.target.value)}
              >
                <option value="" disabled>Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Power hand</label>
            <div className="relative">
              <select
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.powerHand ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
                value={formData.powerHand}
                onChange={(e) => handleChange('powerHand', e.target.value)}
              >
                <option value="" disabled>Select</option>
                <option value="Right-Hander">Right-Hander</option>
                <option value="Left-Hander">Left-Hander</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
            </div>
          </div>
          <div>
            <label className={labelClass}>Back hand</label>
            <div className="relative">
              <select
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10 ${!formData.backHand ? 'text-[#6D727F]/75' : 'text-[#6D727F]'}`}
                value={formData.backHand}
                onChange={(e) => handleChange('backHand', e.target.value)}
              >
                <option value="" disabled>Select</option>
                <option value="Single Hand">Single Hand</option>
                <option value="Double Hand">Double Hand</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F] pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>DUPR profile link</label>
          <input
            type="url"
            placeholder="https://mydupr.com/..."
            className={inputBaseClass}
            value={formData.duprLink}
            onChange={(e) => handleChange('duprLink', e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Often seen playing at</label>
          <input
            type="text"
            placeholder="Club name & city"
            className={inputBaseClass}
            value={formData.oftenSeenPlayingAt}
            onChange={(e) => handleChange('oftenSeenPlayingAt', e.target.value)}
          />
        </div>
      </div>

      <div className="pt-10 flex justify-end">
        <button
          type="submit"
          disabled={!isFormValid()}
          className="flex items-center gap-4 bg-[#812926] text-white px-8 h-[50px] rounded-[15px] font-bold hover:bg-[#6e2220] transition-all disabled:opacity-30 disabled:grayscale active:scale-95 shadow-xl shadow-[#812926]/30 group"
        >
          <span className="text-lg">Continue</span>
          <ChevronRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </form>
  );
};

export default OnboardingForm;
