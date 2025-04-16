// import React from 'react'

// function FileUpload() {
//   return (
//     <div>FileUpload</div>
//   )
// }

// export default FileUpload


const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://fancy-regal-peony.glitch.me/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log("Upload Success:", data.message);
  } catch (err) {
    console.error("Upload Failed:", err);
  }
};
