let localStorageCourseName = localStorage.getItem("courseName");
let localStoragechildOneCourses = localStorage.getItem("childOneCourses");
let navBar = document.querySelector(".navigator-bar");
let leftNavBar = document.querySelector(".left-navBar");

if(localStorageCourseName === null){
    for(let i = 1; i < navBar.children[1].children.length; i++){
        let x = new RegExp(navBar.children[1].children[i].textContent,"i");
        if(localStorageCourseName.search(x) !== -1){
            navBar.children[1].children[i].style.background="rgba(85, 85, 85)";
            navBar.children[1].children[i].classList.add("active");

        }else{
            console.log("")
        }
    }
}else{
    for(let i = 1; i < navBar.children[1].children.length; i++){
        let x = new RegExp(navBar.children[1].children[i].textContent,"i");
        if(localStorageCourseName.search(x) !== -1){
            
            navBar.children[1].children[i].style.background="rgba(85, 85, 85)";
            navBar.children[1].children[i].classList.add("active");
        }
    }
}

let htmlTagText = ["intro to html",
"head",
"meta",
"link",
"style",
"body",
"heading",
"header",
"paragraph",
"div",
"images",
"table",
"lists",
"forms",
"anchors",
"artical",
"aside",
"span",
"icons",
"mark",
"blockquote",
"sup",
"sub",
"video",
"audio",
"iframe"]
for(let i = 1; i < navBar.children[1].children.length; i++){
    if(navBar.children[1].children[i].textContent === "html"){
        let htmlCourseParent = document.createElement("div");
        htmlCourseParent.classList.add("htmlCourseParent")
        leftNavBar.appendChild(htmlCourseParent);
        for(let i = 0; i < htmlTagText.length; i++){
            let htmlCourseTags = document.createElement("p");
            htmlCourseParent.appendChild(htmlCourseTags);
            htmlCourseTags.classList.add("htmlTags");
        }
    }
}
let htmlTags = document.querySelectorAll(".htmlTags");
htmlTags.forEach((tag,index)=>{
    htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-right'></i>"
    tag.textContent = htmlTagText[index];
    htmlTags[0].onclick = ()=>{
        for(let x = 1; x < htmlTags.length; x++){
            htmlTags[x].classList.toggle("hide");
            if(htmlTags[x].classList.contains("hide")){
                htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-down'></i>";
            }else{
                htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-right'></i>"
            }
        }
    }
})  