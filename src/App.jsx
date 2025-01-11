import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

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

    </div>
  );
}
