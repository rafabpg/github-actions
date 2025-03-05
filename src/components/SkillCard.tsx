import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ElementType;
}

const SkillCard = ({ name, icon: Icon }: SkillCardProps) => {
  return (
    <div className="bg-gray-800 flex items-center justify-center gap-2 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <Icon className="text-cyan-400 w-6 h-6 lg:w-8 lg:h-8" />
      <h3 className="text-gray-200 text-base lg:text-xl text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;
