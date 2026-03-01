import { WeekData } from "@/data/weeklyData";
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeekHeaderProps {
  week: WeekData;
  currentWeek: number;
  totalWeeks: number;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  overallProgress: number;
  daysCompleted: boolean[];
  onToggleDay: (dayIndex: number, isCompleted: boolean) => void;
}

export const WeekHeader = ({
  week,
  currentWeek,
  totalWeeks,
  onPreviousWeek,
  onNextWeek,
  overallProgress,
  daysCompleted,
  onToggleDay
}: WeekHeaderProps) => {
  return (
    <div className="bento-card p-10 reveal">
      {/* Navigation & Title */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="mono-tag">{week.phase}</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase">{week.startDate} — {week.endDate}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            WEEK {week.weekNumber}
          </h2>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{week.focus}</p>

          <div className="mt-8 flex flex-col items-center md:items-start gap-3 w-full max-w-full overflow-hidden">
            <span className="sidebar-header !mb-0 text-[10px]">Mark Whole Day Complete</span>
            <div className="flex gap-2 pb-2 overflow-x-auto w-full md:w-auto justify-start sm:justify-center md:justify-start scrollbar-hide snap-x px-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, ix) => (
                <button
                  key={ix}
                  onClick={() => onToggleDay(ix, daysCompleted[ix])}
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 shrink-0 snap-start border-2 flex items-center justify-center rounded-xl transition-all duration-300 font-bold text-xs uppercase hover:scale-110",
                    daysCompleted[ix]
                      ? "bg-foreground text-background border-foreground shadow-lg"
                      : "border-foreground/30 text-muted-foreground hover:border-foreground/60"
                  )}
                >
                  {daysCompleted[ix] ? "✓" : day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-2">
            <button
              onClick={onPreviousWeek}
              disabled={currentWeek === 1}
              className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNextWeek}
              disabled={currentWeek === totalWeeks}
              className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background disabled:opacity-20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="text-center md:text-right">
            <span className="sidebar-header mb-1">Journey Timeline</span>
            <div className="text-xs font-black uppercase tracking-widest">W{currentWeek} / W{totalWeeks}</div>
          </div>
        </div>
      </div>

      {/* Milestone */}
      {week.milestone && (
        <div className="mt-12 p-6 border-2 border-foreground bg-foreground text-background flex items-center justify-between reveal">
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-xl font-black uppercase tracking-tighter">{week.milestone}</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 hidden sm:block">Mastery Required</span>
        </div>
      )}
    </div>
  );
};
