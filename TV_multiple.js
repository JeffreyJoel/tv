$("#search").click(check)
function check() {
    let text = $("#text").val();

    $.get("http://api.tvmaze.com/search/shows?" + "q=" + text, function (data) {
        // console.log(data);
        $("#items").empty()
        data.forEach(data1 => {
            // $("#items").empty();
            console.log(data1);
            //  let newItem = document.createElement("li");

            $("#items").append('<li class = ' + "list"  + '><img class=' + "col-md-4" + ' src="' + data1.show.image.medium + '"></img>' + '<p class = ' + "col" + "ml-2" +  '>' + data1.show.summary + '</p>' + '</li>');
            $(".list").addClass("row")
            $(".list p").addClass("card-body")

            let store = localStorage.setItem('new', JSON.stringify(data))
            console.log(store);
        }
        );


    })

}
$("body").keydown(function (e) {
    var key = e.which
    if (key == 13) {
        check()
    }
})
