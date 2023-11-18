import { changePage } from "../data/model.js";

function addEventListeners(){
  $(document).on('click', '.createAcc', function() {
    console.log("Button clicked!");
});
$(document).on('click', '.signup', function() {
  console.log("signup button clicked!");
});
}

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    $("#bread-crumb").html(``);
    changePage(hashTag, pageID);
    
}

function initSite(){
     $(window).on("hashchange", route)
     route();

}

$(document).ready(function () {
    
    initSite();
    addEventListeners();
});