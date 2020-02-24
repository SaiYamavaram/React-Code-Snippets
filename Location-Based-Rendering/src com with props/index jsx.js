//import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

const name = "Hello All";
const jsonObj = {text:"hackers"}
var App = () => {
	return (
		<div>
			<p style ={{color:"red",backgroundColor:"black",fontFaminy:"monospace",fontSize:"90px",margin:"14px",padding:"20px",border:"2px solid red",textDecoration:"underline",display:"inlineBlock",float:"right"}}>
				{name}
				{jsonObj.text}
			</p>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));  
