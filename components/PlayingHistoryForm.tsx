
import React, { useState, useRef } from 'react';
import { Plus, ChevronRight, ChevronDown, Trash2 } from 'lucide-react';
import { TournamentRecord, PlayingMedia } from '../types.ts';

interface PlayingHistoryFormProps {
  onComplete: (data: any) => void;
}

const PlayingHistoryForm: React.FC<PlayingHistoryFormProps> = ({ onComplete }) => {
  const [about, setAbout] = useState('');
  const [media, setMedia] = useState<(PlayingMedia | null)[]>([null, null, null, null]);
  const [tournaments, setTournaments] = useState<TournamentRecord[]>([]);
  const [skills, setSkills] = useState('');
  const [training, setTraining] = useState({ coachName: '', club: '', location: '' });
  const [equipment, setEquipment] = useState('');

  const mediaInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/') && file.size > 30 * 1024 * 1024) {
        alert("Video must be under 30MB/30 seconds.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMedia = [...media];
        newMedia[index] = {
          type: file.type.startsWith('video/') ? 'video' : 'image',
          url: reader.result as string
        };
        setMedia(newMedia);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTournament = () => {
    if (tournaments.length < 5) {
      setTournaments([...tournaments, { tournament: '', category: '', year: '', result: '' }]);
    }
  };

  const updateTournament = (index: number, field: keyof TournamentRecord, value: string) => {
    const newTournaments = [...tournaments];
    newTournaments[index] = { ...newTournaments[index], [field]: value };
    setTournaments(newTournaments);
  };

  const removeTournament = (index: number) => {
    setTournaments(tournaments.filter((_, i) => i !== index));
  };

  const getWordCount = (str: string) => str.trim().split(/\s+/).filter(Boolean).length;

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (getWordCount(val) <= 100) {
      setAbout(val);
    }
  };

  const isFormValid = () => {
    const hasMedia = media.some(m => m !== null);
    const aboutValid = about.length > 0 && getWordCount(about) <= 100;
    const tournamentsValid = tournaments.every(t =>
      !t.tournament && !t.category && !t.year && !t.result ||
      (t.tournament && t.category && t.year && t.result)
    );
    return aboutValid && hasMedia && equipment && tournamentsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onComplete({
        about,
        playingStyleMedia: media,
        notableTournaments: tournaments.filter(t => t.tournament),
        skills,
        ...training,
        equipment
      });
    }
  };

  const inputBaseClass = "w-full h-[50px] bg-[#F9FAFB] rounded-[15px] px-3 outline-none transition-all font-medium text-[#6D727F] placeholder-[#6D727F]/75 border-2 border-transparent focus:bg-white focus:border-[#812926]/20 flex items-center text-base";
  const labelClass = "block text-[14px] font-normal text-[#6D727F] mb-2 ml-1 tracking-tight";
  const dividerClass = "flex items-center gap-4 py-4";
  const dividerTextClass = "text-[12px] font-bold text-[#9CA3AF] lowercase tracking-[0.2em] whitespace-nowrap";
  const dividerLineClass = "flex-grow border-t border-gray-100";

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
      <div className="animate-slide-up pt-1">
        <label className={labelClass}>About</label>
        <div className="relative">
          <textarea
            className="w-full h-32 bg-[#F9FAFB] rounded-[15px] p-4 outline-none transition-all font-medium text-[#6D727F] placeholder-[#6D727F]/60 border-2 border-transparent focus:bg-white focus:border-[#812926]/20 text-base resize-none"
            placeholder="Tips: Share your journey into pickleball, major accomplishments, and what drives your passion and commitment to the sport."
            value={about}
            onChange={handleAboutChange}
            required
          />
          <div className="absolute bottom-3 right-4 text-[12px] font-bold text-[#9CA3AF]">
            {getWordCount(about)}/100
          </div>
        </div>
      </div>

      <div className={dividerClass}>
        <div className={dividerLineClass}></div>
        <span className={dividerTextClass}>playing style</span>
        <div className={dividerLineClass}></div>
      </div>

      <div className="grid grid-cols-2 gap-4 animate-slide-up">
        {media.map((item, idx) => (
          <div
            key={idx}
            onClick={() => mediaInputRefs[idx].current?.click()}
            className="aspect-square bg-[#F9FAFB] rounded-[15px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-[#812926]/40 transition-all group overflow-hidden relative"
          >
            {item ? (
              item.type === 'video' ? (
                <video src={item.url} className="w-full h-full object-cover" />
              ) : (
                <img src={item.url} className="w-full h-full object-cover" alt="Play" />
              )
            ) : (
              <div className="flex flex-col items-center text-[#9CA3AF] group-hover:text-[#6B7280]">
                <Plus size={32} strokeWidth={2.5} />
                <span className="text-[12px] font-bold mt-2">Showcase your Play</span>
              </div>
            )}
            <input
              type="file"
              hidden
              ref={mediaInputRefs[idx]}
              accept="image/*,video/*"
              onChange={(e) => handleMediaUpload(e, idx)}
            />
          </div>
        ))}
      </div>

      <div className={dividerClass}>
        <div className={dividerLineClass}></div>
        <span className={dividerTextClass}>notable tournaments</span>
        <div className={dividerLineClass}></div>
      </div>

      <div className="space-y-6 animate-slide-up">
        {tournaments.map((t, idx) => (
          <div key={idx} className="p-6 bg-white border-2 border-dashed border-gray-100 rounded-[20px] relative">
            <button
              type="button"
              onClick={() => removeTournament(idx)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform border border-red-50"
            >
              <Trash2 size={16} />
            </button>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Tournament</label>
                <input
                  type="text"
                  placeholder="Tournament name"
                  className={inputBaseClass}
                  value={t.tournament}
                  onChange={(e) => updateTournament(idx, 'tournament', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label className={labelClass}>Category</label>
                  <div className="relative">
                    <select
                      className={`${inputBaseClass} appearance-none pr-8 text-sm`}
                      value={t.category}
                      onChange={(e) => updateTournament(idx, 'category', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Singles">Singles</option>
                      <option value="Doubles">Doubles</option>
                      <option value="Mixed Doubles">Mixed Doubles</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6D727F]" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className={labelClass}>Year</label>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="Year"
                    className={`${inputBaseClass} text-sm`}
                    value={t.year}
                    onChange={(e) => updateTournament(idx, 'year', e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                <div className="col-span-1">
                  <label className={labelClass}>Result</label>
                  <div className="relative">
                    <select
                      className={`${inputBaseClass} appearance-none pr-8 text-sm`}
                      value={t.result}
                      onChange={(e) => updateTournament(idx, 'result', e.target.value)}
                    >
                      <option value="">Select</option>
                      {["Qualifiers", "Group Pool", "Round 64", "Round 48", "Round 32", "Round 16", "Quarter-Finalist", "Semi-finalist", "Winner", "Runner"].map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6D727F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {tournaments.length < 5 && (
          <button
            type="button"
            onClick={addTournament}
            className="w-full flex items-center justify-end gap-1 text-[#812926] font-bold text-sm hover:translate-x-1 transition-all"
          >
            <Plus size={16} /> Add
          </button>
        )}
      </div>

      <div className={dividerClass}>
        <div className={dividerLineClass}></div>
        <span className={dividerTextClass}>skills</span>
        <div className={dividerLineClass}></div>
      </div>

      <div className="animate-slide-up">
        <label className={labelClass}>Skills</label>
        <div className="relative">
          <select
            className={`${inputBaseClass} appearance-none pr-10`}
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          >
            <option value="">Select skills</option>
            <option value="Fast Volleys">Fast Volleys</option>
            <option value="Deep Serves">Deep Serves</option>
            <option value="Dinking Mastery">Dinking Mastery</option>
            <option value="Third Shot Drop">Third Shot Drop</option>
          </select>
          <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D727F]" />
        </div>
      </div>

      <div className={dividerClass}>
        <div className={dividerLineClass}></div>
        <span className={dividerTextClass}>training</span>
        <div className={dividerLineClass}></div>
      </div>

      <div className="space-y-4 animate-slide-up">
        <div className="p-6 bg-white border-2 border-dashed border-gray-100 rounded-[20px] space-y-4">
          <div>
            <label className={labelClass}>Coach Name</label>
            <input
              type="text"
              placeholder="No coach, specify self-trained"
              className={inputBaseClass}
              value={training.coachName}
              onChange={(e) => setTraining({ ...training, coachName: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Club</label>
              <input
                type="text"
                placeholder="Club name"
                className={inputBaseClass}
                value={training.club}
                onChange={(e) => setTraining({ ...training, club: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Location</label>
              <input
                type="text"
                placeholder="Place or State & Country"
                className={inputBaseClass}
                value={training.location}
                onChange={(e) => setTraining({ ...training, location: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={dividerClass}>
        <div className={dividerLineClass}></div>
        <span className={dividerTextClass}>equipment</span>
        <div className={dividerLineClass}></div>
      </div>

      <div className="animate-slide-up">
        <label className={labelClass}>Paddle used</label>
        <input
          type="text"
          placeholder="Brand name and model"
          className={inputBaseClass}
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          required
        />
      </div>

      <div className="pt-10 flex justify-end">
        <button
          type="submit"
          disabled={!isFormValid()}
          className="flex items-center gap-4 bg-[#812926] text-white px-8 h-[50px] rounded-[15px] font-bold hover:bg-[#6e2220] transition-all disabled:opacity-30 disabled:grayscale active:scale-95 shadow-xl shadow-[#812926]/30 group"
        >
          <span className="text-lg">Next</span>
          <ChevronRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </form>
  );
};

export default PlayingHistoryForm;
