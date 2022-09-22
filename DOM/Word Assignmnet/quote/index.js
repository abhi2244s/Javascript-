       // Fetching the quotes from the type.fit API using promises
       fetch("https://type.fit/api/quotes")
       .then(function(response) {
           return response.json(); 
       }) // Getting the raw JSON data
       .then(function(data) {
     
           // Storing the quotes internally upon 
           // successful completion of request
          this.data  = data
     
           // Displaying the quote When the Webpage loads
           displayQuote() 
   });
   function displayQuote(){
    let  index = Math.floor(Math.random()*data.length);
    let quoteText = data[index].text;
    let quoteAuthor = data[index].author;
  
    let para1 = document.getElementById('para1')
    para1.innerHTML = "Quote is : " +quoteText;
    let para2  = document.getElementById('para2')
    para2.innerHTML = "Author is : " + quoteAuthor
    console.log(quoteText)
    console.log(quoteAuthor)
   }
   function generate(){
    
   }