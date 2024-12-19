
let questions = ["Съкращение на учебен предмет с английски език", "Карнавален предмет, покриващ лицето","Термин, назоваващ 100 години","Окраса за елха. Обикновено дълъг предмет","Област във Финландия, дом на Дядо Коледа","Част от дума","Най-безопасното превозно средство","Фамилно име на президента на класа","Животните, които впряга Дядо Коледа","Място за цветя и домати"]; // questions arrau
let answers = ["чеп","маска","век","гирлянд","лапландия","буква","самолет","веселинов","елени","градина"]; // answers array


$(function(){

    let currentLevel = 0; // used to locate which word you are on at the moment

    function QuestionTitleShow() { // updating the number of the question
        $('#question-title').text("Въпрос №"+(currentLevel+1)+ ":");
    }
    
    function QuestionShow() { // updating the question itself
        $('#question-info').text(questions[currentLevel]);
    }
    
    function Check() { // checking if the user guessed the word correctly
        var userAnswer = $('#answer-input').val().toLowerCase(); // the user's answer
        if(userAnswer === answers[currentLevel]){
            FillAnswer(); // filling the answer in the tree xoxoxo
            Swal.fire({ // custom pop-up from S
                title: 'Правилно!',
                icon: 'success',
                confirmButtonText: 'Продължи напред',
                draggable: true
            })
            currentLevel++; // updating the index
        }
        else { 
            Swal.fire({ // custom pop-up from SweetAlert2
                title: 'Грешка!',
                icon: 'fail',
                confirmButtonText: 'Опитай пак',
                draggable: true
            })
        }
        QuestionTitleShow();
        QuestionShow();
    }
    
    function FillAnswer() {
        let index = currentLevel+2; // Acccess the first row with question (row2)
        var textboxes = document.querySelectorAll("#row"+index+" input"); // Array with all the textboxes in the current row

        let letters = answers[currentLevel].split(""); // Split the correct answer to chars for each textbox to fill

        for (let i = 0; i < letters.length; i++) {
            if (textboxes[i]) {
                textboxes[i].value = letters[i].toUpperCase(); // Assign to each textbox a char
            }
        }
    }
    
    function ClearTextbox() {
        $('#answer-input').val(""); // Clear input
    }

    // Calling the functions
    $('#answer-button').on('click', function() {Check(); ClearTextbox();});
    QuestionTitleShow();
    QuestionShow();

    
});

