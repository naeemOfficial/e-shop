import React from 'react';
import TeamCard from './ui/Teamcard'; // Assuming TeamCard is in the same directory
import { teamData } from '@/Data/Dummy';

const Team = () => {
  return (
    <section className="pt-28 pb-40">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center mb-28">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
