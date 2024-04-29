import jsonData from './sample.json' assert {type: 'json'};
console.log(jsonData);

const newsCardTemplate = document.getElementById("template-news-card");
const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = ''; // Clearing the container before appending

jsonData.forEach(post => {
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, post);
    cardsContainer.appendChild(cardClone);
});

 function fillDataInCard(cardClone,jsonData){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.innerHTML = jsonData.sub_heading_1;
    newsTitle.innerHTML=jsonData.author;
    if (jsonData.sub_heading_1_description === null) {
        // Assign a default description here or leave it empty
        newsDesc.innerHTML = jsonData.sub_heading_2_description ;
    } else {
        newsDesc.innerHTML = jsonData.sub_heading_1_description;
    }

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(jsonData.link,"_blank");
    })
}

    


// window.addEventListener('load', ()=>fetch());

//  function fetchNews(){
//     const res =  fetch();
//     const data =  res.json();
//     bindData(data.articles);
// }
// function bindData(articles){
//      const cardsContainer = document.getElementById("cards-container");
//      const newsCardTemplate = document.getElementById("template-news-card");

//      cardsContainer.innerHTML='';
    
//      articles.forEach((article) => {
//         if(!article.urlToImage) return;
//         const cardClone= newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);
//      });
// }
// function fillDataInCard(cardClone,article){
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML=article.title;
//     newsDesc.innerHTML=article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US",{
//         timeZone: "Asia/Jakarta"
//     });
//     newsSource.innerHTML = `${article.source.name} . ${date}`;
//     cardClone.firstElementChild.addEventListener('click',()=>{
//         window.open(article.url,"_blank");
//     })
// }
