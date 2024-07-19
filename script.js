$(document).ready(function(){
    //fill in content
    $("#title").text(data["title"])
    $("#description").text(data["description"])

    //get attachments
    var line = "<td>";
    data["attachments"].forEach( function(e){
        line = line + '<img width=60, height=60, src="' + e.resourceLink + '"></img>';
    });
    line = line + "</td>";

    $("#attachments").html(line);

    $('#attachments img').each(function (index) {
        if ($(this).attr('onclick') != null) {
            if ($(this).attr('onclick').indexOf("runThis()") == -1) {
                $(this).click(function () {
                    $(this).attr('onclick');
                    var src = $(this).attr("src");
                    ShowLargeImage(src);
                });
            }
        }
        else {
            $(this).click(function () {
                var src = $(this).attr("src");
                ShowLargeImage(src);
            });
        }
    });

    $('body').on('click', '.modal-overlay', function () {
        $('.modal-overlay, .modal-img').remove();
    });

    function ShowLargeImage(imagePath) {
        $('body').append('<div class="modal-overlay"></div><div class="modal-img"><img src="' + imagePath.replace("small","large") + '" /></div>');
    }

});