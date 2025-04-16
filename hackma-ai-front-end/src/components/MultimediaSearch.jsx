// import React from 'react'

// function MultimediaSearch() {
//   return (
//     <div>MultimediaSearch</div>
//   )
// }

// export default MultimediaSearch


const handleSearch = async (query) => {
  try {
    const response = await fetch(`https://fancy-regal-peony.glitch.me/api/multimedia/youtube?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    console.log("YouTube Results:", data); // Show videos in frontend
  } catch (err) {
    console.error("Search Error:", err);
  }
};
