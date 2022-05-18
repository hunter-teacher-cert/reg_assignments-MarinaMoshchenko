let clickedCard = null;
let preventClick = false; 
let matchFound = 0; 

function onCardClicked(input) {
    const target = input.currentTarget;	//current card, event handler. On any event, chosen card will be stared as "target"

    if (preventClick ||
        target === clickedCard ||
        target.className.includes('matched')) {
            return; 
    }

    target.className = target.className	//we will modify active classes as follow:
	 .replace('color-hidden','')	//replaces the class "color-hidden" with empty string
     .trim(); //remove whitespace from both sides of a string
    target.className += ' matched'; //add an active class "matched" to previous active classes

    if (!clickedCard) { //if card is not clicked before
        clickedCard = target; 
    } 
    else if (clickedCard) {
        if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')){
            preventClick = true; 
            setTimeout (() => {
			clickedCard.className = clickedCard.className.replace('matched', '').trim() +
                ' color-hidden'; 
			target.className = 
            target.className.replace('matched', '').trim() +
                ' color-hidden';
			clickedCard = null; 
			preventClick = false; 
            }, 500);
        } else {
            matchFound++; 
            clickedCard = null;
            if (matchFound === 2) {
                alert('YOU WIN'); 
            }
        }
    }
}


/* INSTRUCTIONS. FINISH THE CODE THAT:
1. The game will have the board of your selected dimensions (4x4, 5x5, 3x4). Make sure you use even number of cards.
2. The game will have title and user-friendly instructions.
3. The counter of step is being added and display at the end of the game. Example "You win the game with 14 moves"

CHALLENGE 1. Modify the code so that the cards would display emojis as literal when flipped (You may use https://emojipedia.org/)
CHALLENGE 2. Modify the code so that the cards would display images when flipped
*/

