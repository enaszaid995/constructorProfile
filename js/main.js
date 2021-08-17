function Programmer(name, position,spicialist,bio,experince,skill){
    this.name=name;
    this.position = position;
    this.spicialist = spicialist;
    this.bio = bio;
    this.Experince = experince;
    this.Skill = skill;
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
var pro = new Programmer("ENAS ZAID", "SOFTWARE ENGINER (FULL STACK DEVELOPER)", spical,BIO, experinceList,skills);

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