import { useGoalNotification } from '@/hooks/useGoalNotification';
import { Trophy } from 'lucide-react';

export default function GoalNotificationCenter() {
  const { goals } = useGoalNotification();

  // Pegar o gol mais recente
  const latestGoal = goals.length > 0 ? goals[goals.length - 1] : null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {latestGoal && (
        <div className="bg-accent border-2 border-accent rounded-lg p-4 shadow-lg animate-bounce">
          <div className="flex items-center gap-3">
            <Trophy size={24} className="text-white" />
            <div>
              <div className="font-bold text-white">GOL!</div>
              <div className="text-sm text-gray-200">{latestGoal.jogador}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
