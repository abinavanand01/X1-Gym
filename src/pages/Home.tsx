import Hero from '../components/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import TrainersPreview from '../components/home/TrainersPreview';
import MembershipPreview from '../components/MembershipPreview';
import WorkoutPreview from '../components/home/WorkoutPreview';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Programs Preview */}
      <ProgramsPreview />

      {/* 4. Trainers Preview */}
      <TrainersPreview />

      {/* 5. Membership Preview */}
      <MembershipPreview />

      {/* 6. Workout Preview */}
      <WorkoutPreview />

      {/* 7. Contact CTA */}
      <ContactCTA />
    </>
  );
}
