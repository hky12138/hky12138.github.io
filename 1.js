// 滚动视差
const parallaxImg = document.querySelector(".intro");
const windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const imgPositionY = parallaxImg.getBoundingClientRect().top;
  const imgHeight = parallaxImg.clientHeight;
  const scrollPercent =
    ((scrollY - imgPositionY + windowHeight) / (imgHeight + windowHeight)) *
    100;

  parallaxImg.style.backgroundPosition = `0 -${
    (scrollPercent / 100) * 10 - 3
  }rem`;
});
// header的透明
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY < 10) {
    header.classList.add("colorful");
  } else {
    header.classList.remove("colorful");
  }
});

// fetch('./webmd/')
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const html = parser.parseFromString(data, 'text/html');
//     const links = html.querySelectorAll('a');
//     const ul = document.querySelector('.recommendations ul');
//     j=0;
//     for (let i = 0; i < links.length; i++) {
//       const href = links[i].href;
//       if (href.endsWith('.md')) {
//         j=j+1;
//          const filename = decodeURI(href.match(/[^/]*$/)[0].replace('.md', ''));
//         // const li = document.createElement('li');
//         // const a = document.createElement('a');
//         // a.href = `article-${i + 1}.html`;
//         // a.textContent = filename;
//         // li.appendChild(a);
//         // ul.appendChild(li);
//         const li = document.createElement('li');
//       //  const div = document.createElement('div');
//       //  div.classList.add('recommendation');
//        const a = document.createElement('a');
//        const h3=document.createElement('h3');
//        a.href = `article-${i+1}.html`;
//          //a.textContent = filename
//         h3.textContent=filename
//         const img = document.createElement('img');
//         img.src = `./image/${j }.jpg`;
//           img.alt = filename;
//            const p = document.createElement('p');
//            p.textContent = '这里是内容简介';
//            li.appendChild(a);
//            a.appendChild(h3);
//            a.appendChild(img);
//            a.appendChild(p);
//           // li.appendChild(div);

//           ul.appendChild(li);
//       }
//     }
//   });

// 推荐文章
// 1.对象定义

const recom = [
  {
    date: "2023.07.13",
    type: "网站说明",
    img: "img/0.png",
    title: "关于网站",
    text: "本网站由一前端菜鸟制作，请广大朋友多多指正",
    text_Color: "white",
    bg_Color: " linear-gradient(to right, black, #c6dbe4)",
    address: "1",
  },
  {
    date: "2023.07.16",
    type: "动漫杂谈",
    img: "img/1.png",
    title: "反逆的鲁鲁修",
    text: "你知道雪为什么是白色的吗？因为它忘记了自己的颜色。",
    text_Color: "white",
    bg_Color: " linear-gradient(to right, black, #c6dbe4)",
    address: "2",
  },
  {
    date: "2023.07.16",
    type: "动漫杂谈",
    img: "img/2.png",
    title: "我的青春恋爱物语果然有问题",
    text: "問題、世界は変わりません、自分は変えられます、さて、どう変わりますか。答え、新世界の神になる",
    text_Color: "white",
    bg_Color: " linear-gradient(to left, black, pink)",
    address: "3",
  },
  {
    date: "2023.07.16",
    type: "动漫杂谈",
    img: "img/3.png",
    title: "凉宫春日的忧郁",
    text: "ただの人間には興味ありません宇宙人、未来人、異世界人、超能力者がいたらあたしのところに来なさい，以上",
    text_Color: "white",
    bg_Color: " #000",
    address: "4",
  },
  {
    date: "2023.07.16",
    type: "动漫杂谈",
    img: "img/4.png",
    title: "fate stay night",
    text: "正義の味方",
    text_Color: "white",
    bg_Color: "#000",
    address: "5",
  },
];
const ul = document.querySelector(".recommendations ul");
for (i = 0; i < 4; i++) {
  ul.innerHTML =
    ul.innerHTML +
    `       <li><a  href="blog.html?post=${i + 1}">${recom[i].title}
   </a><div>${recom[i].text}
    <section class="date" >
      <span class="iconfont icon-shizhong"></span>
      ${recom[i].date}
    </section>
    <section class="lebal" >
      <span class="iconfont icon-fenlei"></span>
      ${recom[i].type}
    </section>
    <section class="type"></section>
  </div></li>`;
}
liList = document.querySelectorAll(".recommendations ul li a");
for (i = 0; i < 4; i++) {
  liList[i].style.backgroundImage = "url(" + recom[i].img + ")";
}
