import React from "react";
import ReactDOM from "react-dom";

function App() {

    const iframe = '<iframe 
    style="border-radius:12px" 
    src="https://open.spotify.com/embed/album/4cL1RFOpTrDP35gmaiRraw?utm_source=generator&theme=0" 
    width="100%" 
    height="152" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
</iframe>'; 

    					{/* <iframe 
						style="border-radius:12px" 
						src="https://open.spotify.com/embed/album/4cL1RFOpTrDP35gmaiRraw?utm_source=generator&theme=0" 
						width="100%" 
						height="152" 
						frameBorder="0" 
						allowfullscreen="" 
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
						loading="lazy">
					</iframe>



  return (
    <div className="App">
      <h1>Iframe Demo</h1>
      <Iframe iframe={iframe} />,
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);