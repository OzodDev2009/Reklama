
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("active");
    $(this).addClass("active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});



$('ul.tabs li').last().addClass("tab_last");

// Barcha accordion bloklarini olish
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
    const accordionBlock = accordion.querySelector('.accordion__block');
    const accordionText = accordion.querySelector('.accordion__txt');
    const rotateIcon = accordion.querySelector('.accordion__img');

    accordionBlock.addEventListener('click', function() {
        if (accordionText.style.maxHeight) {
            accordionText.style.maxHeight = null;  
        } else {
            accordionText.style.maxHeight = accordionText.scrollHeight + "px";  
        }

        rotateIcon.classList.toggle('rotate');
    });
});


