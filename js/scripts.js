$(document).ready(function () {

    $('#design').click(function () {
        $('#design-content').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function () {
        $('#design').show(function () {
            $('#design-content').hide('fast');
        });
    });
    $('#dev').click(function () {
        $('dev-content').show(function () {
            $('dev').hide('fast');
        })
    })
    
