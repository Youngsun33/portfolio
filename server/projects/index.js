module.exports = async function (context, req) {
  // 샘플 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: '포트폴리오 사이트',
      description: 'React와 Express로 만든 웹 개발자 포트폴리오',
      link: 'https://github.com/yourname/portfolio',
      tech: ['React', 'Express', 'CSS']
    },
    {
      id: 2,
      title: 'Todo 앱',
      description: '간단한 할 일 관리 앱',
      link: 'https://github.com/yourname/todo-app',
      tech: ['React', 'Node.js']
    }
  ];

  context.res = {
    // status: 200, // 기본값
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: projects
  };
}; 