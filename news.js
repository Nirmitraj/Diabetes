const API_KEY ="d1c4f23d73e04974a69f27d8140ed8d2";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=>fetchNews("diabetes"));

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}
function bindData(articles){
     const cardsContainer = document.getElementById("cards-container");
     const newsCardTemplate = document.getElementById("template-news-card");

     cardsContainer.innerHTML='';
    
     articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardClone= newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
     });
}
function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} . ${date}`;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    })
}

const images = ['images/news7.jpeg','images/news6.jpeg','images/news5.jpg']
const carousel = document.querySelector(".carousel") 
const interval = setInterval(function(){
    startCarousel();
},3000)
var index = 1;

startCarousel = () =>{
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if(index > images.length - 1) index=0; 
}