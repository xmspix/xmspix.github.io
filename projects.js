const projects = [
  {
    title: "Spotify Clone",
    description:
      "Spotify clone was built as a personal project, all data (music & videos) come from YouTube.",
    tag: "",
    img: "./images/spotify-clone.gif",
    code: "https://github.com/xmspix/spotify-clone",
    demo: "http://mark-stoler.dynu.net/spotify/",
    featured: true,
  },
  {
    title: "Stock Market Module",
    description: "Node.js module",
    tag: "",
    img: "./images/stock-market-module.png",
    code: "https://github.com/xmspix/stock-market-module",
    featured: false,
  },
  {
    title: "Beauty Salon",
    description: "Business Project",
    tag: "",
    img: "./images/stoler_angels_salon/main.png",
    more: "/stoler-angels-salon.html",
    featured: false,
  },
  {
    title: "Notes",
    description: "Notes app built using React",
    tag: "",
    img: "https://media.giphy.com/media/hVCu2uHfpzrURmP362/giphy.gif",
    code: "https://github.com/xmspix/notes-app-react",
    demo: "https://xmspix.github.io/notes-app-react/",
    featured: false,
  },
  {
    title: "Movies",
    description: "Movies app built using React",
    tag: "",
    img: "https://media.giphy.com/media/Vhi3mONqdHE05RDGeU/giphy.gif",
    code: "https://github.com/xmspix/movies-webpack-react",
    demo: "https://mark-stoler-movies-app.herokuapp.com/",
    featured: false,
  },
  {
    title: "Todo List",
    description: "Todo list app built using React",
    tag: "",
    img: "https://github.com/xmspix/todo-list-react/raw/master/demo/todo-list-app.gif",
    code: "https://github.com/xmspix/todo-list-react",
    demo: "https://xmspix.github.io/todo-list-react",
    featured: false,
  },
  {
    title: "Infinite Scroll",
    description: "React Component",
    tag: "",
    img: "https://media.giphy.com/media/lTY0YaHzqlKJ7lp2Vw/giphy.gif",
    code: "https://github.com/xmspix/react-infinite-scroll",
    featured: false,
  },
  {
    title: "Yahoo Finance",
    description: "Node.js module",
    tag: "",
    img: "./images/YahooFinance.png",
    code: "https://github.com/xmspix/yahoo-finance-module",
    featured: false,
  },
  {
    title: "Yahoo Finance News",
    description: "Node.js module",
    tag: "",
    img: "./images/YahooFinanceNews.png",
    code: "https://github.com/xmspix/yahoo-finance-news",
    featured: false,
  },
];

//
document.querySelector(".featured").innerHTML = projects
  .filter((p) => p.featured)
  .map(
    (p) =>
      `
  <article class="post featured">
            <header class="major">
              <h2><a href="#">${p.title}</a></h2>
              <p>${p.description}</p>
            </header>
            <a href="#" class="image main"
              ><img
                src="${p.img}"
                alt=""
            /></a>
            <ul class="actions special">
            ${
              p.demo
                ? `<li><a href=${p.demo} target="_blank" class="button">View</a></li>`
                : ""
            }
            ${
              p.code
                ? `<li><a href="${p.code}" target="_blank" class="button">Code</a></li>`
                : ""
            }
            ${
              p.more
                ? `<li><a href="${p.more}" target="_blank" class="button">More</a></li>`
                : ""
            }
            </ul>
          </article>`
  );

const posts = projects
  .filter((p) => !p.featured)
  .map(
    (p) =>
      `  <article>
         <header>
             <h2><a href="#">${p.title}</a></h2>
         </header>
         <a href="#" class="image fit cover"><img src="${p.img}" alt="" /></a>
         <p>${p.description}</p>
         <ul class="actions special">
         ${
           p.demo
             ? `<li><a href=${p.demo} target="_blank" class="button">View</a></li>`
             : ""
         }
         ${
           p.code
             ? `<li><a href="${p.code}" target="_blank" class="button">Code</a></li>`
             : ""
         }
         ${
           p.more
             ? `<li><a href="${p.more}" target="_blank" class="button">More</a></li>`
             : ""
         }
             
         </ul>
     </article>`
  )
  .join("");

document.querySelector(".posts").innerHTML = posts;
