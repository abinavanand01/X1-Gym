import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Dumbbell, Clock, Flame, Info } from 'lucide-react';
import ASSETS from '../assets/images';
import ImageWithFallback from './ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

interface WorkoutDay {
  dayNumber: string;
  dayShort: string;
  dayFull: string;
  dayName: string;
  muscleGroups: string;
  duration: string;
  intensity: string;
  image: string;
  exercises: Exercise[];
}

const workoutDays: WorkoutDay[] = [
  {
    dayNumber: '1',
    dayShort: 'MON',
    dayFull: 'MONDAY',
    dayName: 'PUSH',
    muscleGroups: 'Chest • Shoulders • Triceps',
    duration: '50–60 Min',
    intensity: 'High Volume',
    image: ASSETS.programs.strength,
    exercises: [
      { name: 'Bench Press', sets: '3', reps: '8–10' },
      { name: 'Incline Dumbbell Press', sets: '3', reps: '10–12' },
      { name: 'Seated Shoulder Press', sets: '3', reps: '8–10' },
      { name: 'Lateral Raise', sets: '3', reps: '12–15' },
      { name: 'Cable Triceps Pushdown', sets: '3', reps: '10–15' },
      { name: 'Overhead Triceps Extension', sets: '2', reps: '12–15' },
    ],
  },
  {
    dayNumber: '2',
    dayShort: 'TUE',
    dayFull: 'TUESDAY',
    dayName: 'PULL',
    muscleGroups: 'Back • Rear Delts • Biceps',
    duration: '50–60 Min',
    intensity: 'High Volume',
    image: ASSETS.programs.hypertrophy,
    exercises: [
      { name: 'Lat Pulldown', sets: '3', reps: '8–12' },
      { name: 'Chest-Supported Row', sets: '3', reps: '8–12' },
      { name: 'Seated Cable Row', sets: '2', reps: '10–12' },
      { name: 'Face Pull', sets: '3', reps: '12–15' },
      { name: 'Dumbbell Curl', sets: '3', reps: '10–12' },
      { name: 'Hammer Curl', sets: '2', reps: '10–15' },
    ],
  },
  {
    dayNumber: '3',
    dayShort: 'WED',
    dayFull: 'WEDNESDAY',
    dayName: 'LEGS',
    muscleGroups: 'Quads • Hamstrings • Glutes • Calves',
    duration: '55–65 Min',
    intensity: 'Maximal Effort',
    image: ASSETS.programs.performance,
    exercises: [
      { name: 'Squat', sets: '3', reps: '6–10' },
      { name: 'Leg Press', sets: '3', reps: '10–12' },
      { name: 'Romanian Deadlift', sets: '3', reps: '8–12' },
      { name: 'Leg Extension', sets: '2', reps: '12–15' },
      { name: 'Leg Curl', sets: '3', reps: '10–15' },
      { name: 'Standing Calf Raise', sets: '3', reps: '12–20' },
    ],
  },
  {
    dayNumber: '4',
    dayShort: 'THU',
    dayFull: 'THURSDAY',
    dayName: 'UPPER',
    muscleGroups: 'Chest • Back • Shoulders • Arms',
    duration: '50–60 Min',
    intensity: 'Hypertrophy Density',
    image: ASSETS.programs.personalTraining,
    exercises: [
      { name: 'Incline Chest Press', sets: '3', reps: '8–12' },
      { name: 'Single-Arm Dumbbell Row', sets: '3', reps: '8–12' },
      { name: 'Cable Chest Fly', sets: '2', reps: '12–15' },
      { name: 'Lat Pulldown', sets: '3', reps: '10–12' },
      { name: 'Lateral Raise', sets: '3', reps: '12–15' },
      { name: 'EZ-Bar Curl', sets: '2', reps: '10–12' },
      { name: 'Rope Triceps Pushdown', sets: '2', reps: '10–15' },
    ],
  },
  {
    dayNumber: '5',
    dayShort: 'FRI',
    dayFull: 'FRIDAY',
    dayName: 'CONDITIONING + CORE',
    muscleGroups: 'Cardio • Core • Conditioning',
    duration: '45–50 Min',
    intensity: 'Metabolic & Endurance',
    image: ASSETS.programs.conditioning,
    exercises: [
      { name: 'Incline Treadmill', sets: '—', reps: '15–20 min' },
      { name: 'Stationary Bike', sets: '—', reps: '10 min' },
      { name: 'Plank', sets: '3', reps: '30–45 sec' },
      { name: 'Reverse Crunch', sets: '3', reps: '12–15' },
      { name: 'Dead Bug', sets: '3', reps: '10/side' },
      { name: 'Bird Dog', sets: '2', reps: '10/side' },
    ],
  },
];

export default function Workout() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const currentDay = workoutDays[selectedDayIndex];

  return (
    <section
      id="workout"
      className="relative bg-ivory py-14 sm:py-20 md:py-36 overflow-hidden border-t border-border-beige"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                Weekly Periodization
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              5-DAY TRAINING
              <br />
              <span className="text-wine">PLAN</span>
            </h2>
          </div>

          <p className="text-dark-gray text-xs sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            A structured training plan to build strength, muscle and conditioning with progressive overload.
          </p>
        </motion.div>

        {/* 5-Day Selector Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3 p-1.5 sm:p-2 bg-white border border-border-beige rounded-sm shadow-sm">
            {workoutDays.map((day, i) => {
              const isActive = i === selectedDayIndex;
              return (
                <button
                  key={day.dayFull}
                  onClick={() => setSelectedDayIndex(i)}
                  className={`group relative flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-1 sm:px-3 rounded-xs transition-all duration-300 min-h-[46px] sm:min-h-[52px] cursor-pointer ${
                    isActive
                      ? 'bg-wine text-white shadow-md shadow-wine/25'
                      : 'bg-transparent text-near-black hover:bg-ivory/80'
                  }`}
                  aria-selected={isActive}
                  aria-label={`${day.dayFull}: ${day.dayName}`}
                >
                  {/* Full label on tablet/desktop, short code on mobile to avoid overflow */}
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider hidden sm:inline">
                    {day.dayFull}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider sm:hidden">
                    {day.dayShort}
                  </span>

                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest truncate max-w-full hidden md:inline-block ${
                      isActive ? 'text-white/90' : 'text-dark-gray group-hover:text-near-black'
                    }`}
                  >
                    {day.dayName.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Workout Card Container */}
        <div className="bg-white border border-border-beige rounded-sm shadow-[0_12px_40px_rgba(17,17,17,0.03)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDay.dayFull}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="p-5 sm:p-8 md:p-12"
            >
              {/* Day Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 sm:pb-8 border-b border-border-beige gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-wine font-mono text-xs sm:text-sm font-bold tracking-[0.2em]">
                      DAY {currentDay.dayNumber}
                    </span>
                    <span className="text-dark-gray/40 font-mono text-xs">•</span>
                    <span className="text-dark-gray font-mono text-xs uppercase tracking-wider">
                      {currentDay.dayFull}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-near-black">
                    DAY {currentDay.dayNumber} — {currentDay.dayName}
                  </h3>
                  <p className="text-wine font-mono text-xs sm:text-sm font-medium tracking-wide mt-1">
                    {currentDay.muscleGroups}
                  </p>
                </div>

                {/* Session Meta Tags */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory rounded-xs border border-border-beige text-[11px] sm:text-xs font-mono font-medium text-near-black">
                    <Clock size={13} className="text-wine shrink-0" />
                    <span>{currentDay.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory rounded-xs border border-border-beige text-[11px] sm:text-xs font-mono font-medium text-near-black">
                    <Flame size={13} className="text-wine shrink-0" />
                    <span>{currentDay.intensity}</span>
                  </div>
                </div>
              </div>

              {/* Main Content Layout: Exercise List with Visual Backdrop */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-6 sm:pt-8 items-start">
                {/* Exercise Table (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="flex items-center justify-between pb-3 border-b border-border-beige text-[11px] font-mono uppercase tracking-[0.2em] text-dark-gray font-semibold">
                    <span>Exercise</span>
                    <span>Prescription</span>
                  </div>

                  <div className="divide-y divide-border-beige/70">
                    {currentDay.exercises.map((exercise, idx) => (
                      <div
                        key={exercise.name}
                        className="py-3.5 sm:py-4 flex items-center justify-between gap-3 group hover:bg-ivory/40 px-1 sm:px-2 transition-colors rounded-xs"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <span className="font-mono text-xs sm:text-sm font-bold text-wine/80 shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-near-black group-hover:text-wine transition-colors break-words leading-snug">
                            {exercise.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-ivory rounded-xs border border-border-beige text-xs sm:text-sm font-mono font-semibold text-near-black shrink-0">
                          {exercise.sets !== '—' && (
                            <span className="text-dark-gray">{exercise.sets} ×</span>
                          )}
                          <span className="text-wine font-bold">{exercise.reps}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Gym Platform Framing */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-xs overflow-hidden bg-ivory-warm border border-border-beige">
                    <ImageWithFallback
                      src={currentDay.image}
                      alt={`X1 Training Arena — ${currentDay.dayName}`}
                      className="w-full h-full object-cover object-center editorial-img"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/45 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-xs border border-white/10">
                        Eleiko Bay 0{currentDay.dayNumber}
                      </span>
                      <Dumbbell size={13} className="text-wine-light" />
                    </div>
                  </div>

                  <div className="p-3.5 bg-ivory/80 border border-border-beige rounded-xs text-[11px] sm:text-xs text-dark-gray leading-relaxed font-normal">
                    <span className="font-bold text-near-black font-mono uppercase tracking-wider block mb-1">
                      Coaching Directive
                    </span>
                    Execute warm-up sets progressively. Record target working weights in your log.
                  </div>
                </div>
              </div>

              {/* Training Notes Box */}
              <div className="mt-8 pt-6 border-t border-border-beige bg-ivory/50 p-4 sm:p-6 rounded-xs border border-border-beige/80">
                <div className="flex items-center gap-2 mb-3.5">
                  <Info size={14} className="text-wine shrink-0" />
                  <h4 className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-wine">
                    TRAINING NOTES
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-near-black block mb-1 font-mono uppercase tracking-wider text-[11px]">
                      Rest:
                    </span>
                    <p className="text-dark-gray leading-relaxed font-normal">
                      60–120 seconds between sets.
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-near-black block mb-1 font-mono uppercase tracking-wider text-[11px]">
                      Progression:
                    </span>
                    <p className="text-dark-gray leading-relaxed font-normal">
                      Increase weight gradually when the prescribed top end of the rep range can be completed with good form.
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-near-black block mb-1 font-mono uppercase tracking-wider text-[11px]">
                      Technique:
                    </span>
                    <p className="text-dark-gray leading-relaxed font-normal">
                      Prioritize controlled movement and proper form.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
