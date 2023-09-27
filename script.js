//Declarations

const starContainer=document.getElementById("star_container");
const allStars=starContainer.children; // Here it will not traverse whole DOM, it already has access to starContainer's children. Hence this is optimized.
const rating=document.getElementById("count");
let starRating;
starContainer.addEventListener("click",handleClickRating);
starContainer.addEventListener("mouseover",handleHoverRating);
starContainer.addEventListener("mouseleave",handleLeaveRating);


function handleClickRating(e){
    starRating=e.target.getAttribute("idx");
    rating.innerText=starRating;
    console.log(starRating);
    fillColor(starRating)
}

function fillColor(idx){
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("yellow")
    }

    for(let i=0;i<idx;i++){
        allStars[i].classList.add("yellow")
    }
}

function handleHoverRating(e){
    let starRating=e.target.getAttribute("idx");
    fillColor(starRating);
}

function handleLeaveRating(e){
    fillColor(starRating);
}
