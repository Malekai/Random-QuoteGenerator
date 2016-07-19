//All the quotes that can be used

var items = ["Be water, my friend.", 
"Do not go gentle into that good night.", 
"If you're going to try, go all the way.",
"The best way to predict your future is to create it.",
"Man is only great when he acts from passion.",
"Imagination is more important than knowledge.",
"The most important thing is this: to be able at any moment - to sacrifice what you are, for what you will become!",
];

var figures = ["-Bruce Lee", 
"-Dylan Thomas", 
"-Charles Bukowski",
"-Abraham Lincoln",
"-Benjamin Disraeli",
"-Albert Einstein",
"-Eric Thomas",
 ];

//Make the quote change to different quotes

//Select h1 and h4

var quote = document.querySelector("h1");

var author = document.querySelector("h4");

var button = document.querySelector("button");

//Change the quote and author

button.addEventListener("click", function() {
    // Link the author and quote with var i
    var i = Math.floor(Math.random()*items.length);
    var item = items[i];
    var figure = figures[i];
    quote.innerHTML = "\"" + item + "\"";
    author.textContent = figure;
});






