import React from 'react';
import { Button } from '@/components/ui/button';

const PromoSouvenirComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch bg-gray-100">
      <div className="flex-1 relative overflow-hidden group">
        <img
          src="/fondo-1.jpeg"
          alt="Promos & Regalos"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
          <h2 className="text-3xl text-[#04d9b2] font-geometos mb-4">PROMOS & REGALOS</h2>
          <Button className="bg-[#04d9b2] hover:bg-[#5D60a6] font-geometos rounded-full text-white w-32">VER MAS</Button>
        </div>
      </div>
      
      <div className="flex-1 relative overflow-hidden group">
        <img
          src="/mock-ups.png"
          alt="Souvenirs & Otras Memorias"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
          <h2 className="text-3xl font-bold font-geometos text-[#04d9b2] mb-4">SOUVENIRS & OTRAS MEMORIAS</h2>
          <Button className="bg-[#04d9b2] hover:bg-[#5D60a6] font-geometos rounded-full text-white w-32">VER MAS</Button>
        </div>
      </div>
    </div>
  );
};

export default PromoSouvenirComponent;

