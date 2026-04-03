const http = require('http');
const fs = require('fs');
http.get('http://localhost:3000/portfolio', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const matches = [...data.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)];
    fs.writeFileSync('url.txt', matches.map(m => decodeURIComponent(m[1])).join('\n'));
  });
});
