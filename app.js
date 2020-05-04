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
    

    // Functions/ Event Handlers 
    const openInstructions = () => {
        // console.log('working')
        $instructions.css('display', 'block');
    }

    const goToCategories = () => {
        // console.log('categories')
        $categoryPage.css('display', 'block');
    }

    const closeInstructions = () => {
        // console.log('working');
        $instructions.css('display', 'none');
        goToCategories();
    }
    const openTheOffice = () => {
        //console.log('working');
        $officeGame.css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const openMarvel = () => {
        // console.log('working')
        $marvelGame.css('display', 'block');
        $categoryPage.css('display', 'none');
    }
    const openFrozen = () => {
        //console.log('working')
        $('.frozen-film').css('display', 'block');
        $categoryPage.css('display', 'none');
    }

    // Event Listeners
    $openBtn.on('click', openInstructions);
    $closeBtn.on('click', closeInstructions);
    $officeBtn.on('click', openTheOffice);
    $marvelBtn.on('click', openMarvel);
    $('#frozen').on('click', openFrozen);

})