// var header = document.getElementById('header');
// console.log(header.innerHTML);
// header.innerHTML = 'JSedit this content';


//     console.log('Hello World!');
//     var num1 = document.getElementById('num1').value;
//     var num2 = document.getElementById('num2').value;
//     var reasult = document.getElementById('reasult');
//     var sumation = parseInt(num1) + parseInt(num2);
//     alert('sumation is :' + sumation);
//     console.log(sumation);
//     reasult.innerHTML = sumation;
// }




var form = document.getElementById('form');
console.log(form);

var selectedOperstion = document.getElementById('selectedOperstion');
function myFunction(){

}

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(selectedOperstion.value);
    //    myFunction();
    console.log('Hello World!');
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var reasult = document.getElementById('reasult');
    switch (selectedOperstion) {
    case '+':
            var sumation = parseInt(num1) + parseInt(num2);

        break;
    case '-':
            var sumation = parseInt(num1) - parseInt(num2);

        break;
    case '*':
            var sumation = parseInt(num1) * parseInt(num2);

        break;
    case '/':
            var sumation = parseInt(num1) / parseInt(num2);

        break;
    default:
        break;
}
    alert('sumation is :' + sumation);
    console.log(sumation);
    reasult.innerHTML = sumation;
})




