import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "../../node_modules/inputmask/dist/jquery.inputmask.js";

function createDropdown(label, selector, start, end) {
    $(selector).append($('<option>', { 
        value: label,
        text : label
    }));
    for (let i = start; i <= end; i++) {
        $(selector).append($('<option>', { 
            value: i,
            text : i 
        }));
      }
}

$( document ).ready(function() {

    //populate birthdate dropdowns
    createDropdown('Month','#regMonth', 1, 12);
    createDropdown('Day','#regDay', 1, 31);
    createDropdown('Year','#regYear', 1930, 2020);

    //phone mask
    $('#regTel').inputmask('(999) 999-9999');

    //tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

});
