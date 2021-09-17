$(function() {
  $(window).on("load", function() {
    var sliderItemsArray = Array.prototype.slice.call(
      document.querySelectorAll(".slider-item")
    );
    // var tl = anime.timeline({
    //   easing: "easeOutQuint",
    //   duration: 2000,
    //   loop: true
    // });

    // tl.add({
    //   targets: sliderItemsArray.reverse(),
    //   translateX: ["0", "100%"],
    //   delay: function(el, i, l) {
    //     return i * 4000;
    //   },
    //   zIndex: function(el, i, l) {
    //     return -1;
    //   }
    // });
    anime({
      targets: sliderItemsArray.reverse(),
      translateX: ["0", "100%"],
      loop: true,
      easing: "easeOutQuint",
      duration: 2000,
      delay: function(el, i, l) {
        return i * 4000;
      }
    });
    anime({
      targets: sliderItemsArray,
      zIndex: function(el, i, l) {
        return i * -1;
      },
      translateX: ["100%", "0"],
      loop: true,
      easing: "easeOutQuint",
      duration: 2000,
      delay: function(el, i, l) {
        return i * 4000;
      }
    });
  });
});
