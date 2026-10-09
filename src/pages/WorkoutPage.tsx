import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dumbbell, Clock, Flame, Info, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import ASSETS from '../assets/images';
import ImageWithFallback from '../components/ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

interface WorkoutDay {
  dayNumber: string;
  dayKey: string;
  dayName: string;
  muscleGroups: string;
  duration: string;
  intensity: string;
  image: string;
  exercises: Exercise[];
}

const workoutDays: WorkoutDay[] = [
  {
    dayNumber: '01',
    dayKey: 'MON',
    dayName: 'PUSH',
    muscleGroups: 'Chest • Shoulders • Triceps',
    duration: '50–60 Min',
    intensity: 'High Volume',
    image: ASSETS.programs.strength,
    exercises: [
      { name: 'Bench Press', sets: '3', reps: '8–10' },
      { name: 'Incline Dumbbell Press', sets: '3', reps: '10–12' },
      { name: 'Seated Shoulder Press', sets: '3', reps: '8–10' },
      { name: 'Dumbbell Lateral Raise', sets: '3', reps: '12–15' },
      { name: 'Cable Triceps Pushdown', sets: '3', reps: '10–15' },
      { name: 'Overhead Triceps Extension', sets: '2', reps: '12–15' },
    ],
  },
  {
    dayNumber: '02',
    dayKey: 'TUE',
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
      { name: 'Dumbbell Biceps Curl', sets: '3', reps: '10–12' },
      { name: 'Hammer Curl', sets: '2', reps: '10–15' },
    ],
  },
  {
    dayNumber: '03',
    dayKey: 'WED',
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
    dayNumber: '04',
    dayKey: 'THU',
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
    dayNumber: '05',
    dayKey: 'FRI',
    dayName: 'CONDITIONING + CORE',
    muscleGroups: 'Cardio • Core • Conditioning',
    duration: '45–50 Min',
    intensity: 'Metabolic & Endurance',
    image: ASSETS.programs.conditioning,
    exercises: [
      { name: 'Incline Treadmill Walk', sets: '—', reps: '15–20 min' },
      { name: 'Stationary Bike', sets: '—', reps: '10 min' },
      { name: 'Plank', sets: '3', reps: '30–45 sec' },
      { name: 'Reverse Crunch', sets: '3', reps: '12–15' },
      { name: 'Dead Bug', sets: '3', reps: '10/side' },
      { name: 'Bird Dog', sets: '2', reps: '10/side' },
    ],
  },
];

export default function WorkoutPage() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const currentDay = workoutDays[selectedDayIndex];

  return (
    <div className="min-h-screen bg-ivory text-near-black pt-24 sm:pt-28 md:pt-32">
      {/* ─── Hero Header ─── */}
      <section ref={heroRef} className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-14 md:py-20 border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
                Periodized Programming
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-5 sm:mb-6">
              5-DAY TRAINING
              <br />
              <span className="text-wine">PLAN</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              A structured training plan to build strength, muscle and conditioning. Calibrated for compound progression, muscular hypertrophy, and cardiovascular durability.
            </p>

            {/* Program Specs */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                'Split: Push • Pull • Legs • Upper • Conditioning',
                'Volume: 5 Training Days / 2 Active Rest',
                'Calibrated Rest: 60–120 Seconds',
                'Level: Intermediate to Advanced',
              ].map((spec) => (
                <div
                  key={spec}
                  className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-white border border-border-beige rounded-xs text-xs font-mono font-medium text-near-black shadow-xs"
                >
                  <Calendar size={13} className="text-wine shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Interactive 5-Day Workout Section ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Day Selector */}
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-5 gap-1.5 sm:gap-3 p-1.5 sm:p-2 bg-white border border-border-beige rounded-sm shadow-sm">
              {workoutDays.map((day, i) => {
                const isActive = i === selectedDayIndex;
                return (
                  <button
                    key={day.dayKey}
                    onClick={() => setSelectedDayIndex(i)}
                    className={`group relative flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-1 sm:px-3 rounded-xs transition-all duration-300 min-h-[46px] sm:min-h-[52px] ${
                      isActive
                        ? 'bg-wine text-white shadow-md shadow-wine/25'
                        : 'bg-transparent text-near-black hover:bg-ivory/80'
                    }`}
                    aria-selected={isActive}
                    aria-label={`${day.dayKey}: ${day.dayName}`}
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-wider">
                      {day.dayKey}
                    </span>
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest truncate max-w-full hidden xs:inline-block ${
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

          {/* Active Workout Card Panel */}
          <div className="bg-white border border-border-beige rounded-sm shadow-[0_12px_40px_rgba(17,17,17,0.03)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDay.dayKey}
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
                        {currentDay.dayKey}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-near-black">
                      DAY {currentDay.dayNumber} — {currentDay.dayName}
                    </h2>
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
                            <span className="font-bold text-sm sm:text-base text-near-black group-hover:text-wine transition-colors truncate">
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
                      Warm-up sets do not count toward working volume. Record working weights in your log.
                    </div>
                  </div>
                </div>

                {/* Training Notes Box */}
                <div className="mt-8 pt-6 border-t border-border-beige bg-ivory/50 p-4 sm:p-6 rounded-xs border border-border-beige/80">
                  <div className="flex items-center gap-2 mb-3.5">
                    <Info size={14} className="text-wine shrink-0" />
                    <h3 className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-wine">
                      TRAINING NOTES
                    </h3>
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

          {/* Coaching Callout Banner */}
          <div className="mt-10 sm:mt-14 p-6 sm:p-10 bg-white border border-border-beige rounded-sm shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-wine font-mono text-xs uppercase tracking-wider font-semibold block mb-1">
                Customized Progression
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-near-black mb-2">
                Need Personalized Biomechanical Coaching?
              </h3>
              <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                Our master coaches design individualized periodization protocols and provide 1-on-1 kinetic guidance on the floor.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/#trainers"
                className="px-6 py-3 border border-border-beige hover:border-wine bg-ivory text-near-black text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                Meet Coaches
              </Link>
              <Link
                to="/membership"
                className="px-6 py-3 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-sm"
              >
                Join X1 Club
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
