export const profileData = {
  name: '김이현',
  role: 'QA TESTER',
  level: 'LV.1',
  subtitle: 'SSR',
  maxExp: 100,
  avatar: 'https://static.readdy.ai/image/c83d664a1a9beaca68a096e65d249afe/7a00326f9d175dd46fab695be5787726.png',
  stats: [
    { label: 'EXP', value: 72, max: 100 },
    { label: 'STR', value: 88, max: 100 },
    { label: 'INT', value: 90, max: 100 },
  ],
  info: [
    { icon: 'ri-time-line', label: '이메일', value: 'asd576@naver.com' },
    { icon: 'ri-briefcase-line', label: '연락처', value: '010-xxxx-6336' },
    { icon: 'ri-phone-line', label: '주소', value: '인천광역시 남동구 은봉로288' },
    { icon: 'ri-github-line', label: '깃허브', value: 'GitHub 바로가기', link: 'https://github.com/2arth10' },
    { icon: 'ri-links-line', label: '포트폴리오', value: '', links: [
      { text: '1) 테스트 케이스(TC) 바로가기', url: 'https://docs.google.com/spreadsheets/d/1r0bEw7DM7eQXFc0e32mrIlJHRU-OW1F65nYbX1FsMwM/edit?usp=sharing' },
      { text: '2) 카오스 제로 나이트메어 게임 분석서 바로가기', url: 'https://example.com/game-analysis.pdf' },
    ] },
  ],
  skills: [
    { icon: 'ri-bug-line', name: '버그리포트' },
    { icon: 'ri-file-list-3-line', name: 'TC작성' },
    { icon: 'ri-chat-3-line', name: '커뮤니케이션' },
    { icon: 'ri-award-line', name: 'ISTQB' },
    { icon: 'ri-trello-line', name: 'JIRA' },
    { icon: 'ri-terminal-box-line', name: 'ADB' },
  ],
};

export const careerData = {
  items: [
    {
      title: '게임QA 교육 이수',
      subtitle: '',
      period: '2025.11 ~ 2025.12',
      description: '게임 QA 전문 교육 과정을 이수했습니다.',
      tags: ['# 게임QA', '# 교육이수'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '컴투스 QA 캠퍼스 8기',
      subtitle: 'QA실무 중심의 교육과정으로 납품 프로세스 이해',
      period: '2025.07 ~ 2025.08',
      description: '컴투스에서 진행한 QA 캠퍼스 8기 교육 과정을 수료했습니다. QA 실무 중심 커리큘럼을 통해 게임 납품 프로세스와 품질 관리 체계를 이해했습니다.',
      tags: ['# 컴투스', '# QA캠퍼스', '# 납품프로세스'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '스마트웹&콘텐츠개발BL웹표준기반 스마트UIUX디자인&웹퍼블리셔_A',
      subtitle: '기획, 디자인, 개발, QA 등 웹표준기반 전 과정을 수행',
      period: '2024.03 ~ 2024.08',
      description: '웹 표준을 기반으로 한 스마트 UI/UX 디자인 및 웹 퍼블리셔 과정을 수료했습니다. 기획부터 디자인, 개발, QA까지 웹 전 과정을 직접 수행하며 API 연동, 반응형 웹, Python 등의 기술을 실습했습니다.',
      tags: ['# 웹퍼블리셔', '# UIUX', '# API연동', '# 반응형웹', '# Python'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '청강문화산업대학교',
      subtitle: '패션디자인 전공심화 (학사)',
      period: '2022.03 ~ 2023.02',
      description: '청강문화산업대학교에서 패션디자인 전공심화 학사 과정을 수료했습니다.',
      tags: ['# 청강대', '# 패션디자인', '# 학사'],
      type: 'education',
      icon: 'ri-graduation-cap-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '청강문화산업대학교',
      subtitle: '패션디자인 (3년제)',
      period: '2019.03 ~ 2022.02',
      description: '청강문화산업대학교 패션디자인 3년제 과정을 졸업했습니다.',
      tags: ['# 청강대', '# 패션디자인', '# 3년제', '# 졸업'],
      type: 'education',
      icon: 'ri-graduation-cap-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '안산디자인문화고등학교',
      subtitle: '',
      period: '2016 ~ 2019',
      description: '안산디자인문화고등학교를 졸업했습니다.',
      tags: ['# 디자인고', '# 졸업'],
      type: 'education',
      icon: 'ri-school-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
  ],
  summary: [
    { icon: 'ri-time-line', label: '총 교육기간', value: '약 5년+' },
    { icon: 'ri-graduation-cap-line', label: '최종학력', value: '학사' },
  ],
};

export const skillData = {
  reportTitle: '리포트',
  tabs: [
    { id: 'issue', label: '버그 리포트' },
    { id: 'abd', label: 'ADB 리포트' },
  ],
  issueReports: [
    {
      id: 'FF14-001',
      title: '파이널판타지14',
      subtitle: '기능 테스트 및 UI/UX 검수 리포트',
      type: 'FINAL FANTASY XIV',
      date: '2025.01',
      status: '완료',
      characterImg: '/파판14.png',
      pdfUrl: 'https://storage.readdy-site.link/project_files/a6ca4dd3-6c1e-4f87-a06c-f19010fe655b/60a944ea-1153-480a-bc7e-4ffd0d872386_KAN-11-14----91100----------.pdf?v=9176c165c384cdc914971fb97aeaa9e0',
    },
    {
      id: 'DS-001',
      title: '드래곤 소드',
      subtitle: '게임 밸런스 및 버그 리포팅',
      type: 'RPG',
      date: '2024.12',
      status: '완료',
      characterImg: 'https://storage.readdy-site.link/project_files/a6ca4dd3-6c1e-4f87-a06c-f19010fe655b/416b393a-d0fd-4f8f-b9a7-6ed470475eb5_-.png?v=bd2f12ffbc7e14a5177dd723d077ef89',
    },
    {
      id: 'CZ-001',
      title: '카오스 제로 나이트 메어',
      subtitle: '전투 시스템 및 UI 검수 리포트',
      type: 'RPG',
      date: '2024.11',
      status: '완료',
      characterImg: '/카오스제로나이트메어.png',
    },
    {
      id: 'YY-001',
      title: '연운',
      subtitle: '기능 테스트 및 개선 제안 리포트',
      type: 'RPG',
      date: '2024.10',
      status: '완료',
      characterImg: '/연운.png',
    },
    {
      id: 'MB-001',
      title: '마비노기 모바일',
      subtitle: '모바일 최적화 및 UI/UX 검수 리포트',
      type: '모바일 RPG',
      date: '2024.09',
      status: '완료',
      characterImg: 'https://storage.readdy-site.link/project_files/a6ca4dd3-6c1e-4f87-a06c-f19010fe655b/73a82214-2550-4dfa-b2b2-6c7bd4a8361b_-.png?v=6a8255dd3ec474fec935bd9d21f8159e',
    },
  ],
  abdReports: [
    {
      id: 'AION2-001',
      title: 'AION2 자동화 보고서',
      subtitle: '자동화 테스트 스크립트 및 결과 보고서',
      type: '자동화',
      date: '2025.03',
      status: '완료',
      characterImg: '/아이온2.png',
    },
  ],
};

export const historyData = {
  projects: [
    {
      id: 'PRJ-04',
      name: '프로젝트 D',
      role: 'QA Tester',
      period: '2025.03 - 2025.05',
      description: '신규 모바일 RPG 게임의 출시 전 QA 전반을 담당했습니다. 스테이징 환경에서 기능 테스트, 밸런스 검토, UI/UX 검수를 진행했습니다.',
      achievements: [
        { icon: 'ri-bug-line', value: '80+', label: '버그 발견' },
        { icon: 'ri-file-list-3-line', value: '40건', label: 'TC 작성' },
        { icon: 'ri-alert-line', value: '6건', label: '크리티컬 버그' },
      ],
      tasks: ['기능 테스트', 'UI/UX 검수', '버그 리포팅', '밸런스 검토'],
      platforms: [
        { icon: 'ri-smartphone-line', label: 'Android / iOS' },
        { icon: 'ri-gamepad-line', label: '모바일 RPG' },
      ],
    },
    {
      id: 'PRJ-03',
      name: '프로젝트 C',
      role: 'Junior QA',
      period: '2024.11 - 2025.02',
      description: '캐주얼 모바일 게임의 업데이트 QA를 담당했습니다. 이벤트 기능 검증, 상점 시스템 테스트, 광고 연동 검수 등을 수행했습니다.',
      achievements: [
        { icon: 'ri-bug-line', value: '60+', label: '버그 발견' },
        { icon: 'ri-file-list-3-line', value: '35건', label: 'TC 작성' },
        { icon: 'ri-alert-line', value: '4건', label: '크리티컬 버그' },
      ],
      tasks: ['이벤트 검증', '상점 테스트', '광고 검수', '회귀 테스트'],
      platforms: [
        { icon: 'ri-smartphone-line', label: 'Android / iOS' },
        { icon: 'ri-store-line', label: '캐주얼 게임' },
      ],
    },
    {
      id: 'PRJ-A',
      name: '프로젝트 A',
      role: 'QA Tester',
      period: '2024.10 - 2024.12',
      description: '모바일 RPG 게임의 전반적인 QA 업무를 담당했습니다. 게임 밸런스, UI/UX, 버그 테스트를 진행했습니다.',
      achievements: [
        { icon: 'ri-bug-line', value: '100+', label: '버그 발견' },
        { icon: 'ri-file-list-3-line', value: '50건', label: 'TC 작성' },
        { icon: 'ri-alert-line', value: '10건', label: '크리티컬 버그' },
      ],
      tasks: ['기능 테스트', '회귀 테스트', 'UI/UX 검수', '버그 리포팅', '밸런스 검토'],
      platforms: [
        { icon: 'ri-smartphone-line', label: 'Android / iOS' },
        { icon: 'ri-gamepad-line', label: '모바일 RPG' },
      ],
    },
    {
      id: 'PRJ-B',
      name: '프로젝트 B',
      role: 'Junior QA',
      period: '2024.07 - 2024.09',
      description: '처음으로 참여한 게임 QA 프로젝트입니다. 기본적인 기능 테스트와 간단한 버그 리포팅 업무를 수행했습니다.',
      achievements: [
        { icon: 'ri-bug-line', value: '30+', label: '버그 발견' },
        { icon: 'ri-file-list-3-line', value: '20건', label: 'TC 작성' },
        { icon: 'ri-alert-line', value: '2건', label: '크리티컬 버그' },
      ],
      tasks: ['기능 테스트', '버그 리포팅', 'UI 검수'],
      platforms: [
        { icon: 'ri-smartphone-line', label: 'Android / iOS' },
        { icon: 'ri-gamepad-line', label: '퍼즐 게임' },
      ],
    },
  ],
};

export const cdData = {
  stats: [
    { icon: 'ri-file-list-3-line', value: '133', label: '총 테스트 케이스' },
    { icon: 'ri-bug-line', value: '72', label: '발견한 버그' },
    { icon: 'ri-alert-line', value: '16', label: '크리티컬 버그' },
    { icon: 'ri-folder-check-line', value: '3', label: '완료 프로젝트' },
  ],
  projects: [
    {
      id: 'CD-001',
      name: '개인 QA 프로젝트 1',
      type: '모바일 게임',
      typeIcon: 'ri-android-line',
      period: '2024.11 - 2024.12',
      tc: 45,
      bugs: 23,
      crit: 5,
      clearRate: 90,
      tags: ['# 기능테스트', '# UI검수', '# 버그리포팅'],
    },
    {
      id: 'CD-002',
      name: '개인 QA 프로젝트 2',
      type: '웹 애플리케이션',
      typeIcon: 'ri-global-line',
      period: '2024.09 - 2024.10',
      tc: 32,
      bugs: 18,
      crit: 3,
      clearRate: 75,
      tags: ['# 크로스브라우저', '# 기능테스트', '# 회귀테스트'],
    },
    {
      id: 'CD-003',
      name: '개인 QA 프로젝트 3',
      type: 'PC 게임',
      typeIcon: 'ri-computer-line',
      period: '2024.07 - 2024.08',
      tc: 56,
      bugs: 31,
      crit: 8,
      clearRate: 85,
      tags: ['# 성능테스트', '# UI/UX', '# 개선제안'],
    },
  ],
};

export const skillsToolData = [
  {
    category: 'Office',
    items: [
      { name: '구글시트', icon: 'ri-table-line' },
      { name: '엑셀', icon: 'ri-file-list-line' },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { name: '슬랙', icon: 'ri-slack-line' },
      { name: '노션', icon: 'ri-sticky-note-line' },
      { name: 'JIRA', icon: 'ri-bug-line' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: '피그마', icon: 'ri-pen-nib-line' },
      { name: '포토샵', icon: 'ri-magic-line' },
      { name: '일러스트', icon: 'ri-palette-line' },
    ],
  },
  {
    category: 'Tech',
    items: [
      { name: 'HTML5', icon: 'ri-code-line' },
      { name: 'CSS3', icon: 'ri-braces-line' },
      { name: '파이썬', icon: 'ri-terminal-line' },
    ],
  },
];

export const stageMap = [
  { id: 1, label: 'STAGE 1', title: '자기소개', icon: 'ri-check-line' },
  { id: 2, label: 'STAGE 2', title: '경력·학력', icon: 'ri-check-line' },
  { id: 3, label: 'STAGE 3', title: '리포트', icon: 'ri-check-line' },
  { id: 4, label: 'STAGE 4', title: 'Skills', icon: 'ri-tools-line' },
];
