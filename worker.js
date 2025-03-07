addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
  
    // 如果请求的是根路径，返回 GitHub Pages 上的 jiancebaogao.html 文件
    if (path === "/") {
      return new Response(await fetch("https://Rynlemon.github.io/jiancebaogao/jiancebaogao.html"), {
        headers: { "Content-Type": "text/html" },
      });
    }
  
    // 如果请求的是图片路径，返回 GitHub Pages 上的图片文件
    else if (path.startsWith("/images/")) {
      const imageName = path.split("/images/")[1];
      return new Response(await fetch(`https://Rynlemon.github.io/jiancebaogao/images/${imageName}`), {
        headers: { "Content-Type": "image/jpeg" },  // 根据图片类型调整 Content-Type
      });
    }
  
    // 默认返回 404
    return new Response("404 Not Found", { status: 404 });
  }
  