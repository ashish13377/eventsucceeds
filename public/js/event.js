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

let eventList =[
    {
        name:"Marriage and Engagement",
        url:"/event/marriage"
    },
    {
        name:"Religious Events",
        url:"/event/religious-events"
    },
    {
        name:"Retirement Party",
        url:"/event/retirement-party"
    },
    {
        name:"School/College Event",
        url:"/event/school-event"
    },
    {
        name:"Office Party",
        url:"/event/office-party"
    },
    {
        name:"Theme Party",
        url:"/event/theme-party"
    },
    {
        name:"Birthday/Anniversary Party",
        url:"/event/birthday-party"
    },
    {
        name:"Trade Show",
        url:"/event/trade-show"
    },
    {
        name:"Bridal/Baby Shower",
        url:"/event/bridal-shower"
    },
    {
        name:"Function",
        url:"/event/children-party-planning"
    },
    {
        name:"Conference planning and Coordination",
        url:"/event/conference-planning"
    },
    // {
    //     name:"Event Marketing",
    //     url:"/event/event-marketing"
    // },
    {
        name:"Proposal",
        url:"/"
    }
]
eventList.forEach((event)=>{
    
    $("#event-list").append(`<a href="${event.url}"><div class="hover:bg-slate-200 cursor-pointer text-xl w-full border-b-2  Bunya  border-slate-200 h-full p-2">${event.name}</div></a>`);
})
