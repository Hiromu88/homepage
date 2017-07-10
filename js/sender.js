/**
 * Created by yoshi on 7/10/17.
 */

const ak = "0414ed971ea11a51131e04967f03b0fabf9e64ef";

$('#submit-button').on('click', function () {
    console.log("clicked");
    sendContact()
});


var sendContact = function () {
    var body = {
        "options": {"sandbox": true},
        "content": {
            "from": "info@yoshihito.me",
            "subject": "Contact",
            "text":"Testing SparkPost - the most awesomest email service in the world"
        },
        "recipients": [{"address": "yoshihito522@gmail.com"}]};

    mailEndpoint(body)
        .done(function (resp) {
            console.log(resp);
        })
        .fail(function (resp) {
            console.log(resp);
        })
};

var mailEndpoint = function (body) {
    return $.ajax({
        url: "https://api.sparkpost.com/api/v1/transmissions",
        type: "POST",
        headers: {
            "Authorization": ak,
            "Content-Type": "application/json"
        },
        data: body,
        dataType: "json"
    })
};