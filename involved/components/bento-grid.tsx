import { cn } from "@/app/(utils)/cn";

export const BentoGrid = ({
 className,
 children,
}: {
 className?: string;
 children?: React.ReactNode;
}) => {
 return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
 );
};

// Extend the props for BentoGridItem to include an image property
export const BentoGridItem = ({
 className,
 title,
 description,
 header,
 icon,
 ngo
}: {
 className?: string;
 title?: string | React.ReactNode;
 description?: string | React.ReactNode;
 header?: React.ReactNode;
 icon?: React.ReactNode;
 ngo?: string
}) => {
 return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      >
        {/* {image && <img src={image} alt="Grid Item Image" className="w-10 h-10 object-cover rounded" />} */}
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {/* Render the image if the image prop is provided */}
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-2">
          {title}
        </div>
        <div>
          {ngo}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
 );
};
