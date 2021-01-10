
//Get
let req = new XMLHttpRequest();

req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responceText);

    }
};

req.open('GET', 'https://www.cambridgeenglish.org', true);
req.send();

//Post
let formData = new FormData();
formData.append('name', 'Murdock');
let req2 = new XMLHttpRequest();
req2.open('POST', 'https://www.cambridgeenglish.org');
req2.send(formData);

//JQuery.ajax
//Get
$.ajax({
    url: 'http://dataserver/data.json'
}).done(function (data) {
    //some code performance
}).fail(function () {
    //handle error
});

//Post
$.ajax({
    type: 'POST',
    url: 'http://dataserver/data.json',
    data: data,
    success: successCallBack,
    error: errorCallBack,
    dataType: dataType
});

//Qwest
//Get
qwest.get('http://dataserver/data.json')
    .then(function (xhr, responce) {
        //...some code performance
    });

//Post
qwest.post('http://dataserver/update', {
    firstname: 'Murdock',
    age: 30
})
    .then(function (xhr, responce) {
        // make some usefull actions
    })
    .catch(function (e, xhr, responce) {
        //process the error
    });