let profileMenu = document.getElementById("profileMenu");
let profileImg = document.querySelector(".nav-profile-img");
let sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLink = document.getElementById("showMoreLink");

profileImg.addEventListener("click" , ()=>{
    profileMenu.classList.toggle("open-menu");
})

showMoreLink.addEventListener("click" , ()=>{
    sidebarActivity.classList.toggle("openActivity");
    if(sidebarActivity.classList.contains("openActivity")){
        showMoreLink.innerHTML = "Show Less <b>-</b>";
    }
    else{
        showMoreLink.innerHTML = "Show More <b>+</b>";
    }
})