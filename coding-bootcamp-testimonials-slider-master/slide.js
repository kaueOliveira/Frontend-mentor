const divTanya = document.getElementById("divTanya")
const divJohn = document.getElementById("divJohn")

let index = 0;

function next_slide (i) {
    index = index + i
    if (index == 1) {
        divTanya.className = "desaparecer fade"
        divJohn.className = "fade"
        
    } else { 
        index = 0
        previous_slide (0);
    }
}

function previous_slide (i) {
    index = index + i
    if (index == 0) {
        divTanya.className = "fade"
        divJohn.className = "desaparecer fade"
    } else {
        index = 0
        next_slide(1)
    }
}