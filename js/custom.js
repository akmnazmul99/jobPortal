$(document).ready(function () {
//    word experience
    $("#work-exp-form-cancel").click(function () {
        $("#add-experience-content").hide();
        $("#add-experience").show();
    });
    $("#add-experience").click(function () {
        $("#add-experience").hide();
        $("#add-experience-content").show();
    });
    $('#exp_present').click(function () {
        if ($(this).prop("checked") == true) {
            $("#exp_end").hide();
            $("#exp_end_present").show();
        } else if ($(this).prop("checked") == false) {
            $("#exp_end_present").hide();
            $("#exp_end").show();
        }
    });

    //    education
    $("#education-form-cancel").click(function () {
        $("#add-education-content").hide();
        $("#add-education").show();
    });
    $("#add-education").click(function () {
        $("#add-education").hide();
        $("#add-education-content").show();
    });

    $('#education_present').click(function () {
        if ($(this).prop("checked") == true) {
            $("#education_end").hide();
            $("#education_end_present").show();
        } else if ($(this).prop("checked") == false) {
            $("#education_end_present").hide();
            $("#education_end").show();
        }
    });
    //    skills
    $("#skill-form-cancel").click(function () {
        $("#add-skill-content").hide();
        $("#add-skill").show();
    });
    $("#add-skill").click(function () {
        $("#add-skill").hide();
        $("#add-skill-content").show();
    });
    //    language
    $("#language-form-cancel").click(function () {
        $("#add-language-content").hide();
        $("#add-language").show();
    });
    $("#add-language").click(function () {
        $("#add-language").hide();
        $("#add-language-content").show();
    });
    $('#english').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });
    $('#chinese').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });
    $('#japanese').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });
    $('#vietnamese').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });
    $('#tamil').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });
    $('#hindi').click(function () {
        $(this).toggleClass(function () {
            return $(this).is('.block-grid-item, .li-active') ? 'block-grid-item li-active' : 'block-grid-item';
        })
    });

});
