export { timestamp, slickSlider, viewMore } from "./helpers.js"
document.addEventListener("DOMContentLoaded", function () {
    buildHome();
});


function loadJSONOne() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,url,taxonomy.name,created,image,author.name&type=receta&limit=6')
        .then(res => {
            return res.json()
        })
        .then(function (result_json) {
            sliderVisibility = document.querySelector('#sliderView');
            let slider = '';
            let recipesSliders = result_json.data;
            for (var recipeSliderNum in recipesSliders) {
                let data_slider = recipesSliders[recipeSliderNum];
                var encounterDate = data_slider['created']
                var formattedDate = timestamp(encounterDate);
                slider += `                                                               
                            <div class="col s4 relative">
                                <img class="responsive-img" src="${data_slider['image']['styles']['gallerie']}">
                                    <div class="aboutTheImage">
                                        <div class="border">
                                            <div class="slideCardDescription">
                                                <h6 class="subtitle">${data_slider['taxonomy']['name']}</h6>
                                                <h4 class="titleRecipe">${data_slider['title']}</h4>
                                                <h6 class="subtitleDate">${formattedDate}/ ${data_slider['author']['name']}</h6>
                                            </div>
                                        </div>
                                    </div>
                            </div>                                     
                            `;
            }
            sliderVisibility.innerHTML = slider;
        })
        .then(function () {
            slickSlider();
        })

}



function loadJSONTwo() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,image,taxonomy.name&type=receta&limit=3')
        .then(res => {
            return res.json()
        })
        .then(function (result_json2) {
            CardVisibility = document.querySelector('#CardView');
            let cards = '';
            let cardRecipes = result_json2.data;
            for (var cardRecipesNum in cardRecipes) {
                let data_card = cardRecipes[cardRecipesNum];
                cards += `
                           <div class="col s4 relative">                       
                              <img class="responsive-img" src="${data_card['image']['styles']['large']}">
                                <div class="aboutTheImageTwo">
                                    <div class="borderTwo">
                                       <div class="slideCardDescriptionTwo">
                                          <h6 class="subtitleTwo">${data_card['taxonomy']['name']}</h6>
                                          <h4 class="titleRecipeTwo">${data_card['title']}</h4>
                                        </div>
                                    </div>
                                </div>
                           </div>
                    `;
            }
            CardVisibility.innerHTML = cards;
        });

}

function loadJSONThree() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,summary,url,taxonomy.name,created,image.styles.gallerie,author.name&type=receta&limit=2&0ffset=6')
        .then(res => {
            return res.json()
        })
        .then(function (result_json3) {
            noteVisibility = document.querySelector('#noteView');
            let notes = '';
            let notesRecipes = result_json3.data;
            // console.log(notesRecipes[0]);
            for (var noteRecipesNum in notesRecipes) {
                let data_note = notesRecipes[noteRecipesNum];
                var encounterDate = data_note['created'];
                var formattedDate = timestamp(encounterDate);

                if (noteRecipesNum == 0) {
                    notes += `
                    <div class="row paddinngRow">
                        <div class="col s6">
                          <img class="responsive-img" src="${data_note['image']['styles']['gallerie']}">
                        </div>
                        <div class="col s6">
                            <div class="ContentNotes relative">
                                <h6 class="subtiteThree">${data_note['taxonomy']['name']}</h6>
                                <h4 class="titleRecipeNote">${data_note['title']}</h4>
                                <h6 class="dateAndAutor">${formattedDate}/ ${data_note['author']['name']}</h6>
                                <p class="recipeNoteDescription">${data_note['summary']}</p>
                                <button id="more" class="sliderButton next waves-effect waves-light btn-small information">READ MORE</button>
                                </div>
                        </div> 
                    </div>
                    `
                }

                if (noteRecipesNum == 1) {
                    notes += `
                    <div class="row paddinngRow">

                        <div class="col s6">
                            <div class="ContentNotes relative">
                                <h6 class="subtiteThree">${data_note['taxonomy']['name']}</h6>
                                <h4 class="titleRecipeNote">${data_note['title']}</h4>
                                <h6 class="dateAndAutor">${formattedDate}/ ${data_note['author']['name']}</h6>
                                <p class="recipeNoteDescription">${data_note['summary']}</p>
                                <button class="sliderButton next waves-effect waves-light btn-small information">READ MORE</button>
                                </div>
                        </div> 
                            <div class="col s6">
                             <img class="responsive-img" src="${data_note['image']['styles']['gallerie']}">
                            </div>
                    </div>
                    `
                }
            }
            noteVisibility.innerHTML = notes;
        }).then(function () {
            viewMore()
        })

}

function loadJSONFour() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,summary,url,taxonomy.name,created,image.styles.gallerie,author.name&type=receta&limit=3&offset=8')
        .then(res => {
            return res.json()
        })
        .then(function (result_json4) {
            someCardsVisibility = document.querySelector('#contentleft');
            let someCards = '';
            let visibilyCards = result_json4.data;
            // console.log(visibilyCards);

            for (var visibilyCardNum in visibilyCards) {
                let data_cardVisibility = visibilyCards[visibilyCardNum];
                var encounterDate = data_cardVisibility['created'];
                var formattedDate = timestamp(encounterDate);
                someCards += `   <div class="row">
                            <div class="col s6">
                                 <img class="responsive-img" src="${data_cardVisibility['image']['styles']['gallerie']}">
                            </div>
                            <div class="col s6">
                                <div class="textRecipeInformation">
                                    <h6 class="subtitlefour">${data_cardVisibility['taxonomy']['name']}</h6>
                                    <h4 class="titleRecipefour">${data_cardVisibility['title']}</h4>
                                    <h6 class="dateAndAutorbigbox">${formattedDate}/ ${data_cardVisibility['author']['name']}</h6>
                                    <p class="recipeNoteDescriptionfour">${data_cardVisibility['summary']}</p>
                                </div>
                            </div>
                        </div> 
                                   
                `;
            }
            someCardsVisibility.innerHTML = someCards;
        })
}

function loadJSONFive() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,summary,url,taxonomy.name,created,image.styles.gallerie,author.name&type=receta&limit=5&offset=11')
        .then(res => {
            return res.json()
        })
        .then(function (result_json5) {
            littleCardsVisibility = document.querySelector('#contentRight');
            let LittlesomeCards = '';
            let visibilyLittleCards = result_json5.data;
            // console.log(visibilyLittleCards);

            for (var visibilyLittleCardNum in visibilyLittleCards) {
                let data_littleCards = visibilyLittleCards[visibilyLittleCardNum];
                // console.log(visibilyLittleCardNum);
                var encounterDate = data_littleCards['created'];
                var formattedDate = timestamp(encounterDate);

                LittlesomeCards += ` 
                                    <li>
                                        <div class="row">
                                            <div class="col s4">
                                               <img class="responsive-img" src="${data_littleCards['image']['styles']['gallerie']}"> 
                                            </div>

                                            <div class="col s8">
                                                <h4 class="titlelittlebox">${data_littleCards['title']}</h4>
                                                <h6 class="dateAndAutorlittlebox">${formattedDate}/ ${data_littleCards['author']['name']}</h6>
                                             </div>
                                        </div>
                                    </li>  
                 `;
            }
            littleCardsVisibility.innerHTML = LittlesomeCards;
        })
}


function buildHome() {
    loadJSONOne();
    loadJSONTwo();
    loadJSONThree();
    loadJSONFour();
    loadJSONFive();
}