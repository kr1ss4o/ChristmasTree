
let questions = ["Съкращение на учебен предмет с английски език.", "Карнавален предмет, покриващ лицето.","Исторически термин, назоваващ 100 години.","Окраса за елха. Обикновено дълъг предмет","Област във Финландия, дом на Дядо Коледа.","Част от дума.","Най-безопасното превозно средство.","Фамилното име на президента на класа.","Животните, които впряга Дядо Коледа.","Място за цветя и домати."]; // questions array
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
            if (currentLevel === 9) { // Checking if the user has completed the last word
                Restart(); // Last word has a custom pop up
            }
            else {
                Correct(); // Else continue as usual
            }
            currentLevel++; // updating the index
        }
        else { 
            Incorrect();
        }
        QuestionTitleShow();
        QuestionShow();
    }
    
    function FillAnswer() { // Fill the correct letters in the crossword
        let index = currentLevel + 2; // Acccess the first row with question (row2)
        var textboxes = document.querySelectorAll("#row"+index+" input"); // Array with all the textboxes in the current row

        let letters = answers[currentLevel].split(""); // Split the correct answer to chars for each textbox to fill

        for (let i = 0; i < letters.length; i++) {
            if (textboxes[i]) {
                textboxes[i].value = letters[i].toUpperCase(); // Assign to each textbox a char
            }
        }
    }

    function Hint() {
        Swal.fire({ // custom pop-up from SweetAlert2
            title: 'Вие завършихте играта!',
            icon: 'success',
            confirmButtonText: 'Започнете пак!',
            draggable: true
        })
    }
    // CUSTOM POP-UPS

    function Correct() {
        Swal.fire({ // custom pop-up from SweetAlert2
            title: 'Правилно!',
            text: 'Браво! Продължавайте в този дух.',
            icon: 'success',
            confirmButtonText: 'Продължи напред',
            draggable: true
        })
    }
    function Incorrect() {
        Swal.fire({ // custom pop-up from SweetAlert2
            title: 'Грешка!',
            text: 'Помислете пак. Не забравяйте, че имате право на жокер.',
            icon: 'error',
            confirmButtonText: 'Опитай пак',
            draggable: true
        })
    }
    function Restart() {
        Swal.fire({ // custom pop-up from SweetAlert2
            title: 'Завършихте играта!',
            text: 'Представихте се отлично.',
            icon: 'warning',
            confirmButtonText: 'Започнете пак?',
            draggable: true
        })

        // Reload page after the pop-up button press
        const button = document.querySelector('.swal2-confirm'); // Select the button with class swal2-confirm
        button.addEventListener('click', () => {
            location.reload();
        });
    }

    // EXTRA METHODS

    function ClearTextbox() { // Clear textbox input
        $('#answer-input').val("");
    }

    function SubmitOnEnter() { // Activates the submit button when the Enter key is pressed
        const button = document.getElementById('answer-button');

        document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            Check();
            ClearTextbox();
        }
    });
    }

    // Calling the functions
    SubmitOnEnter();
    $('#answer-button').on('click', function() {Check(); ClearTextbox();});
    QuestionTitleShow();
    QuestionShow();

    
});

