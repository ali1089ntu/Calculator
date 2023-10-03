
let string = '';
let button1 = document.getElementsByClassName ("btn1");
let span1 = document.getElementById ("spn1");

let arr = Array.from(button1);


arr.forEach (myfun =>{

    myfun.addEventListener ("click" , (e) =>{
        if (e.target.innerHTML == '1'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '2'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '3'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '4'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '5'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '6'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '7'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '8'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '9'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '0'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '+'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '-'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '/'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '*'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '.'){
            string += e.target.innerHTML;
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == 'AC'){
            string = '';
            span1.innerHTML = string;
        }

        if (e.target.innerHTML == '='){
            string = eval(string);
            span1.innerHTML = string;
        }
        
        if (e.target.innerHTML == 'DEL'){
            string = string.substring (0 , string.length-1);
            span1.innerHTML = string;
        }
    });
});


