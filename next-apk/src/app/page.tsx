'use client'
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import { useRouter } from "next/navigation";
export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const router = useRouter();
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Music />;
      case 'search':
        return <Navbar />;
      default:
        return <Home />;
    }
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    router.push('/');
  };

  const handleNameClick = () => {
    setCurrentView('search');
    router.push('/name');
  };

  return (
    <main className="flex p-[20px] gap-[10px] bg-slate-900 h-screen">
      <div className="flex flex-col  gap-[20px] p-[10px] bg-white">
      <div onClick={handleHomeClick}>
          <IoMdHome className="text-4xl cursor-pointer hover:text-slate-500" />
        </div>

        <div onClick={handleNameClick}>
        <IoIosSearch className="text-4xl cursor-pointer hover:text-slate-500" /> 
        </div>
       
      </div>
      <div className="flex-grow p-[20px] bg-white">
        {renderContent()}
      </div>
    </main>
  );
}
