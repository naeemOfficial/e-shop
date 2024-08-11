"use client";
import MembershipCard from '@/components/ui/MembershipCard';
import ToggleButton from '@/components/ui/ToggleButton';
import { useState } from 'react';

const MemberShip: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleToggle = (isMonthly: boolean) => {
    setIsMonthly(isMonthly);
  };
  

  const starterFeatures = ['Discount on Products', 'Discount on Services', 'Free Delivery', '24/7 Customer Service'];
  const advanceFeatures = ['Discount on Products', 'Discount on Services', 'Free Delivery', 'Referral Partner', 'Own Store Option', 'Priority Customer Support'];
  const proFeatures = ['Feature 1Discount on Products', 'Feature 2Discount on Services', 'Feature 3Free Delivery', 'Feature 4Own Store Option', '24/7 Customer Service'];

  return (
    <div className="container mx-auto py-12">
      <ToggleButton onToggle={handleToggle} />
      <div className="flex flex-wrap justify-center py-20">
        <MembershipCard
          title="Starter"
          price={isMonthly ? "$10.99" : "$100.99"}
          description={isMonthly ? "Per Month" : "Per Year"}
          features={starterFeatures}
        />
        <MembershipCard
          title="Advance"
          price={isMonthly ? "$20.99" : "$200.99"}
          description={isMonthly ? "Per Month" : "Per Year"}
          features={advanceFeatures}
          isAdvance
        />
        <MembershipCard
          title="Pro"
          price={isMonthly ? "$30.99" : "$300.99"}
          description={isMonthly ? "Per Month" : "Per Year"}
          features={proFeatures}
        />
      </div>
    </div>
  );
};

export default MemberShip;