import { twMerge } from "tailwind-merge";

const Subtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={twMerge(
        "text-3xl font-bold text-cyan-400 text-center",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default Subtitle;
