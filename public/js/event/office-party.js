let cardArray=[
    {
        text:"Food",
        img:"/images/food/evelina-friman-hw_sKmjb0ns-unsplash.jpg"
    },
    {
        text:"Venue",
        img:"/images/venue/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg"
    },
    {
        text:"Decor",
        img:"/images/decoration/anton-mislawsky-S8VoxKULWrU-unsplash.jpg"
    },
    {
        text:"Gift",
        img:"/images/proposal/marcus-lewis-U63zXX2f7ho-unsplash.jpg"
    }
];


cardArray.forEach((subEvent)=>{
    $("#container").append(`<div class="card"><img src="${subEvent.img}" class="object-cover    rounded-lg h-full w-full" alt=""><h3 class="title">${subEvent.text}</h3><div class="bar"><div class="emptybar"></div> <div class="filledbar"></div></div><div class="circle"><svg class="circle-svg"version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="stroke" cx="60" cy="60" r="50" /></svg> </div></div> `)
})