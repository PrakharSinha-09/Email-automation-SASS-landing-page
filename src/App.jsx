import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  }

  return (
    <div>
      <Navbar  />
      <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
