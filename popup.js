// To hide and show the 2 main html elements in the popup
const cancelBtn = document.querySelector('.cancel-content-footer-one');
const exitBtn = document.querySelector('.exit-navbar-two');
const pageTwo = document.querySelector('.two');
const pageOne = document.querySelector('.one');
const learnMoreBtn = document.querySelector('.learn-more-btn-footer-one');

function closePopup() {
    window.close();
}

function showMore() {
    pageTwo.style.display = 'block';
    pageOne.style.display = 'none'

}

cancelBtn.addEventListener('click', closePopup);
exitBtn.addEventListener('click', closePopup);
learnMoreBtn.addEventListener('click', showMore);

async function getCurrentPageUrl(){
    var settings = { active: true, currentWindow: true};
    var query = chrome.tabs.query(settings);
    let res = await query;
    var url = res[0].url;
    return url;
}

async function hideDivOne(){
    var divOne = document.querySelector('.one')
    var currentPage = await getCurrentPageUrl();

    if (currentPage == 'https://paxful.com/') {
        divOne.style.display = "none"
    } else {
        console.log("not the page");
    }
}

async function getDepositAmount() {
    var fetchInformation = fetch('http://localhost:3000/trading-behaviours/used-devices');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getTradingAmount() {
    var fetchInformation = fetch('http://localhost:3000/trading-behaviours/trading-amount');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getAskingPrice() {
    var fetchInformation = fetch('http://localhost:3000/trading-behaviours/asking-price');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getDisputeRate() {
    var fetchInformation = fetch('http://localhost:3000/trading-behaviours/dispute-rate');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getTradeVelocity() {
    var fetchInformation = fetch('http://localhost:3000/trading-behaviours/trade-velocity');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getAccountAge() {
    var fetchInformation = fetch('http://localhost:3000/account-information/account-age');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getUsedDevices() {
    var fetchInformation = fetch('http://localhost:3000/account-information/used-devices');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getQuickFeedback() {
    var fetchInformation = fetch('http://localhost:3000/account-information/quick-feedback');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getIpAddress() {
    var fetchInformation = fetch('http://localhost:3000/account-information/ip-addresses');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function getLoginRegion() {
    var fetchInformation = fetch('http://localhost:3000/account-information/legion-region');
    var res = await fetchInformation;
    var data = await res.json();
    return data;
}

async function updateInformation() {
    var data;
    var info;
    var loadedDOMList;
    var loadingDOMList;
    
    loadingDOMList = document.querySelectorAll('.loading');
    loadedDOMList = document.querySelectorAll('.loaded');

    data = await getAskingPrice();
    info = data.number;

    loadingDOMList[0].style.display = 'none';
    loadedDOMList[0].style.display = 'block';    
    loadingDOMList[1].style.display = 'none';
    loadedDOMList[1].style.display = 'block';    
}

updateInformation();

document.addEventListener('DOMContentLoaded', hideDivOne);

