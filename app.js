(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button) {      //CHECKING FOR THE SPECIFIC BUTTON 
        button.addEventListener('click', function(e){   //CHECKING FOR CLICKS
            let value = e.target.dataset.num;     //GET INPUTS THROUGH DATA-NUM IN HTML PASSED TO THE VALUE VAR
            screen.value += value;          //ADD TO SCREEN
        })
    });


    equal.addEventListener('click', function(e) {
        if (screen.value === '') {      // IF SCREEN IS EMPTY
            screen.value = "Please enter";  //LET SCREEN REMAIN EMPTY
        }else{
            let answer = eval(screen.value);   //EVALUATE INPUT AND PASS TO "ANSWER" VAR
            screen.value = answer;
        }
    })


    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();