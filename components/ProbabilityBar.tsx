interface Props {
  label: string;
  value: number;
}

export default function ProbabilityBar({ label, value }: Props) {
  const percentage = (value * 100).toFixed(1);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
