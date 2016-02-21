$(document).ready(function(){
//random quotes
  
  var quotes = [
  {quote: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", aut: "Oscar Wilde"},
  {quote: "It is easier to forgive an enemy than to forgive a friend.", aut: "William Blake"},
  {quote: "You cannot create experience. You must undergo it.", aut: "Albert Camus"},
  {quote: "Time you enjoy wasting, was not wasted", aut: "John Lennon"},
  {quote: "America is a mistake, a giant mistake.", aut: "Sigmund Freud"},
  {quote: "In the practice of tolerance, one's enemy is the best teacher.", aut: "Dalai Lama"},
  {quote: "Mistakes are always forgivable, if one has the courage to admit them.", aut: "Bruce Lee"},
  {quote: "I am always doing that which I cannot do, in order that I may learn how to do it.", aut: "Pablo Picasso"},
  {quote: "Fame can take interesting men and thrust mediocrity upon them.", aut: "David Bowie"}, 
  {quote: "The greatest education in the world is watching the masters at work.", aut: "Michael Jackson"},
  {quote: "The universe is not required to be in perfect harmony with human ambition.", aut: "Carl Sagan"},
  {quote: "If you can't make it good, at least make it look good.", aut: "Bill Gates"}
] 

 //call to function quotes 
 loadQuote();  
  
  //start function loadQuote
function loadQuote(){
    //get random position on array quotes
  var rnd = Math.floor((Math.random() * quotes.length ));
  
  var quote = quotes[rnd].quote;
  var aut = quotes[rnd].aut;
  
  $("#quote").text("\"" + quote + "\"");
  $(".aut").text(aut);
  
  //send data to tweet button
 var urlTweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
   
$(".btn-info").attr("href",urlTweet + "\""+quote+"\"" + " - " + aut);
}// loadQuote function  
  
$('#btnQuote').on('click',loadQuote);
  
}); //end document ready