//import React from 'react'

//function Chatbot() {
  //return (
    //<div>Chatbot</div>
  //)
//}

//export default Chatbot

const handleSendMessage = async (message) => {
  try {
    const response = await fetch("https://fancy-regal-peony.glitch.me/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    console.log("Bot:", data.reply);
  } catch (err) {
    console.error("Chatbot Error:", err);
  }
};
