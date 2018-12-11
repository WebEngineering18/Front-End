var frage = 1;
var answers = {
    data: []
};

function submitForm() {
    if (frage == 1) {
        answers.data.push({
            "question_id": frage,
            "answer": getCheckboxData()
        });
    } else if (frage == 2) {
        answers.data.push({
            "question_id": frage,
            "answer": getRadioData()
        });
    } else if (frage == 3) {
        answers.data.push({
            "question_id": frage,
            "answer": getRadioData()
        });

    } else if (frage == 4) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "Eigenplanung: " + $('#input4').val() + "%",
                "Fremdplanung: " + $('#input4_2').val() + "%",
            ]
        });

    }
    else if (frage == 5) {
        if ($('#allYearsQ5').is(':checked')) {
            answers.data.push({
                "question_id": frage,
                "answer": [
                    "2013 - 2017: " + $('#input5').val()
                ]
            });
        } else if ($('#everyYearQ5').is(':checked')) {
            answers.data.push({
                "question_id": frage,
                "answer": [
                    "2013: " + $('#input5_1').val(),
                    "2014: " + $('#input5_2').val(),
                    "2015: " + $('#input5_3').val(),
                    "2016: " + $('#input5_4').val(),
                    "2017: " + $('#input5_5').val(),
                ]
            });
        }
    }
    else if (frage == 6) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "Entwurfsplanung: " + $('#input6_1').val() + "%",
                "Genehmigungsplanung: " + $('#input6_2').val() + "%",
                "Ausfuehrungsplanung: " + $('#input6_3').val() + "%",
            ]


        });
    }
    else if (frage == 7) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                $('#input7').val()
            ]
        });
    }
    else if (frage == 8) {
        answers.data.push({
            "question_id": frage,
            "answer": getCheckboxDataWithOtherText()
        });
    }
    else if (frage == 9) {
        if ($('#allYearsQ9').is(':checked')) {
            answers.data.push({
                "question_id": frage,
                "answer": [
                    "2013 - 2017: " + $('#input9').val()
                ]


            });
        } else if ($('#everyYearQ9').is(':checked')) {
            answers.data.push({
                "question_id": frage,
                "answer": [
                    "2013: " + $('#input9_1').val(),
                    "2014: " + $('#input9_2').val(),
                    "2015: " + $('#input9_3').val(),
                    "2016: " + $('#input9_4').val(),
                    "2017: " + $('#input9_5').val(),
                ]


            });
        }
    }
    else if (frage == 10) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "Baustelle: " + $('#input10').val() + "%",
                "Erdberuehrte Bauteile: " + $('#input10_2').val() + "%",
                "Gebaeudehuelle: " + $('#input10_3').val() + "%",
                "Gebaeudeinnenbereich: " + $('#input10_4').val() + "%",
                "Daemmung: " + $('#input10_5').val() + "%",
                "Brandschutz: " + $('#input10_6').val() + "%",
                "Luftdichte Ebene: " + $('#input10_7').val() + "%",
                "Auszenanlagen, Terrassen: " + $('#input10_8').val() + "%",
                "Haustechnik: " + $('#input10_7').val() + "%",
            ]
        });
    }
    else if (frage == 11) {
        answers.data.push({
            "question_id": frage,
            "answer": getCheckboxData()
        });
    }
    else if (frage == 12) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                $('#input12').val()
            ]
        });
    }
    else if (frage == 13) {
        answers.data.push({
            "question_id": frage,
            "answer": getCheckboxDataWithOtherText()
        });
    }
    else if (frage == 14) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "0-2 Jahre: " + $('#input14').val() + "%",
                "3-4 Jahre: " + $('#input14_2').val() + "%",
                "ab 5 Jahre: " + $('#input14_3').val() + "%",
            ]
        });
    }
    else if (frage == 15) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "2013 - 2017: " + $('#input15').val(),
                "2013: " + $('#input15_2').val(),
                "2014: " + $('#input15_3').val(),
                "2015: " + $('#input15_4').val(),
                "2016: " + $('#input15_5').val(),
                "2017: " + $('#input15_6').val(),
            ]
        });
    }
    else if (frage == 16) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "2013 - 2017: " + $('#input16').val(),
                "2013: " + $('#input16_2').val(),
                "2014: " + $('#input16_3').val(),
                "2015: " + $('#input16_4').val(),
                "2016: " + $('#input16_5').val(),
                "2017: " + $('#input16_6').val(),
            ]
        });
    }
    else if (frage == 17) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                $('#input17').val()
            ]
        });
    }
    else if (frage == 18) {
        answers.data.push({
            "question_id": frage,
            "answer": [
                "2013 - 2017: " + $('#input18').val(),
                "2013: " + $('#input18_2').val(),
                "2014: " + $('#input18_3').val(),
                "2015: " + $('#input18_4').val(),
                "2016: " + $('#input18_5').val(),
                "2017: " + $('#input18_6').val(),
            ]
        });
    }
    else if (frage == 19) {
        answers.data.push({
            "question_id": frage,
            "answer": getRadioData()
        });
    }
    else if (frage == 20) {
        answers.data.push({
            "question_id": frage,
            "answer": getRadioData()
        });
        sendToServer();
    }
     console.log(answers);
}

function getNextQuestion() {
    $('#frage_' + frage).hide();
    frage++;
    $('#frage_' + frage).show();
    progressBarNext();
}

function validateQuestions() {
    if (frage == 1 || frage == 8 || frage == 11 || frage == 13) {
        validateQuestionCB(frage);
    } else if (frage == 4 || frage == 6 || frage == 10 || frage == 14) {
        validateQuestionRange(frage);
    } else if (frage == 7 || frage == 12 || frage == 15 || frage == 16 || frage == 17 || frage == 18) {
        validateQuestionNumber(frage);
    } else if (frage == 5 || frage == 9) {
        validateQuestionNumberXOR(frage);
    } else if (frage == 2 || frage == 3 || frage == 19 || frage == 20) {
        validateQuestionRB(frage);
    }
    

}

function prevQuestion() {
    if (frage > 1) {
        $('#frage_' + frage).hide();
        frage--;
        $('#frage_' + frage).show();
        progressBarBack();
    }
}

function sendToServer() {
    $.ajax({
        url: 'http://localhost:8080/testAnswer',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: 'POST',
        data: JSON.stringify({
            answers
        }),
        error: function () {
            console.log("Fehler aufgetreten!")
        }
        ,
        success: function (data) {
            console.log("Antworten wurden an Server geschickt!")
        }
    });
}

function getCheckboxData() {
    return $("#frage_" + frage + " input:checkbox:checked").map(function () {
        return $(this).val();
    }).get();
}

function getCheckboxDataWithOtherText() {
    return $("#frage_" + frage + " input:checkbox:checked").map(function () {
        if ($(this).val() == 'Sonstiges') {
            return $(this).val() + ":" + $("#input_" + frage).val();
        } else {
            return $(this).val();
        }
    }).get();
}

function getRadioData() {
    return $("#frage_" + frage + " input:radio:checked").map(function () {
        return $(this).val();
    }).get();
}

function getNumberData(offset) {
    return $("#frage_" + frage + " input").val();
}



