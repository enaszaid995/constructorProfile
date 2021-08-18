function Programmer(name, position,spicialist,bio,experince,skill,project){
    this.name=name;
    this.position = position;
    this.spicialist = spicialist;
    this.bio = bio;
    this.Experince = experince;
    this.Skill = skill;
    this.Project = project;
}
var spical = ["FRONT-END", "BACK-END"];
var BIO = "enas a full stack developer , i have skills in a front end (HTML5 , CSS3, BOOTSTRAP , JAVASCRIPT , ABI , REACT) and i have skills in backend (PHP , LARAVEL  , SQL).";
var experinceList = ["worked in Wac- Palestine", "training with X-team" , "Freelancer in Upwork"];
var skills=[
    {
        name:"html",
        rang:"90%",
    },
    {
        name:"css",
        rang:"80%"
    },
    {
        name:"js",
        rang:"65%",
    },
    {
        name:"php",
        rang:"60%",
    }
];
var projects=[
    {
        imgg:"img/kudzoc.PNG",
        title:"KUDZOKA",
        description:"You sell it we Deliver it Leave the logistics to us , while you focus on your customers & your products.",
        linkk:"https://kudzoka-eta.vercel.app/",
    },
    {
        imgg:"img/store.PNG",
        title:"E-commerce",
        description:"Lorem ipsum dolor sit amet , consectetur adipiscing elit. Phasellus at iaculis quem. Integer accumsan tincidunt fringilla.",
        linkk:"https://store-two-omega.vercel.app/"
    },
    {
        imgg:"img/task.PNG",
        title:"Daily website",
        description:"Store a task you want to be done in table and set the done task in another table.",
        linkk:"https://dailytaskform.vercel.app/",
    }
];
var pro = new Programmer("ENAS ZAID", "SOFTWARE ENGINER (FULL STACK DEVELOPER)", spical,BIO, experinceList,skills,projects);

var Name = pro.name;
document.getElementById("name").innerHTML=Name;

var Position = pro.position;
document.getElementById("position").innerHTML=Position;

var Spical = pro.spicialist;
var spicalList = ''
for(var i =0 ; i < Spical.length ; i++){
    spicalList += '<li>'+Spical[i] +'</li>';
    document.getElementById("spical").innerHTML = spicalList;
}

var Bio =pro.bio;
document.getElementById("bio").innerHTML = Bio;

var exper = pro.Experince;
var expertext = ' ';
for (var i = 0 ; i<exper.length ; i++){
    expertext += '<li><i class="fas fa-check"></i>'+exper[i]+'</li>';
    document.getElementById("experince").innerHTML =expertext;
 }

var skillist = pro.Skill;

var skltext="";
for(var i in skillist){
    var n = skillist[i].name;
    var r = skillist[i].rang;
    var classs = "skills" + n;
    var pr = "<p>"+n+"</p><div class=skills id= "+n+">"+r+"</div>";
    skltext += pr;
    document.getElementById('skill').innerHTML=skltext;
    
}


var projectlist = pro.Project;
var projectext=" "
for(var i in projectlist){
    projectext += '<div class="card"><img class="card-img-top" src='+ projectlist[i].imgg +' alt="Card image cap">';
    projectext += '<div class="card-body"><h5 class="card-title">'+projectlist[i].title+'</h5>';
    projectext += '<p class="card-text">'+projectlist[i].description+'</p></div>';
    projectext += '<div class="card-footer"><a class="btn btn-outline-dark" href='+ projectlist[i].linkk+'>View</a></div></div>';
    document.getElementById("card").innerHTML=projectext;
}


                    //   
                    //   <div class="card-body">
                    //     <h5 class="card-title" id="titl">KUDZOKA</h5>
                    //     <p class="card-text">You sell it we Deliver it
                    //         Leave the logistics to us , while you focus on your
                    //         customers & your products.</p>
                    //   </div>
                    //   <div class="card-footer">
                    
                    //         <a class="btn btn-outline-dark">
                    //             View
                    //         </a>
                    
                    //   </div>
                    