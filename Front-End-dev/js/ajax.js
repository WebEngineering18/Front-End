var frage = 1;

$(document).ready(function () {
    $("#next").click(function (e) {
        sumbitForm();
    })
});

function sumbitForm() {

    if (frage == 1) {
        var frage_1 = $("#frage_1 input:checkbox:checked").map(function () {
            return $(this).val();
        }).get();
        console.log(frage_1);
    } else if (frage == 2) {
        var frage_2 = $("#frage_2 input:radio:checked").map(function () {
            return $(this).val();
        }).get();
        console.log(frage_2);
    }else{

    }

    nextQuestion();
}

function nextQuestion() {
    $('#frage_' + frage).hide();
    frage++;
    $('#frage_' + frage).show();
}
