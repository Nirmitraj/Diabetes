// const url="http://3.86.240.3:8000/dashboard/allvalues";

// window.addEventListener('load', ()=>fetchNews());

// async function fetchNews(){
//     console.log("this function is called");
//     const res = await fetch(url, {
//         mode: 'cors',
//         headers: {
//           'Access-Control-Allow-Origin':'*'
//         }
//       });
//     const data = await res.json();
//     console.log(data);
//     bindData(data.articles);
// }
// function bindData(articles){
//      const cardsContainer = document.getElementById("cards-container");
//      const newsCardTemplate = document.getElementById("template-news-card");

//      cardsContainer.innerHTML='';
    
//      array.forEach((article) => {
        
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

//     newsImg.src = array.link;
//     newsTitle.innerHTML=array.sub_heading_1;
//     newsDesc.innerHTML=array.sub_heading_1_description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US",{
//         timeZone: "Asia/Jakarta"
//     });
//     newsSource.innerHTML = `${array.source.name} . ${date}`;
//     cardClone.firstElementChild.addEventListener('click',()=>{
//         window.open(array.link,"_blank");
//     })
// }