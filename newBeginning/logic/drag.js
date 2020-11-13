var draggables = document.getElementsByClassName("draggable");
var closeButtons = document.getElementsByClassName("close-btn")

var activeDraggable = null;
var active = false;

for (let i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener("touchstart", dragStart, false);
    draggables[i].addEventListener("touchend", dragEnd, false);
    draggables[i].addEventListener("touchmove", drag, false);

    draggables[i].addEventListener("mousedown", dragStart, false);
    draggables[i].addEventListener("mouseup", dragEnd, false);
    draggables[i].addEventListener("mousemove", drag, false);
    draggables[i].addEventListener("mouseleave", dragEnd, false);

    closeButtons[i].addEventListener("click", () => {
        draggables[i].classList.add("window--hidden");

    }, false);

}

function dragStart(e) {

    //ELEMENT CONTAINING THE 'draggable' CLASS, AKA ELEMENT CONTAINING THE EVENTLISTENER
    activeDraggable = e.currentTarget;

    //CURRENTLY CLICKED ITEM
    clickedItem = e.target;

    //IF THE ELEMENT WITH THE LISTENER IS THE SAME AS THE ELEMENT BEING CLICKED ON
    if (activeDraggable == clickedItem) {
        active = true;

        if (!activeDraggable.lastX) {
            activeDraggable.lastX = 0;
        }

        if (!activeDraggable.lastY) {
            activeDraggable.lastY = 0;
        }

        if (e.type === "touchstart") {
            //SET INITIAL POSITION BASED ON CURRENT TOUCH POSITION MINUS LAST POSITION
            activeDraggable.initialX = e.touches[0].clientX - activeDraggable.lastX;
            activeDraggable.initialY = e.touches[0].clientY - activeDraggable.lastY;
        } else {
            //SET INITAL POSITION BASED ON CURRENT MOUSE POSITION MINUS THE ELEMENTS LAST POSITION
            activeDraggable.initialX = e.clientX - activeDraggable.lastX;
            activeDraggable.initialY = e.clientY - activeDraggable.lastY;
        }

        //SET ALL DRAGGABLE ZINDEX TO 0
        for (let draggable of draggables) {
            draggable.style.zIndex = 0;
        }
        //SET ACTIVE DRAGGABLE ZINDEX TO 1, SO THAT IT IS ON TOP OF ALL OTHERS
        activeDraggable.style.zIndex = 1;
    }
}

function drag(e) {

    //PREVENTS DEFAULT BEHAVIOUR SUCH AS DRAGGING IMAGES AND SELECTING TEXT W/E
    e.preventDefault();

    if (active) {
        if (e.type === "touchmove") {
            //SET CURRENT POSITION BASED ON TOUCH POS MINUS INITIAL POSITION
            activeDraggable.currentX = e.touches[0].clientX - activeDraggable.initialX;
            activeDraggable.currentY = e.touches[0].clientY - activeDraggable.initialY;
        } else {
            //SET CURRENT POSITION BASED ON MOUSE POS MINUS INITIAL POSITION
            activeDraggable.currentX = e.clientX - activeDraggable.initialX;
            activeDraggable.currentY = e.clientY - activeDraggable.initialY;
        }

        //SET LAST POSITION EQUAL TO CURRENT POSITION
        //So that our element remembers where it was last.
        activeDraggable.lastX = activeDraggable.currentX;
        activeDraggable.lastY = activeDraggable.currentY;

        //USE CSS TO MOVE THE ELEMENT BASED ON HOW MUCH WE MOVED IT
        activeDraggable.style.transform = "translate(" + activeDraggable.currentX + "px, " + activeDraggable.currentY + "px)";
    }
}

function dragEnd(e) {
    //On release set initial position to the position where we left the thing
    active = false;
    activeDraggable = null;

}