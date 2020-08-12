// function healthy() {
//     fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,taxonomy.name&type=receta')
//         .then(res => {
//             return res.json()
//         })
//         .then(function (result_json6) {
//             healthyContent = document.querySelector('#healthySection');
//             let healthyCards = '';
//             let visibilyHealthyCards = result_json6.data;
//             console.log(visibilyHealthyCards);

//             for (var visibilycardsHealthy in visibilyHealthyCards) {
//                 let data_healthyCards = visibilyHealthyCards[visibilycardsHealthy];
//                 console.log(visibilycardsHealthy);
//                 var encounterDate = data_healthyCards['created'];
//                 var formattedDate = timestamp(encounterDate);

//                 healthyCards += ` 
//                 <section id="paginationPage">
//                     <div class="container">
//                         <div class="row littlebox">
//                                 <div id="contentleft" class="col s8">
//                                     <div class="row">
//                                         <div class="col s6">
//                                             <img class="responsive-img" src="${data_littleCards['image']['styles']['gallerie']}"
//                                                 alt="" class="responsive-img">
//                                         </div>

//                                     <div class="col s6">
//                                         <div class="textRecipeInformation">
//                                             <h6 class="subtitlefour">${data_littleCards['title']}</h6>
//                                             <h4 class="titleRecipefour">Friend eggs whith ham</h4>
//                                             <h6 class="dateAndAutorbigbox">JULY 11,2018 / BY JULIA STILES</h6>
//                                             <p class="recipeNoteDescriptionfour">Lorem ipsum porttitor dapibus nare interdum
//                                                 rutrum.Nunc in dignissim orci. Vel, luctus leo. Morbi a dignissim quam.vel rutrum
//                                                 arcu fringilla sit amet.
//                                             </p>
//                                         </div>
//                                 </div>
//                             </div>

//                             </div>

//                                 <div id="contentRight" class="col s4">
//                                     <ul>
//                                         <li>
//                                             <div class="row">
//                                                 <div class="col s4">
//                                                     <img src="https://cdn2.cocinadelirante.com/sites/default/files/styles/square_circle/public/images/2019/10/brochetas-de-queso-y-tomate-cherry.jpg"
//                                                         alt="" class="responsive-img">
//                                                 </div>

//                                                 <div class="col s8">
//                                                     <h4 class="titlelittlebox">Friend eggs whith ham</h4>
//                                                     <h6 class="dateAndAutorlittlebox">JULY 11,2018 / BY JULIA STILES</h6>
//                                                 </div>
//                                             </div>
//                                         </li>

//                                     </ul>
//                                 </div>
//                         </div>
//                                  <div>
//                                     <ul class="pagination">
//                                         <li class="disabled"><a href="#!"><i class="material-icons">navigate_before</i></a></li>
//                                         <li class="active"><a href="#!">1</a></li>
//                                         <li class="active waves-effect"><a href="#!">2</a></li>
//                                         <li class="active waves-effect"><a href="#!">3</a></li>
//                                         <li class="waves-effect"><a href="#!"><i class="material-icons">navigate_next</i></a></li>
//                                     </ul>
//                                   </div>
//                     </div>
//                 </section>
//                      `;
//             }
//             visibilycardsHealthy.innerHTML = healthyCards;
//         })
// }

// export { healthy }
