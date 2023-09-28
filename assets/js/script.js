// variables

//Quiz Questions
var html_questions = ["1", "2", "3", "4", "5", "6", "7", "8", "9","10"]

//Score Tracker
var correct_answers = 0;

//Stores the Combo of user inputed questions
var user_input = [];

//Tracks the Question the User is on
var question_number = 0;

//stores information on questions so players can go back to previously answered question
var question_zero = [];
var question_one = [];
var question_two=[];
var question_three=[];
var question_four=[];
var question_five=[];
var question_six=[];
var question_seven=[];
var question_eight=[];
var question_nine=[];

//clock variables

var time_left = 0;
var clock = document.getElementById('timer');
var user_choice = 0;

const quiz_button1 = document.querySelector('#one');
//Functions Here

//Takes the question from the area and makes it a string
function array_to_string(a){
    a = a.toString();
    a = a.replace(/\,/g,'');
    query.innerText = a;
}
//problem is you made them buttons -- turn them into checkboxes
//Answer Key
function answer_key(a){

    

    if (a === "1"){
        one.innerText = "Hypertext Markup Language";
        two.innerText = "Hypertense Markdown Language";
        three.innerText = "Hometext Manager Language";
        four.innerText = "Hundredtype Messenger Language";

        
        
        var quiz_button1.addEventListener('click', function() {
            correct_answers++;
            alert("this is 1" + correct_answers);
        });
    }
    else if (a === "2"){
        one.innerText = "<split>";
        two.innerText = "<br>";
        three.innerText = "<return>";
        four.innerText = "<src>";

        const quiz_button2 = document.querySelector('#two');
        quiz_button2.addEventListener('click', function() {
            correct_answers++;
            alert( "answers" + correct_answers) ;           
        });
    }
    else if (a === "3"){
        one.innerText = "###";
        two.innerText = "//";
        three.innerText = "<!--->";
        four.innerText = "/**/";

        const quiz_button3 = document.querySelector('#three');
        quiz_button3.addEventListener('click', function() {
            correct_answers++;
            alert("answers" + correct_answers);           
        });
    }
    else if (a === "4"){
        one.innerText = "<a></a>";
        two.innerText = "href=' '";
        three.innerText = "src=' '";
        four.innerText = "url = ''";

        // const quiz_button4 = document.querySelector('#one');
        quiz_button1.addEventListener('click', function() {
            correct_answers++;
            alert("answers" + correct_answers);  
        });
    }
    else if (a === "5"){
        one.innerText = "Styles the page";
        two.innerText = "Stores user information";
        three.innerText = "It stores your header and nav";
        four.innerText = "Contains metadata";

        const quiz_button5 = document.querySelector('#four');
        quiz_button5.addEventListener('click', function() {
            correct_answers++;
            alert("answers " + correct_answers);  

        });

    }
    // else if (a === "6"){
    //     one.innerText = "Makes images load better";
    //     two.innerText = "Improves accessibility and SEO";
    //     three.innerText = "Improves rendering of images";
    //     four.innerText = "It is a class that can be altered";

    //     var quiz_button6 = document.querySelector('#two');
    //     quiz_button6.addEventListener('click', function() {
    //         correct_answers++;
    //         alert("answers" + correct_answers);  
    //     });

    // }
    // else if (a === "7"){
    //     one.innerText = "url= ' ' ";
    //     two.innerText = "<a></a>";
    //     three.innerText = "<link>";
    //     four.innerText = "src= ' '";

    //     var quiz_button7 = document.querySelector('#three');
    //     quiz_button7.addEventListener('click', function() {
    //         correct_answers++;
    //         alert("answers" + correct_answers);  

    //     });

    // }
    // else if (a === "8"){
    //     one.innerText = "ul";
    //     two.innerText = "ol";
    //     three.innerText = "li";
    //     four.innerText = "lo";

    //     var quiz_button8 = document.querySelector('#four');
    //     quiz_button8.addEventListener('click', function() {
    //         correct_answers++;
    //         alert("answers" + correct_answers);   

    //     });
        

    // }

    else{
        one.innerText = "option";
        two.innerText = "option";
        three.innerText = "option";
        four.innerText = "option";

    }


}

//checks to see if START has been triggered
const start_button = document.querySelector("#start");
start_button.addEventListener("click", function(){
    //checks if options for the game have been selected
    var checkboxes = document.querySelectorAll('input[name="requirement"]:checked');
    var ticker = document.querySelectorAll('input[name="timer"]:checked');
    var subject_choices = [];
    var time_limit = [];


    checkboxes.forEach((checkbox)=>{
        subject_choices.push(checkbox.value);
    });

    ticker.forEach((checkbox)=>{
        time_limit.push(checkbox.value);
    });


    // //CHECKS for minimum requirement to start game
    if (subject_choices[0]==="HTML"){
        var first_value = user_input.concat(html_questions);
    }


    // //add other subjects here

    // //TIMER CHECK
    if (time_limit[0]==="30_sec"){
        time_left = 30;
        var timer_id = setInterval(countdown, 1000);
        function countdown() {
            if (time_left === 0) {
                clearTimeout(timer_id)
                clock.innerHTML = 'Time remaining: ' + time_left;
                alert("Out of Time!")
            } 
            else {
                clock.innerHTML = 'Time remaining: ' + time_left;                
                time_left--;
            }
        }
    }
    else if(time_limit[0]==='1_min'){
        var time_left = 60;
        var timer_id = setInterval(countdown, 1000);

        function countdown() {
            const minutes = Math.floor(time_left/60);
            let seconds = time_left % 60;

            seconds = seconds < 10 ? '0' + seconds: seconds;
            if (time_left === 0){
                clearTimeout(timer_id);
                clock.innerHTML = 'Time remaining: 0:00';
                alert("Done!")
            }
            else{
                clock.innerHTML = 'Time remaining: ' + `${minutes}:${seconds}`;
                time_left--;
            }
        }
    }
    else if(time_limit[0]==='2_min'){
        var time_left = 120;
        var timer_id = setInterval(countdown, 1000);

        function countdown() {
            const minutes = Math.floor(time_left/60);
            let seconds = time_left % 60;

            seconds = seconds < 10 ? '0' + seconds: seconds;
            if (time_left === 0){
                clearTimeout(timer_id);
                clock.innerHTML = 'Time remaining: 0:00';
                alert("Done!")
            }
            else{
                clock.innerHTML = 'Time remaining: ' + `${minutes}:${seconds}`;
                time_left--;
            }
        }
    }
    else if(time_limit[0]==='2.3_min'){
        var time_left = 150;
        var timer_id = setInterval(countdown, 1000);

        function countdown() {
            const minutes = Math.floor(time_left/60);
            let seconds = time_left % 60;

            seconds = seconds < 10 ? '0' + seconds: seconds;
            if (time_left === 0){
                clearTimeout(timer_id);
                clock.innerHTML = 'Time remaining: 0:00';
                alert("Done!")
            }
            else{
                clock.innerHTML = 'Time remaining: ' + `${minutes}:${seconds}`;
                time_left--;
            }
        }
    }
    else{
        alert("Please select one time!")
        location.reload();
    }


    

    if (subject_choices.length===1){
          // create ten questions to be answered
          for(var i = 0; i < 10; i++){
            var random_question = (first_value[(Math.floor(Math.random() * first_value.length))]);
            user_input.push(random_question);
            first_value.splice(first_value.indexOf(random_question), 1)   
        }

        //stores information for the game

        var zero_question = user_input[0];
        question_zero.push(zero_question);

        var first_question = user_input[1];
        question_one.push(first_question);

        var second_question = user_input[2];
        question_two.push(second_question);

        var third_question = user_input[3];
        question_three.push(third_question);

        var fourth_question = user_input[4];
        question_four.push(fourth_question);

        var fifth_question = user_input[5];
        question_five.push(fifth_question);

        var sixth_question = user_input[6];
        question_six.push(sixth_question);

        var seventh_question = user_input[7];
        question_seven.push(seventh_question);

        var eigth_question = user_input[8];
        question_eight.push(eigth_question);

        var ninth_question = user_input[9];
        question_nine.push(ninth_question);


        //separate since next button leads the rest of the statements
        if (question_number===0){
            //turns the array into a string to be placed in the question box
            array_to_string(zero_question);
            //builds answer and checks it
            answer_key(zero_question);
            //removes option from potential pool
            user_input.splice(user_input.indexOf(zero_question), 1);
           
        }
        //Next button moves
        const next_button = document.querySelector('#next');
        next_button.addEventListener('click', function() {
            question_number++;
            //quiz_button1.disabled();
            switch(question_number){
                case 1:
                    array_to_string(first_question);
                    answer_key(first_question);
                    user_input.splice(user_input.indexOf(first_question), 1);
                    break;
                
    
                case 2:
                    array_to_string(second_question);
                    answer_key(second_question);
                    user_input.splice(user_input.indexOf(second_question), 1);
                    break;
                
                case 3:
                    array_to_string(third_question);
                    answer_key(third_question);
                    user_input.splice(user_input.indexOf(third_question), 1);
                    break;

                case 4:
                    array_to_string(fourth_question);
                    answer_key(fourth_question);
                    user_input.splice(user_input.indexOf(fourth_question), 1);           
                    break;

                case 5:
                    array_to_string(fifth_question);
                    answer_key(fifth_question);
                    user_input.splice(user_input.indexOf(fifth_question), 1);           
                    break;

                case 6:
                    array_to_string(sixth_question);
                    answer_key(sixth_question);
                    user_input.splice(user_input.indexOf(sixth_question), 1);         
                    break;

                case 7:
                    array_to_string(seventh_question);
                    answer_key(seventh_question);
                    user_input.splice(user_input.indexOf(seventh_question), 1);       
                    break;

                case 8:
                    array_to_string(eigth_question);
                    answer_key(eigth_question);
                    user_input.splice(user_input.indexOf(eigth_question), 1);         
                    break;

                case 9:
                    array_to_string(ninth_question);
                    answer_key(ninth_question);
                    user_input.splice(user_input.indexOf(ninth_question), 1);      
                    break;
                case 10:
                    alert("DONE!");
                    question_number=9;
                    break;
                    //answers=answers-8;
                    //alert(answers);
                    //location.reload();
                }
            });
            
            //alert("question number" + question_number);
        //     if (question_number===1){
        //         array_to_string(first_question);
        //         answer_key(first_question);
        //         user_input.splice(user_input.indexOf(first_question), 1);
        //         ;
        //     }

        //     else if (question_number===2){
        //         array_to_string(second_question);
        //         answer_key(second_question);
        //         user_input.splice(user_input.indexOf(second_question), 1);
        //     }
        //     else if(question_number===3){
                
        //         array_to_string(third_question);
        //         answer_key(third_question);
        //         user_input.splice(user_input.indexOf(third_question), 1);
        //     }
        //     else if(question_number===4){
        //         array_to_string(fourth_question);
        //         answer_key(fourth_question);
        //         user_input.splice(user_input.indexOf(fourth_question), 1);           
        //     }
        //     else if(question_number===5){
        //         array_to_string(fifth_question);
        //         answer_key(fifth_question);
        //         user_input.splice(user_input.indexOf(fifth_question), 1);           
        //     }
        //     else if(question_number===6){
                
        //         array_to_string(sixth_question);
        //         answer_key(sixth_question);
        //         user_input.splice(user_input.indexOf(sixth_question), 1);         
        //     }
        //     else if(question_number===7){
               
        //         array_to_string(seventh_question);
        //         answer_key(seventh_question);
        //         user_input.splice(user_input.indexOf(seventh_question), 1);       
        //     }
        //     else if(question_number===8){
                
        //         array_to_string(eigth_question);
        //         answer_key(eigth_question);
        //         user_input.splice(user_input.indexOf(eigth_question), 1);         
        //     }
        //     else if(question_number===9){
        //         array_to_string(ninth_question);
        //         answer_key(ninth_question);
        //         user_input.splice(user_input.indexOf(ninth_question), 1);      
        //     }
        //     else if(question_number===10){
        //         alert("DONE!");
        //         question_number=9;
        //         //answers=answers-8;
        //         //alert(answers);
        //         //location.reload();
        //     }
        // });

        const back_button = document.querySelector('#back');
        back_button.addEventListener('click', function() {
            question_number--;
            if (question_number===0){
                array_to_string(question_zero);
                //answer_key(question_one);
            }
            else if(question_number===1){
                array_to_string(question_one);
                //answer_key(second_question);
            }
            else if(question_number===2){
                array_to_string(second_question);
                //answer_key(third_question);
            }
            else if(question_number===3){
                array_to_string(third_question);
                //answer_key(fourth_question);
            }
            else if(question_number===4){
                array_to_string(fourth_question);
               //answer_key(fifth_question);
            }
            else if(question_number===5){
                array_to_string(fifth_question);
                //answer_key(sixth_question);
            }
            else if(question_number===6){
                array_to_string(sixth_question);
                //answer_key(seventh_question);
            }
            else if(question_number===7){
                array_to_string(seventh_question);
                //answer_key(eigth_question);
            }
            else if(question_number===8){
                array_to_string(eigth_question);
                //answer_key(ninth_question);
            }
            else{
                alert("too far")
                question_number=0;
            }
        });

    }
    
    

});



