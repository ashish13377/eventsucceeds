let i;
let toggle = document.getElementById("toggle");
let navbar = document.getElementById("navbar");
let navLink = document.querySelectorAll(".nav-link");
$("#toggle").on("click", function(e) {
    $("#navbar").toggleClass("invisible");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
      
        if ($(e.target).is("#navbar") === false && $(e.target).is("#toggle") === false) {
      $("#navbar").addClass("invisible");
    }
  });

for(i=0;i<navLink.length;i++){
    navLink[i].addEventListener("click",()=>{
        navbar.classList.toggle("invisible");
        
    })
}

let vendorToggle = document.getElementById("vendor-toggle");
let vendorList = document.getElementById("vendor-list");
var hide=true;
var x=1;
$("#vendor-toggle").on("click", function(e) {
    $("#vendor-list").toggleClass("hidden");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
      
        if ($(e.target).is("#vendor-list") === false && $(e.target).is("#vendor-toggle") === false) {
      $("#vendor-list").addClass("hidden");
    }
  });






$(function () {
    $(document).scroll(function () {
      var $nav = $("#navigation");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $(".nav-item").toggleClass("scroll-black", $(this).scrollTop() > $nav.height() )
    });
  });


  $(".quick").click((e)=>{
  
 
    // console.log($(this).siblings("div.quick-sibling"));
    $(e.target).siblings("div.quick-sibling").toggleClass("hidden");
  })
  

  $("#vendor-button").click((e)=>{
    $("#query-box").removeClass("bg-blue-400");
    $("#query-box").addClass("bg-[#E60965]");
    $(e.target).removeClass("bg-[#E60965]");
    $(e.target).addClass("border-white");
    
    $(e.target).addClass("text-white");
    $(e.target).siblings("div").removeClass("border-white");
    // $(e.target).addClass("bg-white");
    // $(e.target).removeClass("text-white");
    // $(e.target).addClass("text-slate-900");
    // $(e.target).siblings("div").removeClass("bg-white");
    // $(e.target).siblings("div").removeClass("text-slate-900");
    // $(e.target).siblings("div").addClass("text-white");
    $("#callback-options-vendor").removeClass("hidden")
    $("#callback-options-customer").addClass("hidden");
    
  })
  
  $("#customer-button").click((e)=>{
    $("#query-box").removeClass("bg-[#E60965]");
    $("#query-box").addClass("bg-blue-400");
    $(e.target).siblings("div").addClass("bg-[#E60965]");
    
    
    $("#callback-options-customer").removeClass("hidden");
    $("#callback-options-vendor").addClass("hidden");
  })
  
  let callBackVendor=[
    {
      name:"Mehendi"
    },
    {
      name:"Photography"
    },
    {
      name:"Makeup Artist"
    },
    {
      name:"Decoration"
    },
    {
      name:"Catering"
    }
  ]
  let callBackCustomer=[
    {
      name:"Marriage"
    },
    {
      name:"Baby Shower"
    },
    {
      name:"Bridal Shower"
    },
    {
      name:"Birthday Party"
    },
    {
      name:"Retirement Party"
    },
    {
      name:"Trade show"
    }
  ]
  for(let j=0;j<callBackVendor.length;j++){
    $("#callback-options-vendor").append(`<div class='text-white text-lg font-normal'><input  type='checkbox' name='callRole' id=''><span class='pl-2'>${callBackVendor[j].name}</span></div>`)
  }
  for(let j=0;j<callBackCustomer.length;j++){
    $("#callback-options-customer").append(`<div class='text-white text-lg font-normal'><input  type='checkbox' name='callRole' id=''><span class='pl-2'>${callBackCustomer[j].name}</span></div>`)
  }
   
  var email2 =$("#callback-email-2")[0];
  
  $("#callback-submit-2").on("click",(event)=>{
      
      let emailval= $(email2).val();
      event.preventDefault();
      if(emailval != 'NULL' && emailval!=""){
          let fetchData2 ={
              method : 'POST',
              body : JSON.stringify({
                          email:emailval, 
                      }),
              headers: {
                  "Content-Type": "application/json"
              }
          };
          console.log(fetchData2);
          fetch('/callback-subscription', fetchData2)
              .then(res=>{
                  if(res.ok){
                      console.log("all good");
                  }else{
                      console.log("error");
              }
              });
      }
  
      
  })

  var email1=$("#callBack-email-1")[0];
  var phone=$("#callBack-phone-1")[0];
  var choices=[];
  $("#callback-submit-1").on("click", (event)=>{
    event.preventDefault();
    var $boxes = $('input[name=callRole]:checked');
    
    
    for(var g=0;g<$boxes.length;g++){
      
      choices.push($($boxes[g]).siblings("span").html());
    }
   
    let emailval1= $(email1).val();
    let phoneval1= $(phone).val();
   
    let message= JSON.stringify(choices);
    event.preventDefault();
    if(emailval1 != 'NULL' && emailval1!=""){
        let fetchData1 ={
            method : 'POST',
            body : JSON.stringify({
                        email:emailval1,
                        phone:phoneval1,
                        message:message 
                    }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        console.log(fetchData1);
        fetch('/callback', fetchData1)
              .then(res=>{
                  if(res.ok){
                      console.log("all good");
                  }else{
                      console.log("error");
              }
              });
    }
    
  })

