// To hide and show the 2 main html elements in the popup
const cancelBtn = document.querySelector('.cancel-content-footer-one');
const exitBtn = document.querySelector('.exit-btn-two');
const pageTwo = document.querySelector('.two');
const pageOne = document.querySelector('.one');
const learnMoreBtn = document.querySelector('.learn-more-btn-footer-one');

function closePopup() {
    window.close();
}

function showMore() {
    pageTwo.className = 'two';
    pageOne.className = 'one hidden'

}

cancelBtn.addEventListener('click', closePopup);
exitBtn.addEventListener('click', closePopup);
learnMoreBtn.addEventListener('click', showMore);

async function getCurrentUrl(){
    var settings = { active: true, currentWindow: true};
    var query = chrome.tabs.query(settings);
    let res = await query;
    var url = res[0].url;
    return url;
}

async function hide(){
    var divOne = document.querySelector('#one')
    var currentPage = await getCurrentUrl();

    if (currentPage == 'https://paxful.com/') {
        console.log(currentPage);
        divOne.style.display = "none"
    } else {
        console.log("not the page");
    }
}

async function getFeedback(){
    var fetchFeedback = fetch('https://obscure-caverns-38495.herokuapp.com/')

    var res = await fetchFeedback;

    var data = await res.json();

    console.log(data);
}

document.addEventListener('DOMContentLoaded', hide)
getFeedback();

