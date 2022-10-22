import React from "react";
import { Books } from "./books";

export class Read extends React.Component{
    
    state = {
        books:[
            {
                "title": "Ajax in Action",
                "isbn": "1932394613",
                "pageCount": 680,
                "publishedDate": {
                  "$date": "2005-10-01T00:00:00.000-0700"
                },
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane.jpg",
                "longDescription": "Web users are getting tired of the traditional web experience. They get frustrated losing their scroll position; they get annoyed waiting for refresh; they struggle to reorient themselves on every new page. And the list goes on. With asynchronous JavaScript and XML, known as \"Ajax,\" you can give them a better experience. Once users have experienced an Ajax interface, they hate to go back. Ajax is new way of thinking that can result in a flowing and intuitive interaction with the user.\n<br>\n<i>Ajax in Action</i> helps you implement that thinking--it explains how to distribute the application between the client and the server (hint: use a \"nested MVC\" design) while retaining the integrity of the system. You will learn how to ensure your app is flexible and maintainable, and how good, structured design can help avoid problems like browser incompatibilities. Along the way it helps you unlearn many old coding habits. Above all, it opens your mind to the many advantages gained by placing much of the processing in the browser. If you are a web developer who has prior experience with web technologies, this book is for you.",
                "status": "PUBLISH",
                "authors": [
                  "Dave Crane",
                  "Eric Pascarello with Darren James"
                ],
                "categories": [
                  "XML",
                  "Internet"
                ]
              },
              {
                "title": "jQuery in Action",
                "isbn": "1933988355",
                "pageCount": 376,
                "publishedDate": {
                  "$date": "2008-01-01T00:00:00.000-0800"
                },
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
                "shortDescription": "\"The best-thought-out and researched piece of literature on the jQuery library.\" --From the forward by John Resig, Creator of jQuery",
                "longDescription": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique    chaining    model lets you perform multiple operations on a page element in succession, as in  (   div.elements   ).addClass(   myClass   ).load(   ajax_url   ).fadeIn()    jQuery in Action is a fast-paced introduction and guide. It shows you how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique    lab pages    anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
                "status": "PUBLISH",
                "authors": [
                  "Bear Bibeault",
                  "Yehuda Katz"
                ],
                "categories": [
                  "Web Development"
                ]
              },
              {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": [
                  "Rick Umali"
                ],
                "categories": []
              },
              {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                  "Kyle Banker",
                  "Peter Bakkum",
                  "Tim Hawkins",
                  "Shaun Verch",
                  "Douglas Garrett"
                ],
                "categories": []
              },
              {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": [
                  "Simon Holmes"
                ],
                "categories": []
              }
            ]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}