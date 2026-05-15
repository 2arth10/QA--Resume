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
  characterStats: [
    { label: '열정', value: 100 },
    { label: '성실도', value: 88 },
    { label: '커뮤니케이션', value: 78 },
    { label: '꼼꼼함', value: 90 },
    { label: '분석력', value: 85 },
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
      title: 'ISTQB Foundation Level',
      subtitle: '국제 소프트웨어 테스팅 자격증 (CTFL)',
      period: '2026.02.26',
      description: 'ISTQB(International Software Testing Qualifications Board) Foundation Level 자격증을 취득했습니다.',
      tags: ['# ISTQB', '# CTFL', '# 자격증'],
      type: 'education',
      icon: 'ri-award-line',
      sideIcon: 'ri-medal-fill',
    },
    {
      title: '게임QA 교육 이수',
      subtitle: '',
      period: '2025.11.11 ~ 2025.12.15',
      description: '게임 QA 전문 교육 과정을 이수했습니다.',
      tags: ['# 게임QA', '# 교육이수'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '컴투스 QA 캠퍼스 8기',
      subtitle: 'QA실무 중심의 교육과정으로 납품 프로세스 이해',
      period: '2025.07.08 ~ 2025.08.28',
      description: '컴투스에서 진행한 QA 캠퍼스 8기 교육 과정을 수료했습니다. QA 실무 중심 커리큘럼을 통해 게임 납품 프로세스와 품질 관리 체계를 이해했습니다.',
      tags: ['# 컴투스', '# QA캠퍼스', '# 납품프로세스'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '스마트웹&콘텐츠개발BL웹표준기반 스마트UIUX디자인&웹퍼블리셔_A',
      subtitle: '기획, 디자인, 개발, QA 등 웹표준기반 전 과정을 수행',
      period: '2024.03.18 ~ 2024.08.19',
      description: '웹 표준을 기반으로 한 스마트 UI/UX 디자인 및 웹 퍼블리셔 과정을 수료했습니다. 기획부터 디자인, 개발, QA까지 웹 전 과정을 직접 수행하며 API 연동, 반응형 웹, Python 등의 기술을 실습했습니다.',
      tags: ['# 웹퍼블리셔', '# UIUX', '# API연동', '# 반응형웹', '# Python'],
      type: 'education',
      icon: 'ri-book-open-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '청강문화산업대학교',
      subtitle: '패션디자인 (학사)',
      period: '2019.03 ~ 2023.02',
      description: '청강문화산업대학교 패션디자인 3년제 과정 졸업 후, 전공심화로 학사를 취득했습니다.',
      tags: ['# 청강대', '# 패션디자인', '# 3년제', '# 졸업'],
      type: 'education',
      icon: 'ri-graduation-cap-line',
      sideIcon: 'ri-graduation-cap-fill',
    },
    {
      title: '스플렌더 그랑프리 본선 진출',
      subtitle: '전국 보드게임 대회',
      period: '2017.06.22',
      description: '전국 보드게임 대회 스플렌더 부문 본선에 진출했습니다.',
      tags: ['# 보드게임', '# 스플렌더', '# 본선진출'],
      type: 'education',
      icon: 'ri-gamepad-line',
      sideIcon: 'ri-trophy-fill',
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
      pdfUrl: '/FF14-KAN11-버그리포트.pdf',
    },
    {
      id: 'DS-001',
      title: '드래곤 소드',
      subtitle: '게임 밸런스 및 버그 리포팅',
      type: 'RPG',
      date: '2024.12',
      status: '완료',
      characterImg: 'https://storage.readdy-site.link/project_files/a6ca4dd3-6c1e-4f87-a06c-f19010fe655b/416b393a-d0fd-4f8f-b9a7-6ed470475eb5_-.png?v=bd2f12ffbc7e14a5177dd723d077ef89',
      pdfUrl: '/DS-KAN22-버그리포트.pdf',
    },
    {
      id: 'CZ-001',
      title: '카오스 제로 나이트 메어',
      subtitle: '전투 시스템 및 UI 검수 리포트',
      type: 'RPG',
      date: '2024.11',
      status: '완료',
      characterImg: '/카오스제로나이트메어.png',
      pdfUrl: '/CZ-KAN21-버그리포트.pdf',
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


export const skillsToolData = [
  {
    category: 'Office',
    items: [
      { name: 'Google Sheets', icon: 'simple-icons:googlesheets', color: '#34A853', proficiency: 8, desc: 'TC작성 조건부 필터정렬상태값 분류 가능' },
      { name: 'Excel', icon: 'vscode-icons:file-type-excel', proficiency: 7, desc: '기본 함수 및 TC 표 작성 가능' },
      { name: 'Word', icon: 'vscode-icons:file-type-word', proficiency: 8, desc: '문서 작성 및 서식 편집 가능' },
      { name: 'PPT', icon: 'vscode-icons:file-type-powerpoint', proficiency: 9, desc: '슬라이드 디자인 및 발표 자료 제작' },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { name: 'Slack', icon: 'logos:slack-icon', proficiency: 8, desc: '채널 관리 및 협업 소통 가능' },
      { name: 'Notion', icon: 'simple-icons:notion', proficiency: 9, desc: '문서화 및 프로젝트 관리 가능' },
      { name: 'JIRA', icon: 'logos:jira', proficiency: 7, desc: '이슈 등록 및 스프린트 관리 가능' },
      { name: 'Github', icon: 'mdi:github', proficiency: 6, desc: '기본 커밋·푸시·브랜치 관리 가능' },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { name: 'ChatGPT', icon: 'simple-icons:openai', proficiency: 9, desc: '업무 보조 및 문서 작성에 적극 활용' },
      { name: 'Claude', icon: 'simple-icons:claude', color: '#D97757', proficiency: 8, desc: '분석·요약·코드 작업에 활용' },
      { name: 'Gemini', icon: '', img: '/제미나이_로고.png', proficiency: 7, desc: '리서치 및 아이디어 도출에 활용' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', icon: 'logos:figma', proficiency: 7, desc: 'UI 디자인 및 프로토타입 제작 가능' },
      { name: 'Photoshop', icon: 'skill-icons:photoshop', proficiency: 8, desc: 'GTQ 1급 보유 버그 캡처시각 강조오버레이 편집 능숙' },
      { name: 'Illustrator', icon: 'skill-icons:illustrator', proficiency: 6, desc: '기획 요소 시각화 아이콘UI 편집 및 변형 가능' },
      { name: 'CLIP STUDIO PAINT', icon: '', img: '/클립스튜디오_로고.png', proficiency: 7, desc: '디지털 드로잉 및 일러스트 제작' },
    ],
  },
  {
    category: 'Tech',
    items: [
      { name: 'HTML5', icon: 'logos:html-5', proficiency: 7, desc: '구조 구성 가능' },
      { name: 'CSS3', icon: 'logos:css-3', proficiency: 7, desc: '기본 퍼블리싱, 반응형 가능' },
      { name: 'Python', icon: 'logos:python', proficiency: 5, desc: '기초 스크립트 및 자동화 작성 가능' },
      { name: 'SQL', icon: 'simple-icons:mysql', proficiency: 5, desc: '기본 쿼리 작성 및 데이터 조회 가능' },
    ],
  },
];

export const stageMap = [
  { id: 1, label: 'STAGE 1', title: '자기소개', icon: 'ri-check-line' },
  { id: 2, label: 'STAGE 2', title: '경력·학력', icon: 'ri-check-line' },
  { id: 3, label: 'STAGE 3', title: '리포트', icon: 'ri-check-line' },
  { id: 4, label: 'STAGE 4', title: 'Skills', icon: 'ri-tools-line' },
];
