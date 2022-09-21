const jokes =[
    {    
        id : 1,
        joke : " Never let your best friends get lonely, keep disturbing them"
    },
    {    
        id : 2,
        joke : "My wallet is like an onion, opening it makes me cry"
    },
    {    
        id : 3,
        joke : "Friends buy you food. Best friends eat your food"
    },
    {    
        id : 4,
        joke : "When nothing is going right, go left"
    }
]
let questionCount = 0;

function loadQuestion(element){

    let joke = document.getElementById('joke')
    let jokess = jokes[questionCount].joke
    joke.innerHTML = jokess
}

loadQuestion()


let btn = document.getElementById('jokeBtn')


function anotherJoke(){
    questionCount++

    if(questionCount<jokes.length){
        loadQuestion()
    }
    else{
        alert('Finished !')
    }
    
}

btn.addEventListener('click',anotherJoke)


