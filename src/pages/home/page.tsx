import { useCallback, useEffect, useState } from 'react';
import StageMapNav from './components/StageMapNav';
import Stage1Profile from './components/Stage1Profile';
import Stage2Career from './components/Stage2Career';
import Stage3Skills from './components/Stage3Skills';
import Stage4Skills from './components/Stage4Skills';

export default function Home() {
  const [activeStage, setActiveStage] = useState(1);

  const scrollToStage = useCallback((stageId: number) => {
    const el = document.getElementById(`stage-${stageId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stages = [1, 2, 3, 4];
      let current = 1;
      for (const id of stages) {
        const el = document.getElementById(`stage-${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = id;
          }
        }
      }
      setActiveStage(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#F9F9F9]">
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-[#44DCCC]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(45deg, transparent 49%, #e0e0e0 49%, #e0e0e0 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #e0e0e0 49%, #e0e0e0 51%, transparent 51%)', backgroundSize: '40px 40px' }} />
      <div className="fixed top-8 right-8 pointer-events-none z-0 opacity-10">
        <div className="w-32 h-32 border-t-2 border-r-2 border-[#44DCCC]" />
      </div>
      <div className="fixed bottom-8 left-20 pointer-events-none z-0 opacity-10">
        <div className="w-24 h-24 border-b-2 border-l-2 border-[#44DCCC]" />
      </div>

      <StageMapNav activeStage={activeStage} onStageClick={scrollToStage} />

      <div className="relative z-10">
        <div id="stage-1" className="min-h-screen">
          <Stage1Profile />
        </div>
        <div id="stage-2" className="min-h-screen">
          <Stage2Career />
        </div>
        <div id="stage-3" className="min-h-screen">
          <Stage3Skills />
        </div>
        <div id="stage-4" className="min-h-screen">
          <Stage4Skills />
        </div>
      </div>
    </div>
  );
}
