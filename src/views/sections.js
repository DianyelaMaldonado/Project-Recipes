import { timestamp } from '../helpers.js';

function sections(id) {
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=' + id + '&fields=id,title,summary,url,taxonomy.name,created,image.styles.gallerie,author.name&type=receta')
        .then(res => {

            return res.json()
        })
        .then(function (sections) {
            let healthyContent = document.querySelector('#sectionsWrapper');
            let healthyCards = '';
            let visibilyHealthyCards = sections.data;
            console.log(visibilyHealthyCards);

            for (var visibilycardsHealthy in visibilyHealthyCards) {
                let data_healthyCards = visibilyHealthyCards[visibilycardsHealthy];
                var encounterDate = data_healthyCards['created'];
                var formattedDate = timestamp(encounterDate);

                healthyCards += ` 
                <section id="paginationPage">
                    <div id="sectionsWrapper" class="container">
                        <div class="row littlebox">
                                <div id="contentleft" class="col s8">
                                    <div class="row">
                                        <div class="col s6">
                                            <img class="responsive-img" src="${data_healthyCards['image']['styles']['gallerie']}"
                                                alt="" class="responsive-img">
                                        </div>

                                    <div class="col s6">
                                        <div class="textRecipeInformation">
                                            <h6 class="subtitlefour">${data_healthyCards['title']}</h6>
                                            <h4 class="titleRecipefour">${data_healthyCards['taxonomy']['name']}</h4>
                                            <h6 class="dateAndAutorbigbox">${formattedDate} / ${data_healthyCards['author']}</h6>
                                            <p class="recipeNoteDescriptionfour">${data_healthyCards['summary']}</p>
                                        </div>
                                </div>
                            </div>

                            </div>

                                <div id="contentRight" class="col s4">
                                    <ul>
                                        <li>
                                            <div class="row">
                                                <div class="col s4">
                                                    <img src="${data_healthyCards['image']['styles']['gallerie']}"
                                                        alt="" class="responsive-img">
                                                </div>

                                                <div class="col s8">
                                                    <h4 class="titlelittlebox">Friend eggs whith ham</h4>
                                                    <h6 class="dateAndAutorlittlebox">JULY 11,2018 / BY JULIA STILES</h6>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                        </div>
                                 <div>
                                    <ul class="pagination">
                                        <li class="disabled"><a href="#!"><i class="material-icons">navigate_before</i></a></li>
                                        <li class="active"><a href="#!">1</a></li>
                                        <li class="active waves-effect"><a href="#!">2</a></li>
                                        <li class="active waves-effect"><a href="#!">3</a></li>
                                        <li class="waves-effect"><a href="#!"><i class="material-icons">navigate_next</i></a></li>
                                    </ul>
                                  </div>
                    </div>
                </section>
                     `;
            }
            healthyContent.innerHTML = healthyCards;
        })
}

export { sections }
