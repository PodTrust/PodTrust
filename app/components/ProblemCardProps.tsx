interface ProblemCardProps {
  title: string;
  desc: string;
}

export default function ProblemCard({ title, desc }: ProblemCardProps) {
  return (
    <div 
      className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-60 bg-white p-6 rounded-xl shadow-lg shrink-0 flex flex-col justify-between"
      >
      <h3 className="text-blue-600 font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}