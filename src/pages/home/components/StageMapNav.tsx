import { stageMap } from '@/mocks/portfolio';

interface StageMapNavProps {
  activeStage: number;
  onStageClick: (id: number) => void;
}

export default function StageMapNav({ activeStage, onStageClick }: StageMapNavProps) {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-1">
      <div className="relative flex flex-col gap-2 p-2">
        <div className="px-2 py-1 mb-1 text-center">
          <span className="text-xs font-black tracking-widest text-[#44DCCC]">STAGE MAP</span>
        </div>
        <div className="absolute left-[26px] top-[52px] bottom-[20px] w-px bg-[#44DCCC]/30 z-0" />
        {stageMap.map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => onStageClick(stage.id)}
              className="group relative flex items-center gap-2.5 cursor-pointer z-10 pr-2"
            >
              <div
                className={`relative w-9 h-9 flex items-center justify-center transition-all duration-300 shrink-0 skew-x-[-15deg] border ${
                  isActive
                    ? 'bg-[#44DCCC] border-[#44DCCC] text-white'
                    : 'bg-white border-gray-300 text-[#44DCCC] hover:border-[#44DCCC] hover:bg-[#44DCCC]/10'
                }`}
              >
                <i className={`${stage.icon} text-xs skew-x-[15deg]`} />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span
                  className={`font-black tracking-widest text-[10px] transition-colors duration-200 ${
                    isActive ? 'text-[#44DCCC]' : 'text-gray-400 group-hover:text-[#44DCCC]'
                  }`}
                >
                  {stage.label}
                </span>
                <span
                  className={`font-bold text-[10px] transition-colors duration-200 mt-0.5 ${
                    isActive ? 'text-[#3D3D3D]' : 'text-gray-400 group-hover:text-gray-700'
                  }`}
                >
                  {stage.title}
                </span>
              </div>
            </button>
          );
        })}
        <div className="mt-1 mx-2 h-px bg-[#44DCCC]/20" />
        <div className="text-center px-2 pb-1">
          <span className="font-black text-[9px] text-[#44DCCC]/60 tracking-widest">◆ QA PORTFOLIO ◆</span>
        </div>
      </div>
    </div>
  );
}