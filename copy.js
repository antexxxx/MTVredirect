const copybutton = document.getElementById("copy")

copybutton.addEventListener("mouseup", () => {
 // Copy the text inside the text field
navigator.clipboard.writeText("http://192.168.0.104:8080/hls/stream.m3u8");

// Alert the copied text
alert("Copied link: http://192.168.0.104:8080/hls/stream.m3u8");
})

copybutton.addEventListener("touchend", () => {
 // Copy the text inside the text field
navigator.clipboard.writeText("http://192.168.0.104:8080/hls/stream.m3u8");

// Alert the copied text
alert("Copied link: http://192.168.0.104:8080/hls/stream.m3u8");
})