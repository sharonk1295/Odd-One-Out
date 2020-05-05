// console.log('good luck')
// console.log($)


$(() => {
    // ======== Variables =========
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
    const $backBtn7 = $('#back-btn7');

    

    // ========== Functions/ Event Handlers =========
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
    const openBritney = () => {
        $('.britney-songs').css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromBritneyToCat = () => {
        $('.britney-songs').css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const openCollaborations = () => {
        $('.collab').css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const returnFromCollabToCat = () => {
        $('.collab').css('display', 'none');
        $categoryPage.css('display', 'block');
    }
    const returnHome1 = () => {
        $('.win-game').css('display', 'none');
    }
    const returnHome2 = () => {
        $('.lose-game').css('display', 'none');
    }

    // ========= Event Listeners =========
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
    $('#britney').on('click', openBritney);
    $backBtn6.on('click', returnFromBritneyToCat);
    $('#featured').on('click', openCollaborations);
    $backBtn7.on('click', returnFromCollabToCat);

    // ======== Game Choices =========
    //office
    $('#chris').on('click', () => {
        $('.the-office').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $officeWrongChoice = $('.office-wrong')
    $officeWrongChoice.on('click', () => {
        $('.the-office').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })

    //marvel
    $('#batman').on('click', () => {
        $('.marvel-avengers').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $marvelWrongChoice = $('.marvel-wrong')
    $marvelWrongChoice.on('click', () => {
        $('.marvel-avengers').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })

    //frozen
    $('#tangled').on('click', () => {
        $('.frozen-film').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $frozenWrongChoice = $('.frozen-wrong')
    $frozenWrongChoice.on('click', () => {
        $('.frozen-film').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })

    //bts
    $('#sehun').on('click', () => {
        $('.BTS-members').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $btsWrongChoice = $('.bts-wrong')
    $btsWrongChoice.on('click', () => {
        //console.log('jungkook')
        $('.BTS-members').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })

    //britney
    $('#dualipa').on('click', () => {
        $('.britney-songs').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $britneyWrongChoice = $('.britney-wrong')
    $britneyWrongChoice.on('click', () => {
        $('.britney-songs').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })

    //collaborations
    $('#edsheeran').on('click', () => {
        $('.collab').hide();
        $('.win-game').show();
        setTimeout(returnHome1, 3000);
    });
    const $collabWrongChoice = $('.collab-wrong')
    $collabWrongChoice.on('click', () => {
        $('.collab').hide();
        $('.lose-game').css('display', 'block');
        setTimeout(returnHome2, 3000);
    })
})