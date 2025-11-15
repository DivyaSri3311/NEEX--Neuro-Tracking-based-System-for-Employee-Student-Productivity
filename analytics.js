import { useEffect, useState } from 'react';
import { Eye, Keyboard, Activity, Clock, TrendingDown, Minus } from 'lucide-react';

interface SignalBreakdownProps {
  cameraOn: boolean;
  typingTrackingOn: boolean;
  fatigueLevel: number;
}

export function SignalBreakdown({ cameraOn, typingTrackingOn, fatigueLevel }: SignalBreakdownProps) {
  const [blinkRate, setBlinkRate] = useState(12);
  const [typingSpeed, setTypingSpeed] = useState(41);
  const [yawnDetected, setYawnDetected] = useState(false);
  const [idleTime, setIdleTime] = useState(21);

  // Simulate metric changes
  useEffect(() => {
    const interval = setInterval(() => {
      if (cameraOn) {
        setBlinkRate(Math.max(5, Math.min(20, blinkRate + (Math.random() * 4 - 2))));
      }
      if (typingTrackingOn) {
        setTypingSpeed(Math.max(20, Math.min(80, typingSpeed + (Math.random() * 6 - 3))));
      }
      setIdleTime(Math.max(0, Math.min(50, idleTime + (Math.random() * 8 - 4))));
      setYawnDetected(Math.random() > 0.9 && fatigueLevel > 50);
    }, 2000);

    return () => clearInterval(interval);
  }, [cameraOn, typingTrackingOn, fatigueLevel, blinkRate, typingSpeed, idleTime]);

  const getBlinkStatus = (rate: number) => {
    if (rate >= 12) return { text: 'normal', color: 'text-green-600' };
    if (rate >= 8) return { text: 'slightly low', color: 'text-yellow-600' };
    return { text: 'low', color: 'text-red-600' };
  };

  const blinkStatus = getBlinkStatus(blinkRate);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="mb-6 flex items-center gap-2">
        🔎 Signal Breakdown
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blink Rate */}
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="text-slate-500 text-sm">Blink Rate:</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">{Math.round(blinkRate)}/min</span>
              <span className={`text-sm ${blinkStatus.color}`}>({blinkStatus.text})</span>
            </div>
          </div>
          {!cameraOn && (
            <div className="text-slate-400 text-xs">Camera off</div>
          )}
        </div>

        {/* Typing Speed */}
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Keyboard className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="text-slate-500 text-sm">Typing Speed:</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">{Math.round(typingSpeed)} wpm</span>
              <span className="text-sm text-red-600 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                decreased
              </span>
            </div>
          </div>
          {!typingTrackingOn && (
            <div className="text-slate-400 text-xs">Tracking off</div>
          )}
        </div>

        {/* Yawn Detector */}
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <div className="text-slate-500 text-sm">Yawn Detector:</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">{cameraOn ? 'Active' : 'Inactive'}</span>
              <span className="text-sm text-slate-600">
                ({yawnDetected && cameraOn ? 'yawn detected' : 'none detected'})
              </span>
            </div>
          </div>
        </div>

        {/* Idle Time */}
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-teal-600" />
          </div>
          <div className="flex-1">
            <div className="text-slate-500 text-sm">Idle Time:</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl">+{Math.round(idleTime)}%</span>
              <span className="text-sm text-yellow-600">(rising)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
