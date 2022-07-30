let localStorageCourseName = localStorage.getItem("courseName");
let localStoragechildOneCourses = localStorage.getItem("childOneCourses");
let navBar = document.querySelector(".navigator-bar");
let leftNavBar = document.querySelector(".left-navBar");

if(localStorageCourseName === null){
    for(let i = 1; i < navBar.children[1].children.length; i++){
        let x = new RegExp(navBar.children[1].children[i].textContent,"i");
        if(localStoragechildOneCourses.search(x) !== -1){
            
            navBar.children[1].children[i].style.background="rgba(0,0,0,.8)";
            navBar.children[1].children[i].classList.add("active");
        }else{
            console.log("")
        }
    }
}else{
    for(let i = 1; i < navBar.children[1].children.length; i++){
        let x = new RegExp(navBar.children[1].children[i].textContent,"i");
        if(localStorageCourseName.search(x) !== -1){
            
            navBar.children[1].children[i].style.background="rgba(0,0,0,.8)";
            navBar.children[1].children[i].classList.add("active");
        }
    }
}

for(let i = 1; i < navBar.children[1].children.length; i++){
    if(navBar.children[1].children[i].textContent === "html"){
        let htmlCourseParent = document.createElement("div");
        htmlCourseParent.classList.add("htmlCourseParent")
        leftNavBar.appendChild(htmlCourseParent);
        for(let i = 0; i < 30; i++){
            let htmlCourseTags = document.createElement("p");
            htmlCourseParent.appendChild(htmlCourseTags);
        }
    }
}