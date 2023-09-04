async function motivation(){
    const img = document.getElementById('img');
    const quote = document.getElementById('quote');
try {
    
img.src = 'Rolling-1s-61px.svg';
    const data = await fetch('https://catboys.com/api/img');
const response = await data.json();
img.src = response.url;
quote.innerText = response.artist;
console.log(response)
   
} catch (error) {
  throw(err)
}
}