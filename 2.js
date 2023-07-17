window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY < 10) {
    header.classList.add("colorful");
  } else {
    header.classList.remove("colorful");
  }
});
// 获取URL中的查询参数
const urlParams = new URLSearchParams(window.location.search);
const postNumber = urlParams.get("post");

// 根据博文编号加载相应的博文内容
const blogContentDiv = document.getElementById("blog-content");
const txtFilePath = `./blogs/blog${postNumber}.txt`;

// 发送HTTP请求获取博文内容
const request = new XMLHttpRequest();
request.open("GET", txtFilePath, true);
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    // 将博文内容插入到<div>元素中
    blogContentDiv.innerText = request.responseText;
  }
};
request.send();
