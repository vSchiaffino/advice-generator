const API_URL = "https://api.adviceslip.com/advice"
const id_element = document.querySelector("#id")
const quote_element = document.querySelector("#quote")

async function fetch_advice(){
    try{
        const response = await fetch(API_URL)
        const json = await response.json()
        id_element.textContent = json.slip.id
        quote_element.textContent = json.slip.advice
    }
    catch(err){
        console.log("Error fetching data from the API: ", err)
    }
}

document.addEventListener("readystatechange", () => {
    fetch_advice()
})