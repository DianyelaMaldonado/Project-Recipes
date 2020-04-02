document.addEventListener("DOMContentLoaded", function() {
    var sliderVisibility = document.querySelector('#sliderView');
    loadJSON();
    loadJSONTwo();


});


function loadJSON() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,url,taxonomy.name,created,image,author.name&type=receta&limit=6')
        .then(res => {
            return res.json()
        })
        .then(function(result_json) {
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
        .then(function() {
            slickSlider();
        })

}



function loadJSONTwo() {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,image,taxonomy.name&type=receta&limit=3')
        .then(res => {
            return res.json()
        })
        .then(function(result_json2) {
            CardVisibility = document.querySelector('#CardView');
            let cards = '';
            let cardRecipes = result_json2.data;
            // console.log(cardRecipes);
            for (var cardRecipesNum in cardRecipes) {
                let data_card = cardRecipes[cardRecipesNum];
                console.log(data_card);
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
            // console.log(CardVisibility);
        });

}




function timestamp(encounterDate) {
    var timeTransform = encounterDate;
    var date = new Date(timeTransform * 1000);
    var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    return formattedDate;
}

function slickSlider() {
    $('div.cardSlider div.row').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.sliderButton.prev'),
        nextArrow: $('.sliderButton.next'),
    });
}