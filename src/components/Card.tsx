interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-3d p-6
      hover:scale-105 transition-transform duration-300 transform perspective-500 
      hover:rotateX-10 hover:rotateY-10 border-t border-gray-700 border-b overflow-hidden group 
      ${link ? "cursor-pointer" : "cursor-default"}`}
      onClick={link ? () => window.open(link, "_blank") : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-200 mt-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default Card;
