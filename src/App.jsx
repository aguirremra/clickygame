import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images.json";
// import Test from './Test.jsx';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			images,
			isClicked: [],
			score: 0,
			highScore: 0,
			input: "",
			confirm: "Click an image to begin"
		}

		this.imageRender = this.imageRender.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleShuffle(id){
		if(this.state.isClicked.length === 8){
			this.setState({
				score: 0,
				confirm: "You are a winner!",
				highScore: 9
			});
			return;
		}
		let clicked = [...this.state.isClicked];
		let score = this.state.score;
		let highScore = this.state.highScore;
		let maxScore;		

		if(clicked.indexOf(id) !== -1){
			clicked.length = 0;
			score > highScore ? maxScore = score : maxScore = highScore;

			this.setState({
				score: 0,
				confirm: "Whoops, that sucks!",
				isClicked: clicked,
				highScore: maxScore
			});
		}else{			
			clicked.push(id);
			console.log(clicked);			
			score++;
			score > highScore ? maxScore = score : maxScore = highScore;
			
			this.setState({
				score: score,
				images: this.shuffleImages(),
				isClicked: clicked,
				confirm: "Wow, you are awesome!",
				highScore: maxScore
			});
		}
	}

	shuffleImages(){
		let imgArray = this.state.images;
		let i = imgArray.length -1;
		for (; i >0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = imgArray[i];
    imgArray[i] = imgArray[j];
    imgArray[j] = temp;
  	}
  	return imgArray;
	}

	imageRender(){
		return this.state.images.map(image => {
			return (

					<img className="panel" src={image.image} alt={image.id} onClick={() => this.handleShuffle(image.id)}/>

			);
		})
	}

	handleInput(e){
		this.setState({
			input: e.target.value
		});
	}

  render() {
    return (
		<div id="container">
			<div id="header" className="row header">
			  <div className="brand col-sm-4">
			  	<a className="brand" href="/">Clicky</a>
			  </div>
			  <div className="col-sm-4">{this.state.confirm}</div>
			  <div className="col-sm-4">Score: {this.state.score} |   High Score: {this.state.highScore} </div>
			</div>
			<div id="subhead" className="jumbotron">
				<span>Click an image to earn points. Don't click on the same image twice!!!</span>			
			</div>
			<div className="container">
				<div>{this.imageRender()}</div>				
			</div>
		</div>
    );
  }
}

export default App;
