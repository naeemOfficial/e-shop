import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";

type MembershipCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isAdvance?: boolean;
};

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  price,
  description,
  isAdvance,
  features,
}) => {
  return (
    <div
      className={`w-80 rounded shadow-lg m-7 px-8 py-4 ${
        isAdvance ? "bg-[#FDC648] h-[800px]" : "h-[700px]"
      } relative`}
    >
      <div className=" ">
        <div
          className={`font-bold text-center pt-12 text-[32px] mb-2 ${
            isAdvance ? "text-white" : "text-secondary"
          }`}
        >
          {title}
        </div>
        <p
          className={`text-center font-bold text-[64px] ${
            isAdvance ? "text-white" : "text-secondary"
          }`}
        >
          {price}
        </p>
        <p
          className={`text-center text-[16px] leading-[5px] ${
            isAdvance ? "text-white" : "text-secondary"
          }`}
        >
          {description}
        </p>
        <ul className="mt-14 space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 ">
              <div
                className={`p-1 rounded-full ${
                  isAdvance ? "bg-white" : "bg-primary"
                }`}
              >
                <IoCheckmarkOutline
                  className={`${isAdvance ? "text-primary" : "text-white"}`}
                />
              </div>
              <span className={`${isAdvance ? "text-white" : "text-primary"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute px-8 bottom-6 left-0 right-0">
        <Link href="/payment">
          <button
            className={`w-full py-3  text-base rounded ${
              isAdvance ? "bg-white text-secondary" : "bg-primary text-white"
            }`}
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MembershipCard;
