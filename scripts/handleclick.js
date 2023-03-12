function handleButtonClick() {
    window.location.href = "#contact";
  
    const fileUrl = "https://drive.google.com/uc?export=download&id=1hmWhgQfvbrO-q0teD4KtJIyFNRgd7n28";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }