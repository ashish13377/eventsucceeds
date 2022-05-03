const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const https = require("https");
const { config } = require("dotenv");
const request  = require("request");

require("dotenv/config");
// const { config } = require("dotenv");
// const res = require("express/lib/response");
// require("dotenv/config");


var app= express();


app.use(express.static("assets"));
app.use(express.static("public"));
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})
// app.get("/event", (req,res)=>{
//     res.render("event");
// })
app.get("/coming-soon", (req,res)=>{
    res.render("coming soon");
})

app.post('/callback-subscription', (req,res)=>{
     console.log(req.body);
    const {email}= req.body;
    //validate email 
    
    if(!email ){
        res.redirect("/");
    }
     const dataTest={
        members:[
            {
                email_address: email,
                status:'subscribed'
                // merge_fields:{
                //     PHONE: phone,
                //     MESSAGE: role
                // }
            }
        ]
    }
    const postData= JSON.stringify(dataTest);
    console.log(postData);
    const option = {
        url : 'https://us14.api.mailchimp.com/3.0/lists/c57b278c67',
        method: 'POST',
        headers: {
            Authorization: 'auth f1e31ffbc380d2beccefa4d41160dc81-us14'
        },
        body: postData
    }
    request(option, (err, response, body)=>{
        if(err){
            console.log("hello");
        }else{
            console.log(response.statusCode);
        }
    })
})

app.post('/callback', (req,res)=>{
    console.log(req.body);
   const {email, phone, message}= req.body;
   //validate email 
   
   if(!email ){
       res.redirect("/");
   }
    const dataTest={
       members:[
           {
               email_address: email,
               status:'subscribed',
               merge_fields:{
                   MMERGE2: phone,
                   MMERGE1: message
               }
           }
       ]
   }
   const postData= JSON.stringify(dataTest);
   console.log(postData);
   const option = {
       url : 'https://us5.api.mailchimp.com/3.0/lists/e80f915121',
       method: 'POST',
       headers: {
           Authorization: 'auth 9756f6e037279563d61307f359a08b94-us5'
       },
       body: postData
   }
   request(option, (err, response, body)=>{
       if(err){
           console.log("hello");
       }else{
           console.log(response.statusCode);
       }
   })
})
var occDet=[
    {
        title:"Marriage",
        name:"Marriage",
        tagline:"Have the wedding of your dreams . you enjoy you’re the moment. Well take care of the rest . We are known for our managing services of wedding, engagement and reception Events that can add a touch of excellence to your event. We provide services for all kind of school events.",
        js: "/js/event/marriage.js",
        bgImg:"/images/event/marriage-background/christopher-brown-ZRWbtTie4_Q-unsplash.jpg"
    },  
    {
        title:"Religious Event",
        name:"Religious Event",
        tagline:" We are known for our managing services of Religious Events that can add a touch of tradition and excellence to your event. We provide services for all kind of religious events.",
        js: "/js/event/religious-events.js",
        bgImg:"/images/event/religious-events-background/chamika-dharmasena-9fqaCy7OopQ-unsplash.jpg"
    },  
    {
        title:"Retirement Party",
        name:"Retirement Party",
        tagline:" The best part about being retired is never having to request time off. Celebrate your loves ones life by throwing them a very special retirement party with our help.        ",
        js: "/js/event/retirement-party.js",
        bgImg:"/images/event/retirement-party-background/retirementparty-background.jpg"
    },  
    {
        title:"School Event",
        name:"School Event",
        tagline:"We are known for our managing services of school Events that can add a touch of excellence to your event. We provide services for all kind of school events.",
        js: "/js/event/school-event.js",
        bgImg:"/images/event/school-event-background/chuttersnap-cX2vElQ5aHk-unsplash.jpg"
    },   
    {
        title:"Office Party",
        name:"Office Party",
        tagline:"We are known for our managing services of office Events that can add a touch of excellence to your event. We provide services for all kind of school events.",
        js: "/js/event/office-party.js",
        bgImg:"/images/event/office-party-background/officeparty-background.jpg"
    },   
    {
        title:"Theme Party",
        name:"Theme Party",
        tagline:"Party are boring? Throw  themed party. We are known for our managing services of theme parties that can add a touch of excellence to your event. We provide services for all kind of school ev",
        js: "/js/event/theme-party.js",
        bgImg:"/images/event/theme-party-background/sirio-hm3efUMoReg-unsplash.jpg"
    },   
    {
        title:"Birthday Party",
        name:"Birthday Party",
        tagline:"Have the wedding of your dreams . you enjoy you’re the moment. Well take care of the rest . We are known for our managing services of wedding, engagement and reception Events that can add a touch of excellence to your event. We provide services for all kind of school events.",
        js: "/js/event/birthday-party.js",
        bgImg:"/images/event/birthday-party-background/birthdayparty-background.jpeg"
    },   
    {
        title:"Trade Show",
        name:"Trade Show",
        tagline:"We are known for our managing services of trade show Events that can add a touch of excellence to your event. We provide services for all kind of school events.        ",
        js: "/js/event/trade-show.js",
        bgImg:"/images/event/trade-show-background/tradeshow-background.jpg"
    },   
    {
        title:"Bridal Shower",
        name:"Bridal Shower",
        tagline:"We are known for our managing services of bridal shower Events that can add a touch of excellence to your event. We provide services for all kind of school events.        ",
        js: "/js/event/bridal-shower.js",
        bgImg: "/images/event/bridal-shower-background/andreina-vincentelli-UjsySa8irBQ-unsplash.jpg"
    },   
    {
        title:"Children's Party Planning",
        name:"Children's Party Planning",
        tagline:"We are known for our managing services of childrens party planning that can add a touch of excellence to your event. We provide services for all kind of school events.        ",
        js: "/js/event/childrens-party-planning.js",
        bgImg:"/images/event/childrens-party-planning/jorge-ibanez-cK6ixOQx1fI-unsplash.jpg"
    },   
    {
        title:"Conference planning and Coordination",
        name:"Confrence planning and Coordination",
        tagline:"We are known for our managing services of conference planning that can add a touch of excellence to your event. We provide services for all kind of school events.        ",
        js: "/js/event/conference-planning-and-coordination.js",
        bgImg:"/images/event/conference-party-and-coordination-background/miguel-henriques-E0bIdzi8zoQ-unsplash.jpg"
    },   
    {
        title:"Event Marketing",
        name:"Event Marketing",
        tagline:"We are known for our managing services of Event marketing plnning that can add a touch of excellence to your event. We provide services for all kind of school events.        ",
        js: "/js/event/event-marketing.js",
        bgImg:"/images/event/event-marketing-background/adi-goldstein-Hli3R6LKibo-unsplash.jpg"
    },   
      
]
app.get("/event/marriage", (req,res)=>{
    res.render("event", {post: occDet[0]})
})
app.get("/event/religious-events", (req,res)=>{
    res.render("event", {post: occDet[1]})    
})
app.get("/event/retirement-party", (req,res)=>{
    res.render("event", {post: occDet[2]})
})
app.get("/event/school-event", (req,res)=>{
    res.render("event", {post: occDet[3]})
})
app.get("/event/office-party", (req,res)=>{
    res.render("event", {post: occDet[4]})
})
app.get("/event/theme-party", (req,res)=>{
    res.render("event", {post: occDet[5]})
})
app.get("/event/birthday-party", (req,res)=>{
    res.render("event", {post: occDet[6]})
})
app.get("/event/trade-show", (req,res)=>{
    res.render("event", {post: occDet[7]})
})
app.get("/event/bridal-shower", (req,res)=>{
    res.render("event", {post: occDet[8]})
})
app.get("/event/children-party-planning", (req,res)=>{
    res.render("event", {post: occDet[9]})
})
app.get("/event/conference-planning", (req,res)=>{
    res.render("event", {post: occDet[10]})
})
app.get("/event/event-marketing", (req,res)=>{
    res.render("event", {post: occDet[11]})
})

let port= process.env.PORT;
if(port== null || port == ""){
  port= 4000;
}
app.listen(port, function(){
  console.log("Server has started succesfully");
});

