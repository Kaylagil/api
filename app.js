var name = 123123;

//Arrays
var fruits = ["apples", "bananas", "grapes"];
fruits.push("pears")


//Objects
var shoppingCart = {
    itemCount: 5,
    items: ["toothbrush", "comb", "book", "tetris"],
    user: {
        name: "kayla",
        password: "coding",
        sample: ["hello", "world", 123]
    }

}
//add to shopping cart
shoppingCart["total"] = 100

//Functions
function sayHello(anything){
    console.log("Hello " + anything + "!")
}

//call a function 

//sayHello();


function add(any, thing){
    console.log(any + thing)
}

//add(10, 6)

// if - else if - else

//var command = "";
var name = "Alvaro"

// if(command == "sayHello"){
//    // sayHello(name)
// } else if( command == "add"){
//     add(5,5);
// }else {
//     console.log("Wrong Input")
// }

// Test 

function calc(command, numb1, numb2){
     if (command == "add"){
         console.log(numb1 + numb2)
     } else if(command == "subtract"){
         console.log(numb1 - numb2)
     }else if (command == "multiply"){
         console.log(numb1 * numb2)
     }else if(command == "divide"){
         console.log(numb1 / numb2)
     }else {
         console.log("Wrong Input")
     }
}

//calc ("divide" , 20, 5)

var API_KEY = 'jfJ5Qt4fnyjPboDFf9aPEjiwoMCgSN5W'

//http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY

$('#test').on('click', function(){
   $('#content').empty();
    var input = $('#gif').val();
   $.get("http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key="+API_KEY+"&limit=10", function(response){
       console.log(response);
       var gifs = response.data;
       for(var i = 0; i < gifs.length; i ++){
            $('#content').append('<img src='+ gifs[i].images.original.url +'></img>')
       }
   })
})