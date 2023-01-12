// Javascript offers two built in ways to send http requests
// - XML HTTP Request
// - Fetch API

// function fetch(){
//     const inputVal = document.getElementById('status-code').ariaValueMax;

//     document.getElementById('status-code').src = `https://http.cat/${inputVal}.jpg`
// }

// fetch('.apiKey.json').then((res) => res.json()).then((data) =>
// {
//     apiKey = data.TheCatAPI
// })

// **/apiKey.jason  -- Look for apiKey with extension and ignore; will gray it out

//fetch('http://example.com/movies.json').then((response) => response.json()).then((data) => console.log(data));

//Use http.garden as next example

function fetch(){

}

function dummy() {
    const image = document.querySelector("my-image");
    fetch('flower.jpg')
        .then((response) => response.blob())
        .then((blob) => {
            const objectURL = URL.createObjectURL(blob);
            image.src = objectURL;
        });
}