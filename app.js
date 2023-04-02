const box = document.querySelector('#rotate-box');
const box2 = document.querySelector('#rotate-box-2');
const data = document.getElementById('data');
const submitButton = document.querySelector('#submit-button');
console.log(box);
console.log(submitButton);

submitButton.addEventListener('click', function (event) {
    const min = 1;
    const max = 10;
    const randomInt = Math.floor(Math.random() * (max - min + 1));
    if (randomInt % 2 == 0) {
        box.style.opacity = 1;
        box2.style.opacity = 0;
        console.log("even", randomInt);
        event.preventDefault();
        box.classList.remove('right'); // remove existing rotation class
        void box.offsetWidth; // trigger reflow
        box.classList.add('right'); // add rotation class again
    }
    
    else {
        box2.style.opacity = 1;
        box.style.opacity = 0;
        console.log("odd", randomInt);
        event.preventDefault();
        box2.classList.remove('left'); // remove existing rotation class
        void box.offsetWidth; // trigger reflow
        box2.classList.add('left'); // add rotation class again
    }

/*     const formData = new FormData(document.querySelector('#From-box'));

    // create an AJAX request to submit the form data to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'connect.php');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(formData); */
    data.value= '';
   
});

