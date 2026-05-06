import { useEffect, useRef, useState } from "react";
import { profileData } from "@/mocks/portfolio";

export default function Stage1Profile() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-20 py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#44DCCC]/10 rounded-full pointer-events-none" />
      <div className="absolute top-6 left-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
        <span className="text-xs font-black tracking-[0.3em] text-[#44DCCC]">
          PLAYER DATA
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-[#44DCCC] to-transparent" />
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
      </div>
      <div className="absolute top-6 right-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400" />
        <span className="text-xs font-black tracking-[0.2em] text-gray-400">
          STAGE 01 / CHARACTER SELECT
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400" />
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
      </div>
      <div className="absolute bottom-6 left-20 text-xs font-black opacity-20 tracking-widest text-gray-400">
        ◆ QA PORTFOLIO v1.0 ◆
      </div>
      <div className="absolute bottom-6 right-20 text-xs font-black opacity-20 tracking-widest text-gray-400">
        BUILD 2025.01
      </div>

      <div className="max-w-5xl w-full grid grid-cols-12 gap-8 items-end">
        <div className="col-span-1" />
        <div className="col-span-4 flex flex-col items-center gap-5">
          <div className="relative w-full skew-x-[-6deg] -ml-[7px]">
            {/* 왼쪽 테두리 - 위에서 아래로 연해짐 */}
            <div
              className="absolute -left-1 top-0 bottom-0 w-[3px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #44DCCC 0%, rgba(68,220,204,0.35) 70%, transparent 100%)",
              }}
            />
            {/* 오른쪽 테두리 - 아래에서 위로 연해짐 */}
            <div
              className="absolute -right-1.5 top-0 bottom-0 w-[3px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #44DCCC 0%, rgba(68,220,204,0.35) 70%, transparent 100%)",
              }}
            />
            {/* 위쪽 테두리 - 왼쪽에서 오른쪽으로 연해짐 */}
            <div
              className="absolute -top-1.5 left-0 right-0 h-[3px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #44DCCC 0%, rgba(68,220,204,0.35) 70%, transparent 100%)",
              }}
            />
            {/* 아래쪽 테두리 - 오른쪽에서 왼쪽으로 연해짐 */}
            <div
              className="absolute -bottom-1.5 left-0 right-0 h-[3px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, #44DCCC 0%, rgba(68,220,204,0.35) 70%, transparent 100%)",
              }}
            />
            <div className="skew-x-[6deg] w-full">
              <img
                alt="Profile"
                className="w-full aspect-[4/5] object-cover object-top"
                src="https://static.readdy.ai/image/8ef64794484e9fdfb870cd8cc0bdbc83/f9ecd0cb7a833b51e07eddb621eca5d0.png"
              />
            </div>
          </div>
          <div className="w-[calc(100%+4rem)] -ml-8 skew-x-[-8deg] border-y-[1.5px] border-[#3d3d3d]/50 bg-white/80 relative z-10">
            <div className="px-4 py-3 skew-x-[6deg]">
              <p className="text-[13px] text-[#3D3D3D] text-center leading-snug tracking-wide">
                &ldquo;기획된 기능과 인터페이스가 유저에게 <br />
                의도대로 전달되는지, 불편함 없이 즐길 수 있는지
                <br />
                끝까지 검증하겠습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-7 space-y-4 ml-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-black tracking-wider text-[#3D3D3D] bg-[#FFFFD9] px-2 py-0.5 border border-[#3D3D3D]/20">
                SSR
              </span>
              <div className="flex items-center gap-1">
                <i
                  className="ri-star-fill text-base text-[#3D3D3D]"
                  style={{
                    textShadow:
                      "0 0 6px rgba(255,215,0,0.6), 0 0 12px rgba(255,215,0,0.3), 0 0 2px rgba(255,240,180,0.8)",
                  }}
                />
                <i
                  className="ri-star-fill text-base text-[#3D3D3D]"
                  style={{
                    textShadow:
                      "0 0 6px rgba(255,215,0,0.6), 0 0 12px rgba(255,215,0,0.3), 0 0 2px rgba(255,240,180,0.8)",
                  }}
                />
                <i
                  className="ri-star-fill text-base text-[#3D3D3D]"
                  style={{
                    textShadow:
                      "0 0 6px rgba(255,215,0,0.6), 0 0 12px rgba(255,215,0,0.3), 0 0 2px rgba(255,240,180,0.8)",
                  }}
                />
                <i
                  className="ri-star-fill text-base text-[#3D3D3D]"
                  style={{
                    textShadow:
                      "0 0 6px rgba(255,215,0,0.6), 0 0 12px rgba(255,215,0,0.3), 0 0 2px rgba(255,240,180,0.8)",
                  }}
                />
                <i
                  className="ri-star-fill text-base text-[#3D3D3D]"
                  style={{
                    textShadow:
                      "0 0 6px rgba(255,215,0,0.6), 0 0 12px rgba(255,215,0,0.3), 0 0 2px rgba(255,240,180,0.8)",
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl font-black leading-tight text-[#3D3D3D]">
              {profileData.name}
            </h1>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-black text-[#3D3D3D]">
                {profileData.level}{" "}
                <span className="text-sm font-bold text-gray-500">/100</span>
              </span>
              <div className="flex items-center gap-2 text-xl font-black tracking-wider text-[#3D3D3D]">
                <span>신입 QA</span>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{
              border: "1.5px solid rgb(61, 61, 61)",
              clipPath:
                "polygon(0px 0px, calc(100% - 12px) 0px, 100% 12px, 100% 100%, 12px 100%, 0px 100%)",
              boxShadow: "rgba(61, 61, 61, 0.15) 4px 4px 0px",
            }}
          >
            <div className="px-4 py-[13px] text-xs font-black tracking-widest flex items-center gap-2 bg-[#3D3D3D] text-[#44DCCC]">
              <i className="ri-database-2-line" />
              CHARACTER INFO
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            {profileData.info.map((item) => (
              <div
                key={item.label}
                className="flex items-center group transition-colors duration-150 border-b border-gray-200 last:border-0"
              >
                <div className="w-[120px] px-4 py-2.5 flex items-center gap-2 shrink-0 bg-white self-stretch">
                  <i className={`${item.icon} text-[13px] text-[#44DCCC]`} />
                  <span className="text-[13px] text-[#3D3D3D] font-bold">
                    {item.label}
                  </span>
                </div>
                <div className="px-4 py-2.5 text-[13px] font-medium text-[#5A5A5A] flex-1">
                  {item.links ? (
                    <div className="flex flex-col gap-1">
                      {item.links.map((l, i) => (
                        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="text-[#44DCCC] hover:underline font-black">
                          {l.text}
                        </a>
                      ))}
                    </div>
                  ) : item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#44DCCC] hover:underline font-black">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            ))}
          </div>
          <div
            className="bg-white overflow-hidden border border-[#3D3D3D]/40"
            style={{
              border: "1.5px solid rgb(61, 61, 61)",
              clipPath:
                "polygon(0px 0px, calc(100% - 12px) 0px, 100% 12px, 100% 100%, 12px 100%, 0px 100%)",
              boxShadow: "rgba(61, 61, 61, 0.15) 4px 4px 0px",
            }}
          >
            <div className="px-4 py-[13px] text-xs font-bold tracking-widest flex items-center gap-2 bg-[#3D3D3D] text-[#44DCCC]">
              <i className="ri-trophy-line" />
              SKILL
            </div>
            <div className="p-4 flex flex-wrap gap-2">
              {profileData.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative skew-x-[-12deg] px-4 py-1.5 text-xs font-semibold transition-all duration-200 whitespace-nowrap border-t border-b border-[#3D3D3D]/60 border-l-0 border-r-0 bg-[#FFFFD9] text-[#3D3D3D] "
                >
                  <div
                    className="absolute bottom-0 left-0 w-[2px] h-2"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(61,61,61,0.6) 0%, rgba(61,61,61,0.25) 60%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 w-[2px] h-2"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(61,61,61,0.6) 0%, rgba(61,61,61,0.25) 60%, transparent 100%)",
                    }}
                  />
                  <span className="inline-flex items-center gap-1 skew-x-[12deg]">
                    <i className={`${skill.icon}`} />
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
