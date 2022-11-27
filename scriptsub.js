const puppeteer = require('puppeteer');
const codeObj = require('./codes')

const email = "kevivaf508@charav.com";
const password = "3210546";
const loginLink = "https://www.hackerrank.com/auth/login"


const browserOpen = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

let page;

browserOpen.then(function (browser) {
    const pageArrpromise = browser.pages();
    return pageArrpromise;
}).then(function (browserPages) {
    page = browserPages[0];
    let hackerRankOpenPromise = page.goto(loginLink);
    return hackerRankOpenPromise;
}).then(function () {
    let elementWaitPromise = page.waitForSelector("input[id='input-1']", { visible: true });
    return elementWaitPromise;
}).then(function () {
    let emailIsEntered = page.type("input[id='input-1']", email, { delay: 50 });
    return emailIsEntered;
}).then(function () {
    let passwordIsEntered = page.type("input[type='password']", password, { delay: 50 });
    return passwordIsEntered;
}).then(function () {
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]', { delay: 50 });
    return loginButtonClicked;
}).then(function () {
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
    return clickOnAlgoPromise;
}).then(function () {
    let getToWarmUp = waitAndClick('input[value="warmup"]', page);
    return getToWarmUp;
}).then(function () {
    let elementWaitPromise = page.waitForSelector(".ui-btn.ui-btn-styled");
    return elementWaitPromise;
}).then(function () {
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-styled');
    return allChallengesPromise;
}).then(function (questionArr) {
    // console.log('number:', questionArr.length);
    let questionWillBeSolved = questionSolver(page, questionArr[0], codeObj.answers[0]);
    return questionWillBeSolved;
})

function waitAndClick(selector, cpage) {
    return new Promise(function (resolve, reject) {
        let waitForModelPromise = cpage.waitForSelector(selector);
        waitForModelPromise.then(function () {
            let clickModel = cpage.click(selector);
            return clickModel;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            console.log(err);
            reject();
        })
    })
}

function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function () {
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return EditorInFocusPromise;
        }).then(function(){
            return waitAndClick('.custom-select.select-language', page);
        }).then(function(){
            return page.type(".custom-select.select-language", "Java 8", {delay:10});
        }).then(function(){
            return page.keyboard.press("Enter");
        }).then(function () {
            return waitAndClick('.checkbox-input', page);
        }).then(function () {
            return page.waitForSelector('textarea.custominput', page);
        }).then(function () {
            return page.type('textarea.custominput', answer, { delay: 10 });
        }).then(function () {
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function () {
            let AisPressed = page.keyboard.press('A', { delay: 100 });
            return AisPressed;
        }).then(function () {
            let XisPressed = page.keyboard.press('X', { delay: 100 });
            return XisPressed;
        }).then(function () {
            let ctrlIsUnPressed = page.keyboard.up('Control');
            return ctrlIsUnPressed;
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return mainEditorInFocus
        }).then(function () {
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function () {
            let AisPressed = page.keyboard.press('A', { delay: 100 });
            return AisPressed;
        }).then(function () {
            let VisPressed = page.keyboard.press('V', { delay: 100 });
            return VisPressed;
        }).then(function () {
            let ctrlIsUnPressed = page.keyboard.up('Control');
            return ctrlIsUnPressed;
        }).then(function(){
            return page.click('.hr-monaco__run-code', {delay:50});
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}