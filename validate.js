function valCheckbox() {
                var checkBoxes = document.getElementsByClassName('uk-checkbox');
                var isChecked = false;
                for (var i = 0; i < checkBoxes.length; i++) {
                    if (checkBoxes[i].checked) {
                        isChecked = true;
                        break; 
                    }         
                }
                if (!isChecked) {
                    alert('Sie muessen bei der ersten Frage mindestens ein Feld markieren!');
                }
            }