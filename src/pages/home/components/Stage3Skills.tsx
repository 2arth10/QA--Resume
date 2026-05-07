import { useState, useEffect, useRef } from 'react';
import { skillData } from '@/mocks/portfolio';

type ReportContent = {
  text?: string;
  images?: string[];
  videoUrl?: string;
};

type Report = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  date: string;
  status: string;
  characterImg?: string;
  pdfUrl?: string;
  content?: ReportContent;
};

/* ─── Modal ─── */
function ReportModal({
  report,
  onClose,
}: {
  report: Report | null;
  onClose: () => void;
}) {
  const [content, setContent] = useState<ReportContent | null>(null);

  useEffect(() => {
    if (!report) { setContent(null); return; }
    fetch(`/reports/${report.id}.json`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => setContent(data))
      .catch(() => setContent(null));
  }, [report]);

  if (!report) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[1100px] max-w-[96vw] max-h-[92vh] bg-white shadow-2xl overflow-hidden flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="shrink-0 px-8 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black tracking-[0.2em] px-3 py-1 bg-[#44DCCC]/10 text-[#44DCCC]">
                {report.type}
              </span>
              <span className="text-xs text-gray-400 font-bold">{report.date}</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-black text-[#3D3D3D] mb-1">
              {report.title}
            </h2>
            <p className="text-sm text-gray-500">{report.subtitle}</p>
          </div>
        </div>

        {/* 스크롤 콘텐츠 영역 */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          {/* 구분선 */}
          <div className="h-px w-full bg-gray-200 mb-8" />

          {/* 콘텐츠 영역 */}
          {content ? (
            <div className="space-y-8">
              {/* 텍스트 */}
              {content.text && (
                <div>
                  <h3 className="text-sm font-black text-[#3D3D3D] mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#44DCCC]" />
                    리포트 내용
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{content.text}</p>
                </div>
              )}

              {/* 이미지 */}
              {content.images && content.images.length > 0 && (
                <div>
                  <h3 className="text-sm font-black text-[#3D3D3D] mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#44DCCC]" />
                    스크린샷
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {content.images!.map((src, i) => (
                      <img key={i} src={src} alt={`screenshot-${i}`} className="w-full rounded border border-gray-200 object-cover" />
                    ))}
                  </div>
                </div>
              )}

              {/* 영상 */}
              {content.videoUrl && (
                <div>
                  <h3 className="text-sm font-black text-[#3D3D3D] mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#44DCCC]" />
                    영상
                  </h3>
                  <div className="w-full aspect-video">
                    <iframe
                      src={content.videoUrl}
                      className="w-full h-full rounded border border-gray-200"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-black text-[#3D3D3D] mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#44DCCC]" />
                리포트 내용
              </h3>
              <div className="w-full min-h-[500px] bg-gray-50 border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center gap-3">
                <i className="ri-article-line text-5xl text-gray-300" />
                <p className="text-base text-gray-400 font-medium">글을 작성할 수 있는 영역입니다</p>
                <p className="text-xs text-gray-300">이곳에 테스트 내용, 버그 설명, 재현 방법 등을 작성하세요</p>
              </div>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="shrink-0 px-8 py-5 border-t border-gray-200 flex items-center justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#44DCCC] text-sm font-bold text-[#1a1a1a] hover:bg-[#3bc9bb] transition-colors"
          >
            JIRA PDF 확인
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Report Card ─── */
function ReportCard({
  report,
  onClick,
}: {
  report: Report;
  onClick: () => void;
}) {
  return (
    <div
      className="group bg-white border border-gray-200 hover:border-[#44DCCC]/50 transition-all duration-200 cursor-pointer relative"
      onClick={onClick}
    >
      {/* Hover 그라데이션 + 네온 오버레이 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to top, rgba(68,220,204,0.10) 0%, rgba(68,220,204,0.04) 50%, transparent 100%)',
          boxShadow: 'inset 0 -3px 24px rgba(68,220,204,0.18)',
        }}
      />

      {/* 오른쪽 하단 회색 마감 */}
      <div
        className="absolute bottom-0 right-0 w-14 h-14 bg-gray-100 z-0 pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div className="flex items-stretch relative min-h-[90px]">
        {/* 콘텐츠 영역 */}
        <div className="flex-1 pl-6 pr-5 py-3 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black tracking-widest px-2 py-0.5 border border-[#44DCCC]/40 text-[#44DCCC]">
              {report.type}
            </span>
            <span className="text-[10px] text-gray-400 font-bold">{report.date}</span>
          </div>
          <h3 className="text-sm font-black text-[#3D3D3D] truncate">{report.title}</h3>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{report.subtitle}</p>
        </div>

        {/* 오른쪽 바로가기 영역 */}
        <div className="shrink-0 flex items-stretch overflow-visible relative z-10">
          {/* 캐릭터 이미지 - polygon clip-path 밖으로 이동해 위쪽이 잘리지 않게 */}
          {report.characterImg && (
            <div
              className="absolute opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none z-10"
              style={report.id === 'FF14-001'
                ? { bottom: '-40px', right: '-25px', width: '232px', height: '232px', clipPath: 'inset(-300px 0 40px 0)' }
                : report.id === 'CZ-001'
                ? { bottom: '0px', right: '-16px', width: '170px', height: '150px' }
                : report.id === 'AION2-001'
                ? { bottom: '-80px', right: '-166px', width: '500px', height: '230px', clipPath: 'inset(-500px 0 80px 0)' }
                : report.id === 'YY-001'
                ? { bottom: '0px', right: '-56px', width: '260px', height: '260px' }
                : { bottom: '0px', right: '-16px', width: '190px', height: '190px' }
              }
            >
              <img
                src={report.characterImg}
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          )}

          <div
            className="relative flex items-center h-full transition-all duration-500 ease-out overflow-visible min-w-[180px] group-hover:min-w-[300px]"
            style={{
              clipPath: 'polygon(52px 0, 100% 0, 100% 100%, 0 100%)',
              marginLeft: '-8px',
              backgroundColor: '#3D3D3D',
              backgroundImage: `
                linear-gradient(155deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.18) 28%, transparent 28%),
                linear-gradient(142deg, transparent 55%, rgba(255,255,255,0.07) 55%, rgba(255,255,255,0.07) 100%),
                linear-gradient(321deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.10) 20%, transparent 20%),
                linear-gradient(47deg, transparent 60%, rgba(242, 255, 254, 0.12) 60%, rgba(255, 255, 255, 0.12) 80%, transparent 80%),
                linear-gradient(-97deg, transparent 35%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.18) 65%, transparent 65%),
                linear-gradient(123deg, transparent 35%, rgba(255, 255, 255, 0.18) 35%, rgba(0,0,0,0.18) 65%, transparent 65%)
              `,
            }}
          >
            {/* 민트 + 크리스탈 텍스처 hover 오버레이 */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundColor: '#44DCCC',
                backgroundImage: `
                  linear-gradient(155deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.18) 28%, transparent 28%),
                  linear-gradient(142deg, transparent 55%, rgba(255,255,255,0.07) 55%, rgba(255,255,255,0.07) 100%),
                  linear-gradient(321deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.10) 20%, transparent 20%),
                  linear-gradient(47deg, transparent 60%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.12) 80%, transparent 80%),
                  linear-gradient(-97deg, transparent 35%, rgba(253, 250, 250, 0.1) 35%, rgba(172, 172, 172, 0.1) 65%, transparent 65%),
                  linear-gradient(123deg, transparent 35%, rgba(255,255,255,0.18) 35%, rgba(0,0,0,0.10) 65%, transparent 65%)
                `,
              }}
            />

            {/* 바로가기 텍스트 */}
            <span
              className="relative z-20 pl-[60px] pr-5 inline-flex items-center gap-1 text-[1.0rem] font-black text-white group-hover:text-[#3D3D3D] whitespace-nowrap transition-all duration-500 ease-out group-hover:-translate-x-2"
            >
              바로가기 <i className="ri-arrow-right-s-line" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Stage3Skills ─── */
export default function Stage3Skills() {
  const [activeTab, setActiveTab] = useState<'issue' | 'abd'>('issue');
  const [visible, setVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ESC로 모달 닫기 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedReport(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const currentReports = activeTab === 'issue' ? skillData.issueReports : skillData.abdReports;

  return (
    <>
      <div ref={sectionRef} className="flex items-center justify-center px-20 py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#44DCCC]/10 rounded-full pointer-events-none" />
        <div className="absolute top-6 left-20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
          <div className="w-12 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
          <span className="text-xs font-black tracking-[0.3em] text-[#44DCCC]">REPORT</span>
          <div className="w-12 h-px bg-gradient-to-l from-[#44DCCC] to-transparent" />
          <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
        </div>
        <div className="absolute top-6 right-20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400" />
          <span className="text-xs font-black tracking-[0.2em] text-gray-400">STAGE 03 / REPORT</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400" />
          <div className="w-1.5 h-1.5 bg-gray-400 rotate-45" />
        </div>
        <div className="max-w-5xl w-full">
          {/* 제목 */}
          <div className="flex items-center gap-4 mb-10">
            <div className="relative px-6 py-2.5 text-sm font-black tracking-widest overflow-hidden skew-x-[-6deg] bg-[#3D3D3D] text-[#44DCCC]">
              <span className="relative z-10 inline-block skew-x-[6deg]">STAGE 3</span>
            </div>
            <h2 className="text-4xl font-black text-[#3D3D3D]">{skillData.reportTitle}</h2>
            <div className="flex items-center gap-2 flex-1">
              <div className="flex-1 h-px bg-gradient-to-r from-[#44DCCC] to-transparent" />
              <div className="w-1.5 h-1.5 bg-[#44DCCC] rotate-45" />
            </div>
          </div>

          {/* 탭 메뉴 */}
          <div className="flex items-center">
            {skillData.tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                {index > 0 && <div className="w-px h-4 bg-gray-300" />}
                <button
                  onClick={() => setActiveTab(tab.id as 'issue' | 'abd')}
                  className={`relative px-6 py-2.5 text-xs font-black tracking-widest transition-all duration-200 skew-x-[-6deg] ${
                    activeTab === tab.id
                      ? 'bg-[#3D3D3D] text-[#44DCCC]'
                      : 'text-gray-400 hover:text-[#3D3D3D] bg-transparent'
                  }`}
                >
                  <span className="inline-block skew-x-[6deg]">{tab.label}</span>
                </button>
              </div>
            ))}
          </div>

          {/* 탭~바로가기 연결선 */}
          <div className="w-full h-px bg-[#3D3D3D] mb-3 -mt-px -ml-px" />

          {/* 리포트 리스트 */}
          <div className={`space-y-3 mt-12 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {currentReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onClick={() => setSelectedReport(report)}
              />
            ))}
          </div>

          {/* 빈 상태 */}
          {currentReports.length === 0 && (
            <div className="py-16 text-center border border-dashed border-[#44DCCC]/20">
              <p className="text-sm text-gray-400 font-bold">등록된 리포트가 없습니다.</p>
            </div>
          )}
        </div>
      </div>

      {/* 모달 */}
      <ReportModal
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </>
  );
}