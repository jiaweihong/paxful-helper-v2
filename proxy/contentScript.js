chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

    if (message.msg == 'get-username-from-popup') {
        const username = getUsername();
        const profileImg = getProfileImg();

        sendResponse({
            username: username,
            profileImg: profileImg
        })
    }
})

function getUsername() {
    const username = document.querySelector('#ViewOffer > div > section > div:nth-child(1) > div:nth-child(2) > div > div.ViewOfferOwner_row__tteL0.pt-1.pt-lg-4.pb-4.m-xs-0 > div > div.d-flex.flex-column.ml-3 > div.d-flex.align-items-center.mb-md-2 > a.label-large.font-weight-semibold.text-decoration-none.text-gray-900.d-flex.align-items-center').innerText;

    return username;
}

function getProfileImg() {
    const profileImg = document.querySelector('#ViewOffer > div > section > div:nth-child(1) > div:nth-child(2) > div > div.ViewOfferOwner_row__tteL0.pt-1.pt-lg-4.pb-4.m-xs-0 > div > div.d-inline-block > div > div > div > img').src;
    
    return profileImg;
}