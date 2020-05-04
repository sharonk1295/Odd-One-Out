// console.log('good luck')
// console.log($)


$(() => {
    // Variables
    const $openBtn = $('#lets-go');
    const $instructions = $('.instructions');
    const $closeBtn = $('#close-inst-btn');

    // Functions/ Event Handlers 
    const openInstructions = () => {
        // console.log('working')
        $instructions.css('display', 'block');
    }

    const closeInstructions = () => {
        // console.log('working');
        $instructions.css('display', 'none');
    }

    // Event Listeners
    $openBtn.on('click', openInstructions);
    $closeBtn.on('click', closeInstructions);

})