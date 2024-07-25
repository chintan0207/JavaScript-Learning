
fetch("https://fakestor")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.log("Caught an error: ", error.message);
    });


async function fetchData() {
    try {
        const response = await fetch("https://invalid.url");
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Caught an error: ", error.message);
    }
}

fetchData();
