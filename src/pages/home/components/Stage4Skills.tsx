import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { skillsToolData } from '@/mocks/portfolio';

export default function Stage4Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center justify-center px-20 py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#44DCCC]/10 rounded-full pointer-events-none" />
      <div className="absolute top-6 left-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
        <span className="text-xs font-black tracking-[0.3em] text-[#44DCCC]">SKILL TREE</span>
        <div className="w-12 h-px bg-gradient-to-l from-[#44DCCC] to-transparent" />
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
      </div>
      <div className="absolute top-6 right-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400" />
        <span className="text-xs font-black tracking-[0.2em] text-gray-400">STAGE 04 / SKILLS</span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400" />
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
      </div>
      <div className="max-w-5xl w-full">
        {/* 제목 */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative px-6 py-2.5 text-sm font-black tracking-widest overflow-hidden skew-x-[-6deg] bg-[#3D3D3D] text-[#44DCCC]">
            <span className="relative z-10 inline-block skew-x-[6deg]">STAGE 4</span>
          </div>
          <h2 className="text-4xl font-black text-[#3D3D3D]">Skills</h2>
          <div className="flex items-center gap-2 flex-1">
            <div className="flex-1 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
            <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
          </div>
        </div>

        {/* 스킬 카테고리별 그리드 */}
        <div className={`space-y-8 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {skillsToolData.map((group) => (
            <div key={group.category}>
              <div className="text-xs font-black tracking-widest mb-3 flex items-center gap-2 text-gray-500">
                <i className="ri-tools-line text-[#44DCCC]" />
                <span>{group.category.toUpperCase()}</span>
                <div className="flex-1 h-px bg-[#44DCCC]/30 ml-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-3 hover:border-[#44DCCC]/50 transition-all duration-200"
                    >
                      <div className="w-9 h-9 flex items-center justify-center shrink-0 bg-[#44DCCC]/10 border border-[#44DCCC]/40">
                        {item.img
                          ? <img src={item.img} alt={item.name} className="w-5 h-5 object-contain" />
                          : <Icon icon={item.icon} width={20} height={20} color={item.color} />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-black text-[#3D3D3D]">{item.name}</span>
                        {item.desc && <p className="text-[11px] text-gray-400 mt-0.5 truncate">{item.desc}</p>}
                      </div>
                      <div className="flex items-baseline gap-0.5 shrink-0">
                        <span className="text-lg font-black text-[#3D3D3D]">{item.proficiency}</span>
                        <span className="text-xs font-bold text-gray-400">/10</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* END OF SKILLS */}
        <div className="flex items-center justify-center gap-2 opacity-30 mt-10">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-xs font-black tracking-widest text-gray-400">◆ END OF STAGE 4 ◆</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>
      </div>
    </div>
  );
}