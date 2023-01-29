var submit = document.querySelector(".submit");
var form=document.getElementById("form");
var element = form.elements;
var display = document.querySelector(".title");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var Email = document.createElement("div");
    var course = document.createElement("div");
    var id = document.createElement("div");
    var img = document.createElement("img");
    var skills = document.createElement("div");
   

    name.innerHTML="Name: "+element[0].value;
    Email.innerHTML="Email-d: "+element[3].value;
    course.innerHTML="Course: "+element[2].value;
    id.innerHTML="Website: "+element[1].value;
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[4].value !=""){
        img.src=i;
    }
    
    if(element[5].checked)
    {
        skills.innerHTML="Skills: HTML";
    }
    if(element[6].checked)
    {
        skills.innerHTML="Skills: CSS";
    }
    if(element[7].checked)
    {
        skills.innerHTML="Skills: JS";
    }
    if(element[5].checked && element[6].checked)
    {
        skills.innerHTML="Skills: HTML,CSS";
    }
    if(element[5].checked && element[7].checked)
    {
        skills.innerHTML="Skills: HTML,JS";
    }
    if(element[6].checked && element[7].checked)
    {
        skills.innerHTML="Skills: CSS,JS";
    }
    if(element[5].checked && element[6].checked && element[7].checked)
    {
        skills.innerHTML="SKILLS: HTML,CSS,JS";
    }

    div1.appendChild(name);
    div1.appendChild(Email);
    div1.appendChild(course);
    div1.appendChild(id);
    
    
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("title");
    
}