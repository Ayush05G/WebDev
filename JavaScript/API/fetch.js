let btn = document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async() => {
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
    // let fact= await fetchData();
    // console.log(fact);
    // let p= document.querySelector("#result");
    // p.innerText = fact;
});

// let url="https://catfact.ninja/fact";


async function getImage() {
    try {
        let response = await axios.get(url2);
        return response.data.message;
    } catch (error) {
        console.error("Error fetching image:", error);
        return "No image found";
    }
}

// async function fetchData() {
//     try {
//         let response = await axios.get(url);
//         return response.data.fact;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return "No fact found";
//     }
// }


// fetch(url)
// .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//         console.log(data);
//     });
// })
// .catch((err) => {
//     console.log("Error fetching data:", err);
// });