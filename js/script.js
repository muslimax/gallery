$('a').click(function(e) {  
    e.preventDefault()
    let link = $(this).attr("href")
    // console.log(link);
    $('#big img').fadeOut(500, function() {
        $('#big img').attr("src", link).fadeIn(500)
    })
})
