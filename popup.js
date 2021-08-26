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

async function getInformation() {
    
    var fetchInformation = fetch('https://obscure-caverns-38495.herokuapp.com/')
    var res = await fetchInformation;

    var data = await res.json()

    return data;
}

async function updateInformation() {
    var data;
    var info;
    var loadedDOM;
    var loadingDOM;
    
    loadingDOM = document.querySelector('.loading');
    loadedDOM = document.querySelector('.loaded');
    
    console.log(1);
    data = await getInformation();
    info = data.number;
    console.log(2);

    loadingDOM.style.display = 'none';
    loadedDOM.style.display = 'block';    
}

document.addEventListener('DOMContentLoaded', hide)
updateInformation();

