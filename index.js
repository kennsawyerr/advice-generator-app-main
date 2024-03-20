const adviceQuote = document.getElementById("advice-quote");
const adviceId = document.getElementById("advice-id");

//We defined the API URL that we want to call.
//const url = "https://api.adviceslip.com";
const weatherOne = "04d68c6a1f4aa34e68ac1531712939b4";

const slip_id = Math.floor(Math.random() * 199);
const url = `https://api.adviceslip.com/advice/${slip_id}`;


fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
 
    const numberedId = data.slip.id;
    const paragraph = data.slip.advice;
    adviceId.textContent = `ADVICE #${numberedId}`;
    adviceQuote.textContent = `"${paragraph}"`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// my url =	https://api.adviceslip.com/advice/{slip_id}
