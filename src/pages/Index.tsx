import { useHabitTracker } from "@/hooks/useHabitTracker";
import { useTheme } from "@/hooks/useTheme";
import { WeekHeader } from "@/components/WeekHeader";
import { DailyTaskGrid } from "@/components/DailyTaskGrid";
import { Sidebar } from "@/components/Sidebar";
import { Notes } from "@/components/Notes";
import { WeekSummary } from "@/components/WeekSummary";
import { WeekSelector } from "@/components/WeekSelector";
import { Chatbot } from "@/components/Chatbot";
import { Plane, Sparkles, BookOpen, Brain, GraduationCap, Target } from "lucide-react";
import { jsPDF } from "jspdf";
import { toast } from "@/hooks/use-toast";
import { Task } from "@/data/weeklyData";
const Index = () => {
  const {
    currentWeek,
    setCurrentWeek,
    toggleDailyTask,
    toggleDay,
    getWeekDailyTasks,
    getTaskCompletionForWeek,
    calculateOverallProgress,
    getWeekNotes,
    updateWeekNotes,
    getWeeksCompleted,
    addCustomTask,
    removeTask,
    streak,
    totalWeeks,
    weekData,
  } = useHabitTracker();

  const handleAddTask = (category: string, task: Task) => {
    addCustomTask(currentWeek, category, task);
  };

  const handleRemoveTask = (category: string, taskId: string) => {
    removeTask(currentWeek, taskId);
  };

  useTheme(); // Initialize theme

  const dailyTasks = getWeekDailyTasks(currentWeek);
  const overallProgress = calculateOverallProgress();
  const weekNotes = getWeekNotes(currentWeek);

  if (!weekData) return null;

  const allTasks = [...weekData.japanese, ...weekData.aiml, ...weekData.college, ...weekData.goals];
  const weekProgress = getTaskCompletionForWeek(currentWeek, allTasks).percentage;

  const daysCompleted = Array(7).fill(false).map((_, dayIndex) => {
    return allTasks.length > 0 && allTasks.every(task => {
      const taskDays = dailyTasks[task.id];
      return taskDays && taskDays[dayIndex];
    });
  });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`MEXT Journey - Week ${weekData.weekNumber}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`${weekData.startDate} - ${weekData.endDate}, ${weekData.year}`, 20, 30);
    doc.text(`Phase: ${weekData.phase} | Focus: ${weekData.focus}`, 20, 40);

    let y = 55;
    const sections = [
      { title: 'Japanese Learning', tasks: weekData.japanese },
      { title: 'AI/ML Work', tasks: weekData.aiml },
      { title: 'College Work', tasks: weekData.college },
      { title: 'Weekly Goals', tasks: weekData.goals },
    ];

    sections.forEach(section => {
      doc.setFontSize(14);
      doc.text(section.title, 20, y);
      y += 8;
      doc.setFontSize(10);
      section.tasks.forEach(task => {
        const taskDays = dailyTasks[task.id] || [false, false, false, false, false, false, false];
        const completed = taskDays.filter(Boolean).length;
        doc.text(`☐ ${task.text} (${completed}/7 days)`, 25, y);
        y += 6;
        if (y > 270) { doc.addPage(); y = 20; }
      });
      y += 5;
    });

    doc.save(`mext-week-${weekData.weekNumber}.pdf`);
    toast({ title: "PDF Downloaded!", description: `Week ${weekData.weekNumber} saved.` });
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-foreground selection:text-background">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        {/* Minimalist Navigation */}
        <nav className="relative z-50 flex justify-between items-end mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                <Plane className="w-5 h-5 text-background" />
              </div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">MASTENHQ</h1>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Japanese Academic Roadmap</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right hidden sm:block">
              <span className="sidebar-header mb-1">Global Mastery</span>
              <span className="text-2xl font-black">{Math.round(overallProgress)}%</span>
            </div>
            <div className="flex gap-2">
              <WeekSelector currentWeek={currentWeek} onSelectWeek={setCurrentWeek} />
              <button
                onClick={handleDownloadPDF}
                className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Progress Dock (Bento Sidebar) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bento-card p-6 reveal stagger-1">
              <span className="sidebar-header">Week {weekData.weekNumber} Progress</span>
              <div className="text-4xl font-black mb-4">{Math.round(weekProgress)}%</div>
              <div className="progress-bar-minimal">
                <div className="progress-fill-minimal" style={{ width: `${weekProgress}%` }} />
              </div>
            </div>

            <div className="reveal stagger-2">
              <Sidebar
                weekProgress={weekProgress}
                monthProgress={weekProgress}
                weeksCompleted={getWeeksCompleted()}
                totalWeeks={totalWeeks}
                streak={streak}
                currentWeek={weekData}
              />
            </div>
          </div>

          {/* Main Task Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="reveal stagger-1">
              <WeekHeader
                week={weekData}
                currentWeek={currentWeek}
                totalWeeks={totalWeeks}
                onPreviousWeek={() => setCurrentWeek(Math.max(1, currentWeek - 1))}
                onNextWeek={() => setCurrentWeek(Math.min(totalWeeks, currentWeek + 1))}
                overallProgress={overallProgress}
                daysCompleted={daysCompleted}
                onToggleDay={(dayIndex, isCompleted) => toggleDay(currentWeek, dayIndex, isCompleted)}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="reveal stagger-2">
                <DailyTaskGrid
                  title="日本語学習 · Japanese Learning"
                  icon={<BookOpen className="w-4 h-4" />}
                  tasks={weekData.japanese}
                  category="japanese"
                  dailyTasks={dailyTasks}
                  onToggle={(taskId, dayIndex) => toggleDailyTask(currentWeek, taskId, dayIndex)}
                />
              </div>

              <div className="reveal stagger-3">
                <DailyTaskGrid
                  title="AI/ML作業 · AI/ML Work"
                  icon={<Brain className="w-4 h-4" />}
                  tasks={weekData.aiml}
                  category="aiml"
                  dailyTasks={dailyTasks}
                  onToggle={(taskId, dayIndex) => toggleDailyTask(currentWeek, taskId, dayIndex)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="reveal stagger-4">
                  <DailyTaskGrid
                    title="大学 · College"
                    icon={<GraduationCap className="w-4 h-4" />}
                    tasks={weekData.college}
                    category="college"
                    dailyTasks={dailyTasks}
                    onToggle={(taskId, dayIndex) => toggleDailyTask(currentWeek, taskId, dayIndex)}
                  />
                </div>
                <div className="reveal stagger-5">
                  <DailyTaskGrid
                    title="目標 · Goals"
                    icon={<Target className="w-4 h-4" />}
                    tasks={weekData.goals}
                    category="goals"
                    dailyTasks={dailyTasks}
                    onToggle={(taskId, dayIndex) => toggleDailyTask(currentWeek, taskId, dayIndex)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 reveal stagger-5">
              <Notes notes={weekNotes} onSave={(n) => updateWeekNotes(currentWeek, n)} />
              <WeekSummary week={weekData} dailyTasks={dailyTasks} streak={streak} onDownloadPDF={handleDownloadPDF} />
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">© 2024 MASTENHQ — No compromise Journey</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="text-foreground">頑張りましょう</span>
            <span className="text-muted-foreground">Kyoto • Tokyo • Osaka</span>
          </div>
        </footer>
      </div>

      <Chatbot
        weekData={weekData}
        onAddTask={handleAddTask}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );
};

export default Index;
