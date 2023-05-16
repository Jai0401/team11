const https = require("https");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const options = {
    hostname: "newsapi.org",
    path: "/v2/top-headlines?country=in&category=sports&apiKey=bd80f7e3deb74e60872e3572d42ff5c9",
    method: "GET",
    headers: {
      "User-Agent": "news-app"
    }
  };

  const request = https.request(options, function(response) {
    let body = "";
    response.on("data", function(chunk) {
      body += chunk;
    });

    response.on("end", function() {
      const news = JSON.parse(body);
      if (!news.articles || news.articles.length === 0) {
        res.end("No articles found");
      } else {
        let responseText = `<!DOCTYPE html>
<html>
<head>
    <title>Sports News</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
</head>
<body>
<h1 class="text-center underline">Sports News</h1>\n`;
        for (let i = 0; i < news.articles.length; i++) {
          responseText += `<h2>${news.articles[i].title}</h2>\n`;
          responseText += `<img src="${news.articles[i].urlToImage}" alt="Image of the news">\n`;
          responseText += `<p class="author">Author: ${news.articles[i].author}</p>\n`;
          responseText += `<p class="description"><strong>${news.articles[i].description}</strong></p>\n`;
          responseText += `<p class="content">Content: ${news.articles[i].content}</p>\n`;
          responseText += `<p class="full-article">Full article: <a href="${news.articles[i].url}">${news.articles[i].url}</a></p>\n`;
          responseText += `<p class="published-at">Published At: ${news.articles[i].publishedAt}</p>\n`;
          responseText += "<hr>\n";
        }
        responseText += "</body>\n</html>\n";
        res.end(responseText);
      }
    });
  });

  request.on("error", function(error) {
    console.error(`Problem with request: ${error.message}`);
    res.end("Error while fetching news data");
  });

  request.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
