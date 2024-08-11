import { useState } from "react";

type ToggleButtonProps = {
  onToggle: (isMonthly: boolean) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleToggle = () => {
    const newIsMonthly = !isMonthly;
    setIsMonthly(newIsMonthly);
    onToggle(newIsMonthly);
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="border-2 border-primary rounded-full">
        <button
          className={`${
            isMonthly ? "bg-primary text-white" : "bg-white text-secondary"
          } font-medium text-base py-2 px-7 my-1 mx-1 rounded-full`}
          onClick={handleToggle}
        >
          Monthly
        </button>
        <button
          className={`${
            !isMonthly ? "bg-primary text-white" : "bg-white text-secondary"
          } font-medium text-base py-2 px-7 my-1 mx-1 rounded-full`}
          onClick={handleToggle}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
