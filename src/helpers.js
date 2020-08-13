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

function viewMore() {
    let view = document.getElementById('more');
    console.log("aqui está el id", view);
    // view.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     alert('funcionó')
    // });

}

export { timestamp, slickSlider, viewMore }
