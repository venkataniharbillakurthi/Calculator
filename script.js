function display(val){
    let d = document.getElementById('button');
    d.value= d.value+val
}

function clear_screen(){
    window.location = "index.html"
}

function calculate() {
    let input = document.getElementById('button');
    let result = input.value;

    try {
        input.value = eval(result);
    } catch (error) {
        input.value = 'Error';
    }
}


function backspace() {
    let input = document.getElementById('button');
    input.value = input.value.slice(0, -1); 
}
