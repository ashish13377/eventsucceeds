




// let vendorToggle = document.getElementById("vendor-toggle");
// let vendorList = document.getElementById("vendor-list");
// var hide=true;
// var x=1;
// $("#vendor-toggle").on("click", function(e) {
//     $("#vendor-list").toggleClass("hidden");
//     e.stopPropagation()
//   });
//   $(document).on("click", function(e) {
      
//         if ($(e.target).is("#vendor-list") === false && $(e.target).is("#vendor-toggle") === false) {
//       $("#vendor-list").addClass("hidden");
//     }
//   });





  const buttonRightVenue = document.getElementById('venue-right-button');
  const buttonLeftVenue = document.getElementById('venue-left-button');

  buttonRightVenue.onclick = function () {
    document.getElementById('venue').scrollLeft += 120;
  };
  buttonLeftVenue.onclick = function () {
    document.getElementById('venue').scrollLeft -= 120;
  };

  const buttonRightPopularSearch = document.getElementById('popular-search-right-button');
  const buttonLeftPopularSearch = document.getElementById('popular-search-left-button');

  buttonRightPopularSearch.onclick = function () {
    document.getElementById('popular-search').scrollLeft += 120;
  };
  buttonLeftPopularSearch.onclick = function () {
    document.getElementById('popular-search').scrollLeft -= 120;
  };



  const buttonRightPopularSearch2 = document.getElementById('popular-search2-right-button');
  const buttonLeftPopularSearch2 = document.getElementById('popular-search2-left-button');

  buttonRightPopularSearch2.onclick = function () {
    document.getElementById('popular-search2').scrollLeft += 120;
  };
  buttonLeftPopularSearch2.onclick = function () {
    document.getElementById('popular-search2').scrollLeft -= 120;
  };







$('.video').on('mouseover mouseout', function(e) {
    const evt = e.type;
    if (evt === 'mouseover') {
      this.play();
    }
    if (evt === 'mouseout') {
      this.pause();
    }
  });





let role="CUSTOMER";

$("#ivendor").on("click", ()=>{
    $("#ivendor").addClass("bg-slate-400");
    $("#icustomer").removeClass("bg-slate-400");
    
    role="VENDOR";
  
})
$("#icustomer").on("click", ()=>{
    role="CUSTOMER";
    $("#icustomer").addClass("bg-slate-400");
    $("#ivendor").removeClass("bg-slate-400");
})



