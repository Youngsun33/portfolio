const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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

// 프로젝트 목록 API
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
}); 