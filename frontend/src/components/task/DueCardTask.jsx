import { CalendarDaysIcon } from "@heroicons/react/24/solid";
function DueCardTask({ progress, count, children }) {
  return (
    <div className="border h-36 flex justify-between p-5 border-slate-950 rounded-lg bg-slate-50">
      <div className="flex flex-col justify-center gap-2">
        <span>
          <CalendarDaysIcon className="w-10" />
        </span>
        <span className="font-semibold text-2xl">{progress}</span>
      </div>
      <span className="font-bold text-3xl">{count}</span>
    </div>
  );
}

export default DueCardTask;
