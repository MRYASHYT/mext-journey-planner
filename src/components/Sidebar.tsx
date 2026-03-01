import { useTheme, themes, Theme } from "@/hooks/useTheme";
import { Flame, BarChart3, Target, Link2, Settings, X, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { WeekData } from "@/data/weeklyData";
import { useState } from "react";
import { Auth } from "./Auth";

interface SidebarProps {
  weekProgress: number;
  monthProgress: number;
  weeksCompleted: number;
  totalWeeks: number;
  streak: number;
  currentWeek: WeekData;
}

const quickLinks = [
  { name: 'Anki Web', url: 'https://apps.ankiweb.net/' },
  { name: 'Duolingo', url: 'https://www.duolingo.com/' },
  { name: 'Genki Online', url: 'https://genki3.japantimes.co.jp/en/' },
  { name: 'LeetCode', url: 'https://leetcode.com/' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/' },
  { name: 'fast.ai', url: 'https://course.fast.ai/' },
];

const milestones = [
  { week: 10, label: 'Week 10' },
  { week: 24, label: 'Genki I Complete' },
  { week: 32, label: 'JLPT N5' },
  { week: 52, label: 'Year 1 Complete' },
  { week: 104, label: 'JLPT N3' },
  { week: 175, label: 'Depart for Japan!' },
];

export const Sidebar = ({
  weekProgress,
  monthProgress,
  weeksCompleted,
  totalWeeks,
  streak,
  currentWeek,
}: SidebarProps) => {
  const { theme, changeTheme } = useTheme();
  const [showThemes, setShowThemes] = useState(false);

  return (
    <aside className="w-full space-y-6">
      {/* Quick Stats */}
      <div className="bento-card p-6 reveal stagger-2">
        <span className="sidebar-header">Global Statistics</span>
        <div className="space-y-6">
          <div className="flex border-b border-border pb-4 last:border-0 last:pb-0 justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Streak</span>
              <div className="text-xl font-black">{streak} <span className="text-[10px]">Days</span></div>
            </div>
            <Flame className={cn("w-6 h-6", streak > 0 ? "text-foreground" : "text-muted-foreground/20")} />
          </div>

          <div className="flex border-b border-border pb-4 last:border-0 last:pb-0 justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Journey</span>
              <div className="text-xl font-black">{weeksCompleted}<span className="text-muted-foreground font-medium">/</span>{totalWeeks}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bento-card p-6 reveal stagger-3">
        <span className="sidebar-header">Mastery Milestones</span>
        <div className="space-y-4">
          {milestones.map(m => {
            const isCompleted = currentWeek.weekNumber >= m.week;
            const isCurrent = currentWeek.weekNumber >= m.week - 5 && currentWeek.weekNumber < m.week;

            return (
              <div
                key={m.week}
                className={cn(
                  "flex items-center gap-3 text-[10px] font-bold uppercase transition-all",
                  isCompleted ? "text-foreground/40" : isCurrent ? "text-foreground" : "text-muted-foreground/20"
                )}
              >
                <div className={cn(
                  "w-4 h-4 border flex items-center justify-center text-[8px]",
                  isCompleted ? "bg-foreground border-foreground text-background" : "border-border"
                )}>
                  {/* Bubble style - no X */}
                </div>
                <span className={cn(isCompleted && "line-through")}>{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Theme Selector */}
      <div className="bento-card p-6 reveal stagger-4">
        <button
          onClick={() => setShowThemes(!showThemes)}
          className="flex items-center justify-between w-full group"
        >
          <span className="sidebar-header !mb-0 group-hover:text-foreground transition-colors">Interface Theme</span>
          <span className="text-xs">{themes.find(t => t.id === theme)?.emoji}</span>
        </button>

        {showThemes && (
          <div className="grid grid-cols-2 gap-2 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={cn(
                  "p-3 border flex flex-col items-center gap-2 hover:border-foreground transition-all",
                  theme === t.id ? "border-foreground bg-muted" : "border-border"
                )}
              >
                <span className="text-xs font-black uppercase text-[10px]">{t.name}</span>
                <span className="text-sm">{t.emoji}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sync / Auth */}
      <div className="reveal stagger-5">
        <Auth />
      </div>
    </aside>
  );
};

