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
    console.log(res);
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
    try {
        var fetchInformation = fetch('http://localhost:3000/trading-behaviours/deposit-amount');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getTradingAmount() {
    try {
        var fetchInformation = fetch('http://localhost:3000/trading-behaviours/trading-amount');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getAskingPrice() {
    try {
        var fetchInformation = fetch('http://localhost:3000/trading-behaviours/asking-price');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getDisputeRate() {
    try {
        var fetchInformation = fetch('http://localhost:3000/trading-behaviours/dispute-rate');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getTradeVelocity() {
    try {
        var fetchInformation = fetch('http://localhost:3000/trading-behaviours/trade-velocity');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getAccountAge() {
    try {
        var fetchInformation = fetch('http://localhost:3000/account-information/account-age');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getUsedDevices() {
    try {
        var fetchInformation = fetch('http://localhost:3000/account-information/used-devices');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getQuickFeedback() {
    try {
        var fetchInformation = fetch('http://localhost:3000/account-information/quick-feedback');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getIpAddresses() {
    try {
        var fetchInformation = fetch('http://localhost:3000/account-information/ip-addresses');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}

async function getLoginRegion() {
    try {
        var fetchInformation = fetch('http://localhost:3000/account-information/login-region');
        var res = await fetchInformation;

        if (res.status == 500){
            return false;
        }

        var json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
}


function hideLoadingShowLoaded(card){
    var loadedCard;
    var loadingCard;

    loadingCard = card.querySelector('.loading');
    loadedCard = card.querySelector('.loaded');

    loadingCard.style.display = 'none';
    loadedCard.style.display = 'block';    
    loadingCard.style.display = 'none';
    loadedCard.style.display = 'block'; 
}

async function updateDepositAmount(card) {
    var json;
    var num;
    var cardNumber;

    cardNumber = card.querySelector('.number');

    json = await getDepositAmount();
    num = json.number;
    cardNumber.innerHTML = num;
   
    hideLoadingShowLoaded(card);
}

async function updateTradingAmount(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getTradingAmount();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateAskingPrice(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');


    json = await getAskingPrice();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateDisputeRate(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getDisputeRate();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);      
}

async function updateTradeVelocity(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getTradeVelocity();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);      
}

async function updateAccountAge(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getAccountAge();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateUsedDevices(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getUsedDevices();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateQuickFeedback(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getQuickFeedback();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateIpAddresses(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getIpAddresses();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);    
}

async function updateLoginRegion(card) {
    var json;
    var num;
    var cardNumber;
    
    cardNumber = card.querySelector('.number');

    json = await getLoginRegion();
    num = json.number;
    cardNumber.innerHTML = num;

    hideLoadingShowLoaded(card);     
}

async function updateAllCards() {
    var cardList;

    cardList = document.querySelectorAll('.card');

    updateDepositAmount(cardList[0]);
    updateTradingAmount(cardList[1]);
    updateAskingPrice(cardList[2]);
    updateDisputeRate(cardList[3]);
    updateTradeVelocity(cardList[4]);

    updateAccountAge(cardList[5]);
    updateUsedDevices(cardList[6]);
    updateQuickFeedback(cardList[7]);
    updateIpAddresses(cardList[8]);
    updateLoginRegion(cardList[9]);
}

updateAllCards();

document.addEventListener('DOMContentLoaded', hideDivOne);



async function sendMessageToContentScript() {
    var settings = { active: true, currentWindow: true};
    var res = chrome.tabs.query(settings);
    const tabs = await res;
    const popupTab = tabs[0];

    chrome.tabs.sendMessage(popupTab.id, {msg: 'get-username-from-popup'}, function(response){
        updateUsername(response.username);
        updateProfileImg(response.profileImg);
    })
}

function updateUsername(username) {
    document.querySelector('body > div.two > div.profile > div.info-profile > span.username-info-profile').innerHTML = username;
}

function updateProfileImg(profileImg) {
    console.log(profileImg);
    document.querySelector('body > div.two > div.profile > div.profile-image-container > img.image-profile').src = profileImg;
}

sendMessageToContentScript();

