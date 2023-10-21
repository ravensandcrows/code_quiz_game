// VARIABLES

//Clock variables
var time_left = 0;
var clock = document.getElementById('timer');
var user_choice = 0;

//Quiz Questions
var html_questions = ["What does HTML stand for?", "What tag is used to separate a line of text?", "How do you insert a comment in HTML?", "How do you create a hyperlink in HTML?", "What does the Head tag do?", "Why should you put an alt attribute in HTML?", "Which tag that creates links should only be used in the Head section?", "Which one is not a type of list?", "Where do you link your CSS page in HTML?","Where do you link your JavaScript page in HTML?"];
var css_questions =["Which of these is NOT part of the CSS box model?", "What does PX stand for?", "Which symbol is used to separate rules in your CSS?", "How do you comment in CSS?", "What is padding?", "What is margin?", "What does justify-content do?", "What does align-items do?", "What does CSS stand for?", "How do you change the style of an id element?"];
var js_questions = ["How do you comment in Javascript?", "Which of these CANNOT be used to set up a variable?", "How do you call a function?", "What is a boolean?", "Difference between and object and an array?", "What number do arrays start from?", "How can you remove an element from an array?", "How can you select an id element in JS?", "How to check if a button has been pressed?", "What is a string?"];
var webapis_questions = ["What does API stand for?", "What do APIs do?", "Web APIs support which protocol?", "How to connect a Web API in HTML?", "Where to put your API in your HTML?", "Why are API quotas important?", "Which of these are a formatting language?", "What is an API key?", "What is a downside of Web APIs?", "Which of these is NOT a common Web API?"];

//User combos
var first_value = [];
var second_value = [];
var third_value = [];
var fourth_value = [];

//Score Tracker
var correct_answers = [];
var score_sum = 0;

//Stores the combo of user inputed questions
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

//POPUP variables
var popup =document.getElementById("popup");
var popup_background = document.getElementById("quiz");
var score = document.getElementById("score");

//takes you back to the top of the game
var start_game = document.getElementById("start");

// FUNCTIONS

//unselects radio buttons
function unclick(){
    var choice_one = document.getElementById("one").checked = false;
    choice_one;
    var choice_two = document.getElementById("two").checked = false;
    choice_two;
    var choice_three = document.getElementById("three").checked = false;
    choice_three;
    var choice_four = document.getElementById("four").checked = false;
    choice_four;
}

//scrolls user back to the top
function back_to_game() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//scores test
function test_score(){
    for(var i = 0; i<correct_answers.length; i++){
        score_sum += correct_answers[i];
    }
    var final_score = score_sum / 10;

    if (final_score === 1){
        score.innerText = "Score: 100%";
    }
    else if (final_score === .9){
        score.innerText = "Score: 90%";
    }
    else if(final_score===.8){
        score.innerText = "Score: 80%";
    }
    else if(final_score===.7){
        score.innerText = "Score: 70%";
    }
    else if(final_score===.6){
        score.innerText = "Score: 60%";
    }
    else if(final_score===.5){
        score.innerText = "Score: 50%";
    }
    else if(final_score===.4){
        score.innerText = "Score: 40%";
    }
    else if(final_score===.3){
        score.innerText = "Score: 30%";
    }
    else if(final_score===.2){
        score.innerText = "Score: 20%";
    }
    else if(final_score===.1){
        score.innerText = "Score: 10%";
    }
    else if(final_score===0){
        score.innerText = "Score: 0%";
    }
}
//updates option texts 
function replace_txt(a, b, c, d){
    const radioButtons = [
        {id: 'one', text: a},
        {id: 'two', text: b},
        {id: 'three', text: c},
        {id: 'four', text: d}
        ]

        radioButtons.forEach(radioButton => {
            const label = document.querySelector('label[for="' + radioButton.id + '"]');
            label.innerText = radioButton.text;
          });
}

//Takes the question from the area and makes it a string
function array_to_string(a){
    a = a.toString();
    a = a.replace(/\,/g,'');
    query.innerText = a;
}

//Push to answers
function point(a){
    if(a){
        correct_answers.push(1);
    }
    else{
        correct_answers.push(0);
    }
}

//Answer Key
function answer_key(a){
    //connects back to the radio buttons
    var quiz_button1 = document.getElementById("one");
    var quiz_button2 = document.getElementById("two");
    var quiz_button3 = document.getElementById("three");
    var quiz_button4 = document.getElementById("four");

    //checks quiz options
    //HTML
    if (a === 'What does HTML stand for?'){
        point(quiz_button1.checked);
    }
    else if (a === "What tag is used to separate a line of text?"){
        point(quiz_button2.checked);
    }
    else if (a === "How do you insert a comment in HTML?"){    
        point(quiz_button3.checked);
    }
    else if (a === "How do you create a hyperlink in HTML?"){
        point(quiz_button1.checked);
    }
    else if (a === "What does the Head tag do?"){    
        point(quiz_button4.checked);
    }
    else if (a === "Why should you put an alt attribute in HTML?"){    
        point(quiz_button2.checked);
    }
    else if (a === "Which tag that creates links should only be used in the Head section?"){    
        point(quiz_button3.checked);
    }
    else if (a === "Which one is not a type of list?"){    
        point(quiz_button4.checked);
    }
    else if (a === "Where do you link your CSS page in HTML?"){    
        point(quiz_button1.checked);
    }
    else if(a==="Where do you link your JavaScript page in HTML?"){
        point(quiz_button3.checked);
    }
    //CSS
    else if(a==="Which of these is NOT part of the CSS box model?"){
        point(quiz_button4.checked);
    }
    else if(a==="What does PX stand for?"){
        point(quiz_button1.checked);
    }
    else if(a=="Which symbol is used to separate rules in your CSS?"){
        point(quiz_button2.checked);
    }
    else if(a==="How do you comment in CSS?"){
        point(quiz_button3.checked);
    }
    else if(a==="What is padding?"){
        point(quiz_button2.checked);
    }
    else if(a==="What is margin?"){
        point(quiz_button4.checked);
    }
    else if(a==="What does justify-content do?"){
        point(quiz_button3.checked);
    }
    else if(a==="What does align-items do?"){
        point(quiz_button1.checked);
    }
    else if(a==="What does CSS stand for?"){
        point(quiz_button3.checked);
    }
    else if(a==="How do you change the style of an id element?"){
        point(quiz_button2.checked);
    }
    //JS
    else if(a==="How do you comment in Javascript?"){
        point(quiz_button4.checked);
    }
    else if(a==="Which of these CANNOT be used to set up a variable?"){
        point(quiz_button2.checked);
    }
    else if(a==="How do you call a function?"){
        point(quiz_button3.checked);
    }
    else if(a==="What is a boolean?"){
        point(quiz_button4.checked);
    }
    else if(a==="Difference between and object and an array?"){
        point(quiz_button1.checked);
    }
    else if(a==="What number do arrays start from?"){
        point(quiz_button3.checked);
    }
    else if(a==="How can you remove an element from an array?"){
        point(quiz_button1.checked);
    }
    else if(a==="How can you select an id element in JS?"){
        point(quiz_button4.checked);
    }
    else if(a==="How to check if a button has been pressed?"){
        point(quiz_button2.checked);
    }
    else if(a==="What is a string?"){
        point(quiz_button3.checked);
    }
    //APIS
    else if(a==="What does API stand for?"){
        point(quiz_button4.checked);
    }
    else if(a==="What do APIs do?"){
        point(quiz_button3.checked);
    }
    else if(a==="Web APIs support which protocol?"){
        point(quiz_button3.checked);
    }
     else if(a==="How to connect a Web API in HTML?"){
        point(quiz_button4.checked);
    }
    else if(a==="Where to put your API in your HTML?"){
        point(quiz_button4.checked);
    }
    else if(a==="Why are API quotas important?"){
        point(quiz_button2.checked);
    }
    else if(a==="Which of these are a formatting language?"){
        point(quiz_button2.checked);
    }
    else if(a==="What is an API key?"){
        point(quiz_button1.checked);
    }
    else if(a==="What is a downside of Web APIs?"){
        point(quiz_button3.checked);
    }
    else if(a==="Which of these is NOT a common Web API?"){
        point(quiz_button1.checked);
    }
    else{
        correct_answers.push(0);
    }

}
//prevents user from getting multiple correct answer by going backwards
function erase_past_answer(){
    var last_answer = correct_answers.pop();
    last_answer;
}

//changes the question
function option_choices(a){
    if (a === "What does HTML stand for?"){
        replace_txt("Hypertext Markup Language","Hypertense Markdown Language","Hometext Manager Language","Hundredtype Messenger Language");
    }
    else if (a === "What tag is used to separate a line of text?"){
        replace_txt("<split>","<br>","<return>","<src>");
    }
    else if (a === "How do you insert a comment in HTML?"){
        replace_txt("###","//","<!--->","/**/");
    }
    else if (a === "How do you create a hyperlink in HTML?"){
        replace_txt("<a></a>","href=' '","src=' '","url = ''");
    }
    else if (a === "What does the Head tag do?"){
        replace_txt( "Styles the page","Stores user information","It stores your header and nav","Contains metadata");
    }
    else if (a === "Why should you put an alt attribute in HTML?"){
        replace_txt("Makes images load better","Improves accessibility and SEO","Improves rendering of images","It is a class that can be altered");
    }
    else if (a === "Which tag that creates links should only be used in the Head section?"){
        replace_txt("url= ' '","<a></a>","<link>","src= ' '");
    }
    else if (a === "Which one is not a type of list?"){
        replace_txt("ul","ol","li","lo");
    }
    else if(a==="Where do you link your CSS page in HTML?"){
        replace_txt("Head","Footer","Body","Header");
    }
    else if(a==="Where do you link your JavaScript page in HTML?"){
        replace_txt("Beginning of Body", "Inside Footer", "End of Body","Head"); 
    }
    //CSS
    else if(a==="Which of these is NOT part of the CSS box model?"){
        replace_txt("Border", "Padding", "Margin", "Cushion");
    }
    else if (a==="What does PX stand for?"){
        replace_txt("Pixels", "Pax Units", "Printer Friendly", "Press Ready");
    }
    else if (a==="Which symbol is used to separate rules in your CSS?"){
        replace_txt("[ ]","{ }", "< >", "( )");
    }
    else if (a==="How do you comment in CSS?"){
        replace_txt("###", "//", "/**/", "<!-- --->");
    }
    else if (a==="What is padding?"){
        replace_txt("The space between the margin and content","The space between the content and the border","The space outside the border","The space within the content");
    }
    else if(a==="What is margin?"){
        replace_txt("The space around the padding","The space around the cushion","The space around the content","The space around the border");
    }
    else if (a==="What does justify-content do?"){
        replace_txt("Moves content across the Z-axis","Moves content across the Y-axis","Moves content across the X-axis","Moves content across the M-axis");
    }
    else if(a==="What does align-items do?"){
        replace_txt("Moves content across the Y-axis","Moves content across the Z-axis","Moves content across the X-axis","Moves content across the M-axis");
    }
    else if (a==="What does CSS stand for?"){
        replace_txt("Color Shapes and Style","Creating Sleek Styles","Cascading Style Sheets","Creative Style Sheets");
    }
    else if(a==="How do you change the style of an id element?"){
        replace_txt(".id_name","#id_name","id_name","*id_name");
    }
    //JS
    else if(a==="How do you comment in Javascript?"){
        replace_txt("###","<!--->","/**/","//");
    }
    else if(a==="Which of these CANNOT be used to set up a variable?"){
        replace_txt("let","is","const","var");
    }
    else if(a==="How do you call a function?"){
        replace_txt("start: funtion_name","function_name","function_name();","function_name[]:");
    }
    else if(a==="What is a boolean?"){
        replace_txt("A tool to parse information from an array","Operator that gets user input","Numerical entity with decimals","Logical entity: true or false");
    }
    else if(a==="Difference between and object and an array?"){
        replace_txt("Objects store a collection of data / Arrays store a list of values","Arrays store a collection of data / Objects store a list of values","No difference","Objects are for strings / Arrays for numbers");
    }
    else if(a==="What number do arrays start from?"){
        replace_txt("1","-1","0",".5");
    }
    else if(a==="How can you remove an element from an array?"){
        replace_txt(".pop",".remove",".push",".cut");
    }
    else if(a==="How can you select an id element in JS?"){
        replace_txt("HTML.idSelector","document.IDselector","HTML.querySelector","document.getElementById");
    }
    else if(a==="How to check if a button has been pressed?"){
        replace_txt(".userClicked",".addEventListener",".isChecked",".buttonPressed");
    }
    else if(a==="What is a string?"){
        replace_txt("A primitive type: boolean","A primitive type: number","A primitive type: text","A non-primitive type: object");
    }
    //APIs
    else if(a==="What does API stand for?"){
        replace_txt("Apex Program Interface","App Placement Incline","Ask Program Input","Application Programming Interface");
    }
    else if(a==="What do APIs do?"){
        replace_txt("ONLY increases functionality of a web service","ONLY extends functionality of a web browser","Extends or increases the functionality of web browser and servers","deploys network-distributed services");
    }
    else if(a==="Web APIs support which protocol?"){
        replace_txt("Normally only CAP","Typically only ABP","Generally only HTTP","Usually only SOAP");
    }
    else if(a==="How to connect a Web API in HTML?"){
        replace_txt("<a https:'webpage'></a>","<DOM WebAPI https:'webpage'","<link src='webpage>","<script type=''src='webpage'></script>");
    }
    else if(a==="Where to put your API in your HTML?"){
        replace_txt("In the Head","In the Header","At the beginning of Body","At the end of Body");
    }
    else if(a==="Why are API quotas important?"){
        replace_txt("Makes webpages less dynamic","Can impact webpage budget","Can harm SEO","Can create too many variables");
    }
    else if(a==="Which of these are a formatting language?"){
        replace_txt("HTTP","JSON","URI","MOP");
    }
    else if(a==="What is an API key?"){
        replace_txt("An authentication paradigm/token","An information target","A file storage point","A bulletin");
    }
    else if(a==="What is a downside of Web APIs?"){
        replace_txt("usually difficult to maintain","complex and heavy weight","security problems","closed source");
    }
    else if(a==="Which of these is NOT a common Web API?"){
        replace_txt("Number API","Google API","Amazon API","AccuWeather API");
    }
}
//popup functions
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    location.reload();
}
function end_game(){
    var display_score= document.getElementById("quiz_content");
    display_score.style.display = "none";
    popup_background.classList.add("popup_container");
}

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
    if (subject_choices.length === 0){
        alert("Please select at least one topic!")
    }
    //builds question list
    else{
        var temp_array = [];
        if(subject_choices.includes("HTML")){
            first_value = temp_array.concat(html_questions);
        }
        if(subject_choices.includes("CSS")){
            second_value=temp_array.concat(css_questions);
        }
        if(subject_choices.includes("java_script")){
            third_value=temp_array.concat(js_questions);
        }
        if(subject_choices.includes("web_apis")){
            fourth_value = temp_array.concat(webapis_questions);
        }
        var new_value = [];
        var final_value = new_value.concat(first_value, second_value, third_value, fourth_value);
    }    
    //TIMER CHECK
    if (time_limit[0]==="30_sec"){
        time_left = 30;
        var timer_id = setInterval(countdown, 1000);
        function countdown() {
            if (time_left === 0) {
                clearTimeout(timer_id)
                clock.innerHTML = 'Time remaining: ' + time_left;
                test_score();
                end_game();
                openPopup();
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
                test_score();
                end_game();
                openPopup();
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
                test_score();
                end_game();
                openPopup();
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
                test_score();
                end_game();
                openPopup();
            }
            else{
                clock.innerHTML = 'Time remaining: ' + `${minutes}:${seconds}`;
                time_left--;
            }
        }
    }
 
    if (subject_choices.length!==0){
          // create ten questions to be answered
          for(var i = 0; i < 10; i++){
            var random_question = (final_value[(Math.floor(Math.random() * final_value.length))]);
            user_input.push(random_question);
            final_value.splice(final_value.indexOf(random_question), 1)   
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

        var eighth_question = user_input[8];
        question_eight.push(eighth_question);

        var ninth_question = user_input[9];
        question_nine.push(ninth_question);


        //separate since next button leads the rest of the statements
        if (question_number===0){
            //turns the array into a string to be placed in the question box
            array_to_string(zero_question);
            //builds answer and checks it
            option_choices(zero_question);
            //removes option from potential pool
            user_input.splice(user_input.indexOf(zero_question), 1);
        }
    
        //Next button moves
        const next_button = document.querySelector('#next');
        next_button.addEventListener('click', function() {
            unclick();
            question_number++;
            if(question_number===1){
                const green = document.querySelector('.back');
                green.style.backgroundColor = 'darkslategray';
                document.getElementById("back").innerText = "Back";
            }
            switch(question_number){
                case 1:
                    answer_key(zero_question);
                    array_to_string(first_question);
                    option_choices(first_question);
                    user_input.splice(user_input.indexOf(first_question), 1);
                    break;
                case 2:
                    answer_key(first_question);
                    array_to_string(second_question);
                    option_choices(second_question);
                    user_input.splice(user_input.indexOf(second_question), 1);
                    break;
                case 3:
                    answer_key(second_question);
                    array_to_string(third_question);
                    option_choices(third_question);
                    user_input.splice(user_input.indexOf(third_question), 1);
                    break;
                case 4:
                    answer_key(third_question);
                    array_to_string(fourth_question);
                    option_choices(fourth_question);
                    user_input.splice(user_input.indexOf(fourth_question), 1);           
                    break;
                case 5:
                    answer_key(fourth_question);
                    array_to_string(fifth_question);
                    option_choices(fifth_question);
                    user_input.splice(user_input.indexOf(fifth_question), 1);           
                    break;
                case 6:
                    answer_key(fifth_question);
                    array_to_string(sixth_question);
                    option_choices(sixth_question);
                    user_input.splice(user_input.indexOf(sixth_question), 1);         
                    break;
                case 7:
                    answer_key(sixth_question);
                    array_to_string(seventh_question);
                    option_choices(seventh_question);
                    user_input.splice(user_input.indexOf(seventh_question), 1);       
                    break;
                case 8:
                    answer_key(seventh_question);
                    array_to_string(eighth_question);
                    option_choices(eighth_question);
                    user_input.splice(user_input.indexOf(eighth_question), 1);         
                    break;
                case 9:
                    answer_key(eighth_question);
                    array_to_string(ninth_question);
                    option_choices(ninth_question);
                    user_input.splice(user_input.indexOf(ninth_question), 1);      
                    break;
                case 10:
                    answer_key(ninth_question);
                    var response = confirm("Are you done?");
                    if (response === true){
                        test_score();
                        end_game();
                        openPopup();
                    }
                    question_number=9;
                    break;
                }
            });
        
        //ALLOWS YOU TO GO BACK
        const back_button = document.querySelector('#back');
        back_button.addEventListener('click', function() {
            question_number--;
            if (question_number===0){
                array_to_string(zero_question);
                option_choices(zero_question);
                erase_past_answer();
            }
            else if(question_number===1){
                array_to_string(first_question);
                option_choices(first_question);
                erase_past_answer();
            }
            else if(question_number===2){
                array_to_string(second_question);
                option_choices(second_question);
                erase_past_answer();
            }
            else if(question_number===3){
                array_to_string(third_question);
                option_choices(third_question);
                erase_past_answer();
            }
            else if(question_number===4){
                array_to_string(fourth_question);
                option_choices(fourth_question);
                erase_past_answer();
            }
            else if(question_number===5){
                array_to_string(fifth_question);
                option_choices(fifth_question);
                erase_past_answer();
            }
            else if(question_number===6){
                array_to_string(sixth_question);
                option_choices(sixth_question);
                erase_past_answer();
            }
            else if(question_number===7){
                array_to_string(seventh_question);
                option_choices(seventh_question);
                erase_past_answer();
            }
            else if(question_number===8){
                array_to_string(eighth_question);
                option_choices(eighth_question);
                erase_past_answer();
            }
            else{
                const red = document.querySelector('.back');
                red.style.backgroundColor = 'red';
                document.getElementById("back").innerText = "TOO FAR";
                question_number=0;
            }
        });
    }
});
