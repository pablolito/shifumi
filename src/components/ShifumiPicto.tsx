import React from "react";
import { FaHandScissors, FaLeaf, FaHandRock } from "react-icons/fa";
import { Action } from "../types/game";

interface PictoProps {
  action: Action;
  className?: string;
}

const ShifumiPicto: React.FC<PictoProps> = ({ action, className = "m-auto" }) => {
  const getIcon = () => {
    switch (action) {
      case 1:
        return <FaHandRock className={className} />;
      case 2:
        return <FaLeaf className={className} />;
      case 3:
        return <FaHandScissors className={className} />;
      default:
        return null;
    }
  };

  return getIcon();
};

export default ShifumiPicto;
