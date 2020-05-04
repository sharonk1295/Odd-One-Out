// console.log('good luck')
// console.log($)


$(() => {
    // Variables
    const $openBtn = $('#lets-go');
    const $instructions = $('.instructions');
    const $closeBtn = $('#close-inst-btn');
    const $categoryPage = $('.main');

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

    // Event Listeners
    $openBtn.on('click', openInstructions);
    $closeBtn.on('click', closeInstructions);

})