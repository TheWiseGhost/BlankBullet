import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Built for anyone",
      description: "Create a simple store in minutes no matter the product",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as binge watching Netflix, but doesn't take as long.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description: "You will find a winner at a fraction of the cost",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Refund guarantee",
      description: "We're confident no one will hate DropFast",
      icon: <IconCloud />,
    },
    {
      title: "Multi Test",
      description:
        "Launch Multiple Drops at once to quickly test all products on your winner list",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description: "We are available 100% of the time with quick responses",
      icon: <IconHelp />,
    },
    {
      title: "Actual Data",
      description:
        "Learn more about your product and customers, turning you from a dropshipper into a brand builder",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "You will succeed",
      description:
        "Volume is all that matters and DropFast lets you pump enough products so a winner is inevitable",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-gray-400",
        (index === 0 || index === 4) && "lg:border-l border-gray-400",
        index < 4 && "lg:border-b border-gray-400"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-black transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
