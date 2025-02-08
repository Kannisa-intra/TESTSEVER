const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const studentId = '66080904';
const studentName = 'Kannisa Intra';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`CSI283: DIGITAL ARCHITECTURE AND OPERATING SYSTEM\nThis is a sample learning tool for the CSI 203 course.\nWorkshop #3: startNode.js\nStudent ID: ${studentId}\nStudent Name: ${studentName}\nHELLO`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
