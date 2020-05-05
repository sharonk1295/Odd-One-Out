// console.log('good luck')
// console.log($)


$(() => {
    // Variables
    const $openBtn = $('#lets-go');
    const $instructions = $('.instructions');
    const $closeBtn = $('#close-inst-btn');
    const $categoryPage = $('.main');
    const $officeBtn = $('#office');
    const $officeGame = $('.the-office');
    const $marvelBtn = $('#marvel');
    const $marvelGame = $('.marvel-avengers');
    const $backBtn1 = $('#back-btn1');
    const $backBtn2 = $('#back-btn2');
    const $backBtn3 = $('#back-btn3');
    const $backBtn4 = $('#back-btn4');
    const $backBtn5 = $('#back-btn5');
    const $backBtn6 = $('#back-btn6');

    

    // Functions/ Event Handlers 
    const openInstructions = () => {
        // console.log('working')
        $instructions.css('display', 'block');
    }
    const goToCategories = () => {
        // console.log('working');
        $instructions.css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const returnFromCatToInst = () => {
        $categoryPage.css('display', 'none');
        $instructions.css('display', 'block');
    }
    const openTheOffice = () => {
        //console.log('working');
        $officeGame.css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromOfficeToCat = () => {
        //console.log('working');
        $officeGame.css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const openMarvel = () => {
        // console.log('working')
        $marvelGame.css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromMarvelToCat = () => {
        //console.log('working');
        $marvelGame.css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const openFrozen = () => {
        //console.log('working')
        $('.frozen-film').css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromFrozenToCat = () => {
        $('.frozen-film').css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const openBTS = () => {
        $('.BTS-members').css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromBtsToCat = () => {
        $('.BTS-members').css('display', 'none');
        $categoryPage.css('display', 'block');
    }

    // Event Listeners
    $openBtn.on('click', openInstructions);
    $closeBtn.on('click', goToCategories);
    $backBtn1.on('click', returnFromCatToInst);
    $officeBtn.on('click', openTheOffice);
    $backBtn2.on('click', returnFromOfficeToCat);
    $marvelBtn.on('click', openMarvel);
    $backBtn3.on('click', returnFromMarvelToCat);
    $('#frozen').on('click', openFrozen);
    $backBtn4.on('click', returnFromFrozenToCat);
    $('#BTS').on('click', openBTS);
    $backBtn5.on('click', returnFromBtsToCat);

})