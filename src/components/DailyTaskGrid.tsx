import { Task, WeekData } from "@/data/weeklyData";
import { DailyTasks } from "@/hooks/useHabitTracker";
import { Check, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DailyTaskGridProps {
  title: string;
  icon: React.ReactNode;
  tasks: Task[];
  category: 'japanese' | 'aiml' | 'college' | 'goals';
  dailyTasks: DailyTasks;
  onToggle: (taskId: string, dayIndex: number) => void;
  className?: string;
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const categoryColors = {
  japanese: {
    bg: 'bg-japanese/5',
    border: 'border-japanese/20',
    dot: 'bg-japanese',
    progress: 'bg-japanese',
    icon: 'text-japanese',
  },
  aiml: {
    bg: 'bg-aiml/5',
    border: 'border-aiml/20',
    dot: 'bg-aiml',
    progress: 'bg-aiml',
    icon: 'text-aiml',
  },
  college: {
    bg: 'bg-college/5',
    border: 'border-college/20',
    dot: 'bg-college',
    progress: 'bg-college',
    icon: 'text-college',
  },
  goals: {
    bg: 'bg-goals/5',
    border: 'border-goals/20',
    dot: 'bg-goals',
    progress: 'bg-goals',
    icon: 'text-goals',
  },
};

export const DailyTaskGrid = ({
  title,
  icon,
  tasks,
  category,
  dailyTasks,
  onToggle,
  className
}: DailyTaskGridProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Calculate progress
  let completed = 0;
  let total = 0;
  tasks.forEach(task => {
    const days = dailyTasks[task.id] || [false, false, false, false, false, false, false];
    completed += days.filter(Boolean).length;
    total += 7;
  });
  const progress = total > 0 ? (completed / total) * 100 : 0;

  if (tasks.length === 0) return null;

  return (
    <div className={cn("bento-card p-6 reveal", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-foreground flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="mono-tag">Progress {Math.round(progress)}%</span>
              <span className="text-[10px] font-bold text-muted-foreground">{completed}/{total} Completed</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="group flex flex-col items-end"
        >
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
            {isCollapsed ? "Expand" : "Collapse"}
            {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </div>
          <span className="text-[8px] text-muted-foreground/40 font-bold uppercase">{isCollapsed ? "展開する" : "折りたたむ"}</span>
        </button>
      </div>

      {!isCollapsed && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-500">
          {/* Day headers */}
          <div className="grid grid-cols-[auto_1fr] gap-4 mb-4">
            <div className="flex items-center gap-1 min-w-0 pr-2 pl-2">
              {DAYS.map(day => (
                <div key={day} className="w-12 text-[10px] font-bold text-muted-foreground uppercase text-center">{day.substring(0, 1)}</div>
              ))}
            </div>
            <div className="sidebar-header !mb-0 self-end pb-2">Task Details</div>
          </div>

          {/* Tasks */}
          <div className="border-t border-border">
            {tasks.map(task => {
              const taskDays = dailyTasks[task.id] || [false, false, false, false, false, false, false];

              return (
                <div key={task.id} className="grid grid-cols-[auto_1fr] gap-4 items-center border-b border-border hover:bg-muted/30 transition-colors group">
                  <div className="flex items-center gap-1 min-w-0 pr-2 py-3 pl-2 shrink-0">
                    {DAYS.map((_, dayIndex) => (
                      <button
                        key={dayIndex}
                        onClick={() => onToggle(task.id, dayIndex)}
                        className={cn(
                          "task-cell",
                          taskDays[dayIndex] && "active"
                        )}
                        title={`Mark ${DAYS[dayIndex]} complete`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 min-w-0 py-3 pr-2 grow">
                    <span className="text-xs font-bold truncate text-foreground/80 group-hover:text-foreground transition-colors">{task.text}</span>
                    {task.link && (
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-foreground opacity-20 group-hover:opacity-100 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Schedule hint */}
          {tasks.some(t => t.schedule) && (
            <div className="mt-8 flex flex-wrap gap-2">
              {tasks.filter(t => t.schedule).map(t => (
                <span key={t.id} className="mono-tag border-transparent bg-muted text-muted-foreground">
                  {t.schedule}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
