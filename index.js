document.title = "Counter App"

const count = document.getElementById("count");
const err = document.getElementById("err")

let counter = 0;

const increment = () => {
    
    if (counter <10) {
        counter += 1
        count.textContent = counter
        err.style.Color ="black"
        
    }else {
        counter = 10
        err.textContent ="Counter cannot be greater than 10"
        err.style.Color ="red"
        count.style.color = 'red'
    }
}

const decrement = () => {
    if (counter > 0) {
        counter -= 1
        count.textContent = counter
        err.style.Color ="black"
        count.style.color = 'black'
    }else {
        counter = 0
        err.textContent ="Counter cannot be lesser than 10"
       
        
    }
    
}
