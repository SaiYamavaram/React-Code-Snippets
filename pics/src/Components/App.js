import React, { Component } from "react";
// import axios from "axios";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'
export default class App extends Component {
	state = { images: [] };
	// onSearchSubmit(term) {
	// 	console.log(term);
	// 	axios
	// 		.get("https://api.unsplash.com/search/photos", {
	// 			params: { query: term },
	// 			headers: {
	// 				Authorization:
	// 					"Client-ID jyj0jF2JBMq8IvBGME1XlunNj4Akg7m9Tbcj_rUeZdY",
	// 			},
	// 		})
	// 		.then(response => {
	// 			console.log(response.data.results);
	// 		});
	// } this is way of resolving using promise

	 onSearchSubmit = async term => {
		// console.log(term);
		const response = await unsplash.get("search/photos", {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
		console.log(response.data.results);
	};
	render() {
		return (
			<div className='ui container' style={{ margin: 10 }}>
				<SearchBar onSearch={this.onSearchSubmit} />
				<ImageList images ={this.state.images}/>
				{/* <div>we have these no of images {this.state.images.length}</div> */}
			</div>
		);
	}
}
