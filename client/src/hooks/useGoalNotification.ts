import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

export interface Goal {
  id: string;
  time: string;
  jogador: string;
  minuto: string;
  adversario: string;
  timestamp: number;
}

export function useGoalNotification() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [lastGoalId, setLastGoalId] = useState<string | null>(null);

  const checkForGoals = useCallback(() => {
    const simulatedGoals: Goal[] = [
      {
        id: 'goal-1',
        time: 'Corinthians',
        jogador: 'Yuri Alberto',
        minuto: '23',
        adversario: 'Palmeiras',
        timestamp: Date.now() - 300000,
      },
      {
        id: 'goal-2',
        time: 'Corinthians',
        jogador: 'Romero',
        minuto: '67',
        adversario: 'Palmeiras',
        timestamp: Date.now() - 60000,
      },
    ];

    simulatedGoals.forEach((goal) => {
      if (lastGoalId !== goal.id && goal.timestamp > Date.now() - 120000) {
        notifyGoal(goal);
        setLastGoalId(goal.id);
      }
    });

    setGoals(simulatedGoals);
  }, [lastGoalId]);

  const notifyGoal = (goal: Goal) => {
    playGoalSound();

    const message = goal.jogador + ' marcou aos ' + goal.minuto + ' contra ' + goal.adversario;
    
    toast.success(message, {
      duration: 5000,
      position: 'top-center',
    });

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('GOL DO CORINTHIANS!', {
        body: message,
        tag: 'goal-notification',
        requireInteraction: false,
      });
    }
  };

  const playGoalSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
      console.log('Som de gol nao disponivel');
    }
  };

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    checkForGoals();
    const interval = setInterval(checkForGoals, 5000);
    return () => clearInterval(interval);
  }, [checkForGoals]);

  return { goals, notifyGoal };
}
