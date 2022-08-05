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
"iframe"];
let coursesParent = document.querySelector(".courses-parent");


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
        let courseTagsShar7 = document.createElement("aside");
        coursesParent.appendChild(courseTagsShar7);
        courseTagsShar7.classList.add("shar7ElTags");
    }
}
/*
    aside.shar7ElTags -> right-parent
        div.tag-container
            header.esmElTag
            p.tfaselElTag
            span.exampleHeader
            div.exampleParent
                span.html-tag
                    span.head-tag
                        span.meta-tag
                        span.title-tag
                    span.head-tag-close
                    span.body-tag
                        span.paragraph-tag
                    span.body-tag-close
                span.html-tag-close
*/
let htmlTags = document.querySelectorAll(".htmlTags");
let shar7ElTags = document.querySelector(".shar7ElTags");

let tagContainer = document.createElement('div');
let esmElTag = document.createElement("header");
let tagDetails = document.createElement("p");
let exampleHeader = document.createElement("span");
let exampleParent = document.createElement("div");

exampleHeader.textContent = "example";
exampleParent.innerHTML = "<span class='html-tag'> <i class='fas fa-angle-left'></i>html lang='en'<i class='fas fa-angle-right'></i></span> <span class='head-tag'><i class='fas fa-angle-left'></i>head<i class='fas fa-angle-right'></i></span> <span class='title-tag'><i class='fas fa-angle-left'></i>title<i class='fas fa-angle-right'></i></span>example <span class='title-tag-close'><i class='fas fa-angle-left'></i>/title<i class='fas fa-angle-right'></i></span><span class='meta-tag'><i class='fas fa-angle-left'></i>meta charset='UTF-8'<i class='fas fa-angle-right'></i></span> <span class='head-tag-close'> <i class='fas fa-angle-left'></i>/head<i class='fas fa-angle-right'></i></span> <span class='body-tag'><i class='fas fa-angle-left'></i>body<i class='fas fa-angle-right'></i></span><span class='body-tag-close'><i class='fas fa-angle-left'></i>/body<i class='fas fa-angle-right'></i>";
exampleParent.style.cssText="display:flex;flex-direction:column;background:#253938;color:#EEE;";


tagContainer.classList.add("tag-container");
esmElTag.classList.add("esmElTag");
tagDetails.classList.add("tfaselElTag");
exampleHeader.classList.add("exampleHeader");
exampleParent.classList.add("exampleParent");

tagContainer.appendChild(esmElTag);
tagContainer.appendChild(tagDetails);
tagContainer.appendChild(exampleHeader);
tagContainer.appendChild(exampleParent);
shar7ElTags.appendChild(tagContainer);

htmlTags.forEach((tag,index)=>{
    htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-down'></i>"
    tag.textContent = htmlTagText[index];
    htmlTags[0].onclick = ()=>{
        for(let x = 1; x < htmlTags.length; x++){
            htmlTags[x].classList.toggle("hide");
            if(htmlTags[x].classList.contains("hide")){
                htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-right'></i>";
            }else{
                htmlTags[0].innerHTML = htmlTagText[0] + " <i class='fas fa-angle-down'></i>"
            }
        }
    }
    tag.onclick = ()=>{
        esmElTag.textContent = tag.textContent;
        
    }
});
