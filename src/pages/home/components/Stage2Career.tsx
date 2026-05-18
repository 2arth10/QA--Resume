import { useEffect, useRef, useState } from "react";
import { careerData } from "@/mocks/portfolio";

export default function Stage2Career() {
  const [visible, setVisible] = useState(false);
  const [pdfModal, setPdfModal] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-20 py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#44DCCC]/10 rounded-full pointer-events-none" />
      <div className="absolute top-6 left-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
        <span className="text-xs font-black tracking-[0.3em] text-[#44DCCC]">
          PLAYER HISTORY
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-[#44DCCC] to-transparent" />
        <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
      </div>
      <div className="absolute top-6 right-20 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400" />
        <span className="text-xs font-black tracking-[0.2em] text-gray-400">
          STAGE 02 / EDUCATION
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400" />
        <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
      </div>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="relative px-6 py-2.5 text-sm font-black tracking-widest overflow-hidden skew-x-[-6deg] bg-[#3D3D3D] text-[#44DCCC]">
            <span className="relative z-10 inline-block skew-x-[6deg]">
              STAGE 2
            </span>
          </div>
          <h2 className="text-4xl font-black text-[#3D3D3D]">
            학력 및 교육 이수
          </h2>
          <div className="flex items-center gap-2 flex-1">
            <div className="flex-1 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
            <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
          </div>
        </div>
        <div className="relative pl-10">
          <div
            className="absolute left-3 top-[8px] bottom-4 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, #44DCCC 0%, #3D3D3D 100%)",
            }}
          />
          <div className="space-y-6">
            {careerData.items.map((item, idx) => {
              const isMint = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative group transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${idx * 80}ms`,
                  }}
                >
                  <div
                    className={`absolute -left-9 top-[20px] w-5 h-5 flex items-center justify-center skew-x-[-6deg] ${isMint ? "bg-[#44DCCC] shadow-[0_0_10px_rgba(68,220,204,0.35)]" : "bg-[#3D3D3D] shadow-[0_0_10px_rgba(61,61,61,0.35)]"}`}
                  >
                    <i
                      className={`${item.sideIcon} text-[10px] ${isMint ? "text-[#3D3D3D]" : "text-[#44DCCC]"} skew-x-[6deg]`}
                    />
                  </div>
                  <div
                    className="bg-white overflow-hidden transition-all duration-300 border border-[#44DCCC]/30 group-hover:border-[#44DCCC]/60"
                    style={{
                      border: "1.5px solid rgb(61, 61, 61)",
                      clipPath:
                        "polygon(0px 0px, calc(100% - 12px) 0px, 100% 12px, 100% 100%, 12px 100%, 0px 100%)",
                      boxShadow: "rgba(61, 61, 61, 0.15) 4px 4px 0px",
                    }}
                  >
                    <div
                      className={`flex items-center justify-between px-6 py-[16px] relative overflow-hidden border-b ${isMint ? "border-[#3D3D3D]/30" : "border-[#44DCCC]/30"}`}
                    >
                      <div className="absolute inset-0   bg-[#3D3D3D]" />
                      <div className="flex items-center gap-3 relative z-10">
                        <div>
                          <i
                            className={`${item.icon} text-[14px] text-[#44DCCC] skew-x-[6deg]`}
                          />
                        </div>
                        <span className="text-[14px] font-black tracking-wider text-[#44DCCC]">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-black mb-1 text-[#3D3D3D]">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-[1.4rem]">
                            <div className="w-1 h-3 bg-[#44DCCC]" />
                            <p
                              className={`text-sm font-semibold text-[#666] ${item.pdfUrl ? 'cursor-pointer hover:text-[#44DCCC] underline underline-offset-2 transition-colors' : ''}`}
                              onClick={() => item.pdfUrl && setPdfModal(item.pdfUrl)}
                            >
                              {item.subtitle}
                            </p>
                          </div>
                          <p className="text-sm leading-relaxed text-[#777] whitespace-pre-line">
                            {item.description}
                          </p>
                          {/* <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="relative skew-x-[-12deg] px-3 py-1 text-xs font-black bg-[#FFFFD9] text-[#3D3D3D] border-t border-b border-[#3D3D3D]/60 border-l-0 border-r-0 transition-all duration-150 hover:-translate-y-0.5"
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
                                <span className="inline-block skew-x-[12deg]">
                                  {tag}
                                </span>
                              </span>
                            ))}
                          </div> */}
                        </div>
                        {/* <div className="shrink-0 self-center flex flex-col items-center gap-1.5 px-4 py-3 relative overflow-hidden border-t border-b border-gray-400/60 bg-gray-50">
                          <div
                            className="absolute bottom-0 left-0 w-[2px] h-2"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(61,61,61,0.6) 0%, rgba(61,61,61,0.25) 60%, transparent 100%)",
                            }}
                          />
                          <span className="text-[10px] font-black opacity-40 tracking-wider text-gray-400">
                            CLEAR
                          </span>
                          <div className="w-8 h-8 flex items-center justify-center skew-x-[-6deg] bg-[#44DCCC]">
                            <i className="ri-check-double-line text-xl text-[#3D3D3D] skew-x-[6deg]" />
                          </div>
                          <span className="text-xs font-black tracking-wider text-[#44DCCC]">
                            DONE
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

      {pdfModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setPdfModal(null)}>
          <div className="relative w-[900px] max-w-[96vw] h-[90vh] bg-white shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <span className="text-sm font-black text-[#3D3D3D]">자격증 확인</span>
              <button onClick={() => setPdfModal(null)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                <i className="ri-close-line text-lg" />
              </button>
            </div>
            <iframe src={pdfModal} className="flex-1 w-full" />
          </div>
        </div>
      )}
    </>
  );
}
