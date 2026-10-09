import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Dumbbell, Flame } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const days = [
  { day: 'MON', num: '01', name: 'PUSH', focus: 'Chest • Shoulders • Triceps' },
  { day: 'TUE', num: '02', name: 'PULL', focus: 'Back • Rear Delts • Biceps' },
  { day: 'WED', num: '03', name: 'LEGS', focus: 'Quads • Hamstrings • Glutes' },
  { day: 'THU', num: '04', name: 'UPPER', focus: 'Chest • Back • Arms' },
  { day: 'FRI', num: '05', name: 'CONDITIONING', focus: 'Cardio • Core • Capacity' },
];

export default function WorkoutPreview() {
  return (
    <section className="relative bg-ivory py-14 sm:py-20 md:py-28 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold">
              Weekly Periodization
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black mb-3">
            5-DAY TRAINING
            <br />
            <span className="text-wine">PLAN</span>
          </h2>

          <p className="text-dark-gray text-xs sm:text-base leading-relaxed font-normal">
            Follow our structured 5-day training plan to build strength, muscle and conditioning with progressive overload.
          </p>
        </div>

        {/* 5-Day Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
          {days.map((item, idx) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: easeOut }}
              className="bg-white border border-border-beige p-4 sm:p-5 rounded-sm hover:border-wine transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-wine tracking-wider">
                    {item.day}
                  </span>
                  <span className="text-[10px] font-mono text-dark-gray/60 uppercase">
                    Day {item.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black tracking-tight text-near-black mb-1.5">
                  {item.name}
                </h3>

                <p className="text-dark-gray text-xs leading-relaxed font-mono">
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border-beige/60 text-[11px] font-mono text-wine font-semibold">
                6 Exercises Prescribed
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Workout CTA */}
        <div className="text-center">
          <Link
            to="/workout"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors shadow-md min-h-[48px]"
          >
            <span>VIEW WORKOUT</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
