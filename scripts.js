// 1. Write a function that returns either a letter grade “A” “B” … or "out of range" if it is not a proper grade when a numeric grade is passed in to that function:
// 90 - 100 A
// 80 - 89 B
// 72 - 79 C
// 0 - 71 F

// 2. Write JS / JQuery code that sets focus to an anchor tag with id = "main" when a button with class= "skip" is clicked.
//  <button class=”skip”> Skip to Main</button >
//  <a id=” main”>...</a>

// 3. Write JS / JQuery code to give the class “learn” to all links on a page that have the text “learn more”:
// <a href=”....”>learn more</a>

// 1.
function getGrade(grade){
    if (grade >= 90 && grade <= 100){
        return "A";
    } else if (grade >= 80 && grade <= 89){ 
        return "B";
    } else if (grade >= 72 && grade <= 79) {
        return "C";
    } else if (grade >= 0 && grade <= 71){
        return "F";
    } else {
        return "out of range";
    };
};

console.log(getGrade(93));
console.log(getGrade(86));
console.log(getGrade(75));
console.log(getGrade(68));
console.log(getGrade(101));
console.log(getGrade(-1));

// 2. 
$(document).ready(function () {
    $('.skip').click(function () {
        $('#main').focus();
    });
});

// 3. 
$(document).ready(function () {
    $('a').each(function(){
        if($(this).html() == 'learn more'){
            $(this).addClass('learn')
        }
    })
});

