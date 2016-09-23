/**
 * Created by kimia on 9/23/2016.
 */
/**
 * Created by kimia on 9/19/2016.
 */
var http = require('http');
var fs = require('fs');
var util = require('util');
var  url = require('url');


function onRequest(req,res) {
    console.log(req.url);
    var url_parts = url.parse(req.url,true);
    switch (url_parts.pathname)
    {
        case '/':
            displayForm(res);
            break;
        case '/formhandler':
            show(url_parts,res)
            break;
    }


}
function displayForm(res) {

    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end(data);
    });
}
function show(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var name='your name is : '+req.query.name;
    var email='your email is : '+req.query.email;
    var message='your message is : '+req.query.message;
    res.write(name+" <br>");
    res.write(email +"<br>");
    res.write(message+"<br>");
   res.end()
}
http.createServer(onRequest).listen(8888);
console.log("server is on");