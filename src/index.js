import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import TextTruncate from 'react-text-truncate'; // recommend
import Modal from 'react-bootstrap/Modal'
import Collapse from 'react-bootstrap/Collapse';
import commentBox from 'commentbox.io';
import {EmailShareButton,FacebookShareButton,TwitterShareButton} from "react-share";
import {EmailIcon,FacebookIcon,TwitterIcon} from "react-share";
import {MdBookmarkBorder,MdBookmark} from "react-icons/md";
import {IoMdShare,IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import {FaTrashAlt} from "react-icons/fa";
import {IconContext} from "react-icons";
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import {ToastContainer, toast } from 'react-toastify';
import {UncontrolledTooltip} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'react-loader-spinner'
import AsyncSelect from 'react-select/async';


toast.configure()
commentBox('5710594808217600-proj');

function Load(){
	return(
		<React.Fragment>
		<div style = {{textAlign: 'center', marginTop:'300px'}}>
		<Loader type="Puff"
         		color="#00BFFF"
         		height={50}
         		width={50}
         		timeout={10000} />
        </div>
        <div style = {{textAlign: 'center'}}>Loading</div>
      	</React.Fragment>)
}

function Icon(props){
	if(props.value == "bookmark"){
		return (
			<IconContext.Provider value={props.style}>
    				<MdBookmark />
			</IconContext.Provider>);

	}else{
		return (
			<IconContext.Provider value={props.style}>
    				<MdBookmarkBorder />
			</IconContext.Provider>);
	}
}

function Delete(props){
	return(
		<IconContext.Provider value={props.style}>
    				<FaTrashAlt />
		</IconContext.Provider>);
}

function ShowMore(props){
	if(props.value == true){
		return (
			<IconContext.Provider value={props.style}>
    				<IoIosArrowUp />		
			</IconContext.Provider>);
	}else{
		return (
			<IconContext.Provider value={props.style}>
    				<IoIosArrowDown />
			</IconContext.Provider>);
	}
}

function SectionLabel(props){
	if(props.section == "world"){
		return(
			<span style ={{backgroundColor: 'purple',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>World</span>
			)
	}else if(props.section == "politics"){
		return(
			<span style ={{backgroundColor: '#009999',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>Politics</span>
			)
	}else if(props.section == "business"){
		return(
			<span style ={{backgroundColor: '#3399ff',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>Bunsiness</span>
			)
	}else if(props.section == "sports" || props.section == "sport"){
		return(
			<span style ={{backgroundColor: '#e09f40',color: 'black', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>Sports</span>
			)
	}else if(props.section == "technology"){
		return(
			<span style ={{backgroundColor: '#c6e040',color: 'black', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>Technology</span>
			)
	}else if(props.section == "guardian"){
		return(
			<span style ={{backgroundColor: '#0a0b6e',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>Guardian</span>
			)
	}else if(props.section == "nyt"){
		return(
			<span style ={{backgroundColor: '#e7e9ec',color: 'black', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>NYTIMES</span>
			)
	}else if(props.section == ""){
		return(<span style ={{backgroundColor: '#807e7d',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>None</span>);
	}else{
		return(<span style ={{backgroundColor: '#807e7d',color: 'white', padding: '1px', borderRadius: '3px', fontSize: '12px',fontWeight: 'bold', paddingLeft: '3px',paddingRight: '3px'}}>{props.section}</span>);
	}
}


function PopUp(props){
  	const [show, setShow] = React.useState(false);
  	const handleClose = () => {setShow(false)};
  	const handleShow = (event) => {setShow(true); event.stopPropagation();};
  	var author = "";
  	if(props.author !== undefined){
  		author = " | "+ props.author.slice(3, props.author.length-1);
  	}
  	return (
    	<React.Fragment>
     	<button style = {{border: 'none',backgroundColor: 'Transparent'}} variant="primary" onClick={handleShow}>
        	<IconContext.Provider value={{ color: "black", className: "global-class-name", size: "20"}}>
                <div>
                	<IoMdShare />
                </div>
            </IconContext.Provider>
      	</button>

      	<Modal show={show} onHide={handleClose} onClick = {e => e.stopPropagation()}>
        <Modal.Header closeButton>
        <Modal.Title><h5>{props.title + author}</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        	<div style={{textAlign: 'center', fontWeight:'bold', paddingBottom: '14px'}}>Share Via</div>
        	<div style = {{display:'inline-block',textAlign: 'center',width:"33%"}}>
        	<FacebookShareButton url={props.link}>
     			<FacebookIcon size={40} round />
			</FacebookShareButton>
			</div>
			<div style = {{display:'inline-block',textAlign: 'center',width:"33%"}}>
        	<TwitterShareButton url = {props.link}>
        		<TwitterIcon size ={40} round />
        	</TwitterShareButton>
        	</div>
        	<div style = {{display:'inline-block',textAlign: 'center',width:"33%"}}>
        	<EmailShareButton url = {props.link}>
        		<EmailIcon size={40} round/>
        	</EmailShareButton>
        	</div>
        </Modal.Body>
        
      </Modal>
    </React.Fragment>
  )
}

class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    const source = (this.props.source=='nyt')? false:true
    this.state = {checked: source};
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) { 	
    this.setState({ checked });
    this.props.onChange();
  }
 
  render(){
    return (
        <Switch onColor = "#2196F3" 
            offColor = "#c0c7cf"
            checkedIcon = {false}
            uncheckedIcon = {false}
            onChange={this.handleChange} 
            checked={this.state.checked}
            height={22}
            width={40}
            />     
    );
  }
}

class Search extends React.Component {
  	constructor(props, context){
  		super(props,context);
  		this.state = {
  			selectedOption: null
  		}
  	}
 
  	fetchData = (inputValue, callback) => {
  		if(!inputValue){
  			callback({});
  		}else{
  			setTimeout(()=>{
  				fetch('https://api.cognitive.microsoft.com/bing/v7.0/Suggestions?mkt=en-US&q='+inputValue, 
  					{
  					 method:"GET", 
  					 headers:{
  					 	"Ocp-Apim-Subscription-Key": 'd0636c3155a24aa1acb0cfdac48c1d0d'
  					 }})
  				.then((resp) => {
  					return resp.json()
  				})
  				.then((data) => {
  					const tempArray = [];
  					data['suggestionGroups'][0]['searchSuggestions'].forEach((element) => {
  						tempArray.push({label: element.displayText, value: element.displayText});
  					});
  					callback(tempArray);
  				})
  				.catch((e) => {
  					console.log(e)
  				})
  			})
  		}
  	}

  	componentDidUpdate(prevProps, preState){
 		if(prevProps.selectedOption!=this.state.selectedOption&&this.props.selectedOption==null){
 			this.setState({selectedOption:null});
 		}
  	}

  	demoMethod(val){
  		try{
  			this.props.sendData(val);
  		}catch(e){

  		}		
 	}

  	onSearchChange = (selectedOption) => {
  		var obj = {value: selectedOption.value, label: selectedOption.label}
  		if (selectedOption){
  			this.setState({selectedOption: obj});
  			this.demoMethod(obj.value);
  		}
  	}

  	onFocus = () => { this.setState({selectedOption: null }) }
  	
  	render() {
    	return (
      	<div style = {{width:'220px'}}>
        <AsyncSelect
        	value = {this.state.selectedOption}
        	placeholder ="Enter Keyword..."
          	loadOptions={this.fetchData}
          	onChange={(e)=>{this.onSearchChange(e)}}
         	defaultOption={false}
         	cacheOptions={true}
         	onFocus={this.onFocus}
        />
      	</div>
    	);
  	}
}


class App extends React.Component {
  	constructor(props){
    	super(props);
    	this.state = {
      		menu: false,
      		section: "home",
      		source: "nyt",
      		display: "news",
      		searchKey: null,
    	};
    	this.ref = React.createRef();
    	this.toggleMenu = this.toggleMenu.bind(this);
    	this.getData = this.getData.bind(this);
    	this.showBookMark = this.showBookMark.bind(this);
    	this.moveSwitch = this.moveSwitch.bind(this);
    	this.getKeyword = this.getKeyword.bind(this);
  	}

  	updateGrandparent(value){
        this.setState({source:value})
    }

  	createPage(sect, disp){
  		this.setState({section: sect, display: disp, searchKey: null})
  	}

  	toggleMenu(){
    	this.setState({menu: !this.state.menu })
  	}

	getData(val1){
    	this.setState({section:val1, searchKey: null});
	}	

	getKeyword(val){
		if(val!=null){
			this.setState({searchKey: val, display:"search", section: "search"})	
		}
		
	}
	
	showBookMark(){
		if(this.state.display!="bookmark"){
			this.setState({preSect:this.state.section,display:"bookmark"});
		}else if(this.state.preSect=="art"){
			this.setState({display:"article"});
		}else if(this.state.preSect=="search"){
			this.setState({display:"search"});
		}else{
			this.setState({display:"news",section:this.state.preSect});
		}
	}

	moveSwitch(){
		const src = (this.state.source == "nyt")? "guardian" : "nyt";
		this.setState({source: src});
	}

	

  	render() {
		const navStyle={background: 'linear-gradient(to right, #0c0c6a, #0c5cb8)'}
  		const show = (this.state.menu) ? "show" : "" ;
  		const home = (this.state.section == "home") ? "active" : "";
  		const world = (this.state.section == "world") ? "active" : "";
  		const politics = (this.state.section == "politics") ? "active" : "";
  		const business = (this.state.section == "business") ? "active" : "";
  		const tech = (this.state.section == "technology") ? "active" : "";
  		const sports = (this.state.section == "sports") ? "active" : "";
  		const options = [{name: 'Swedish', value: 'sv'}, {name: 'English', value: 'en'}, {name: 'China', value: 'cn'}, {name: 'Germany', value: 'ge'}, {name: 'Japan', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}, {name: 'English', value: 'en'}];
 
  		console.log("app rerendered and display is "+this.state.display+" source is "+this.state.source+" section is "+ this.state.section);
  		console.log("keyword is "+this.state.searchKey)
  		
  		if(this.state.display=="news"){
  			return(
  			<React.Fragment>
    		<nav className="navbar navbar-expand-lg navbar-dark" style = {navStyle}>

    		<Search Style={{width:'350px',margin:'0'}} sendData={this.getKeyword} selectedOption = {this.state.searchKey}/>

    		<button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        		<span className="navbar-toggler-icon"></span>
      		</button>
      	
      		<div className={"collapse navbar-collapse " + show }>
        		<ul className="navbar-nav">
        		<li className="nav-item">
        	  		<a className={"nav-link " + home} href="#" onClick = {() => this.createPage("home","news")}>Home</a>
        	  	</li>
			<li className="nav-item">
          		<a className={"nav-link " + world} href="#" onClick = {() => this.createPage("world","news")}>World</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + politics}  href="#" onClick = {() => this.createPage("politics","news")}>Politics</a>
			</li>
			<li className="nav-item">        		
          		<a className={"nav-link " + business} href="#" onClick = {() => this.createPage("business","news")}>Business</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + tech} href="#" onClick = {() => this.createPage("technology","news")}>Technologies</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + sports} href="#" onClick = {() => this.createPage("sports","news")}>Sports</a>
			</li>
        	</ul>

        	<ul className="navbar-nav ml-auto">
        	<li className="nav-item">
          		<a className="nav-link" href="#" onClick = {this.showBookMark}>
          			<Icon value = {this.state.display} 
          					style = {{color: "white", className: "global-class-name", size: "28"}}/>
          		</a>
          	</li>
          	<li className="nav-item">
          		<span className="navbar-brand">NY Times</span>
          	</li>
          	<li className="nav-item" style={{'paddingTop':'10px', 'paddingLeft':'8px','paddingRight':'8px'}} >
        		<span className = "nav-text"><SwitchExample size = "5" onChange={this.moveSwitch} source = {this.state.source}/></span>
        	</li>
        	<li className="nav-item">
        		<span className="navbar-brand">Guardian</span>
        	</li>
        	</ul>     	
      		</div>   
    		</nav>
    		<Page display = {this.state.display}
    				source = {this.state.source}
    				section = {this.state.section} 
    				display = {this.state.display}
    				handleClick = {() => {this.setState({display:'article'});this.getData();}}
    				sendData={this.getData}
    				updateGrandparent={this.updateGrandparent.bind(this)}
    				searchKey = {this.state.searchKey}/>
    		</React.Fragment>
  			);
  		
  		}else{
  			return(
  			<React.Fragment>
    		<nav className="navbar navbar-expand-lg navbar-dark" style = {navStyle}>
    	
    		<Search Style={{width:'350px',margin:'0'}} sendData={this.getKeyword} selectedOption = {this.state.searchKey}/>

    		<button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        		<span className="navbar-toggler-icon"></span>
      		</button>
      	
      		<div className={"collapse navbar-collapse " + show }>
        		<ul className="navbar-nav">
        		<li className="nav-item">
        	  		<a className={"nav-link " + home} href="#" onClick = {() => this.createPage("home","news")}>Home</a>
        	  	</li>
			<li className="nav-item">
          		<a className={"nav-link " + world} href="#" onClick = {() => this.createPage("world","news")}>World</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + politics}  href="#" onClick = {() => this.createPage("politics","news")}>Politics</a>
			</li>
			<li className="nav-item">        		
          		<a className={"nav-link " + business} href="#" onClick = {() => this.createPage("business","news")}>Business</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + tech} href="#" onClick = {() => this.createPage("technology","news")}>Technologies</a>
			</li>
          	<li className="nav-item">	
          		<a className={"nav-link " + sports} href="#" onClick = {() => this.createPage("sports","news")}>Sports</a>
			</li>
        	</ul>

        	<ul className="navbar-nav ml-auto">
        	<li className="nav-item">
          		<a className="nav-link" href="#" onClick = {this.showBookMark}>
          			<Icon value = {this.state.display} 
          					style = {{color: "white", className: "global-class-name", size: "28"}}/>
          		</a>
          	</li>
        	</ul>     	
      		</div>   
    		</nav>
    		<Page display = {this.state.display}
    				source = {this.state.source}
    				section = {this.state.section} 
    				display = {this.state.display}
    				handleClick = {() => {this.setState({display:'article'});this.getData();}}
    				sendData={this.getData}
    				updateGrandparent={this.updateGrandparent.bind(this)}
    				searchKey = {this.state.searchKey}/>
    		</React.Fragment>
  			);
  			}
  		}
	}


class TabCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.id
		}
	}
	
	demoMethod(){
   		this.props.sendData(this.state.id,this.props.sectionId);
 	}
	
	render(){
		
		return(

		<div style = {{display: 'block', 'textDecoration': 'none', color: 'black',cursor: 'pointer'}}  onClick = {() => {this.props.handleClick(); 
																														this.demoMethod()}}>
		<div className="shadow p-3 mb-3 bg-white" 
			style={{maxWidth: '98%', margin: "auto", marginTop: "1px", marginBottom: "1px"}}>	
  			<Row>
    		<Col sm={3}><img style = {{maxWidth:'100%',width:'auto',maxHeight:'180px',height: 'auto',marginBottom: '10px'}} src={this.props.img}></img></Col>
    		<Col sm={9}>
    		<Col style = {{paddingLeft: '0', paddingRight: '5px'}}>
    		<span style={{display: 'inline-block', fontWeight:'bold'}}>
    		{this.props.title}<PopUp author={this.props.author} title={this.props.title} link={this.props.link}/>
    		</span> 													      												
            </Col>
    		<Col style = {{paddingLeft: '0', paddingRight: '5px',marginTop: '10px',textAlign: 'justify'}}>
				<TextTruncate
    				line={3}
    				element="span"
    				truncateText="…"
    				text={this.props.description}
				/>
			</Col>
    		<Col style = {{paddingLeft: '0', paddingRight: '0', marginTop: '10px'}}>
    			<div className="row">
    				<div className="col" style = {{display:'inline-block'}}><p style = {{fontStyle: 'italic', fontSize: '15px'}}>{(this.props.date).slice(0,10)}</p></div>
   					<div className="col text-right" style = {{display:'inline-block',float:'right'}}><SectionLabel section={this.props.sectionId}/></div>
  				</div>
    		</Col>
    		</Col>
  			</Row>
		</div>
		</div>
		)
	}
}

class SearchCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.id
		}
	}
	
	demoMethod(){
   		this.props.sendData(this.state.id,this.props.sectionId);
 	}

 	render(){
 		return(
 			<Col md={3} style={{paddingBottom:'10px'}} >
				<Card style = {{cursor: 'pointer'}} onClick = {() => {this.props.handleClick(); 
										  this.demoMethod();
										  this.props.updateParent(this.props.source);}}>
				<Card.Body>
				<Card.Text style ={{fontWeight:'bold'}}>
     				<span>
     				<TextTruncate
    				line={2}
    				element="span"
    				truncateText="…"
    				text={this.props.title}
					/>
					<span>	
					<PopUp author={this.props.author} title={this.props.title} link={this.props.link}/>

					</span>
					</span>		
    			</Card.Text>
    			<Card.Img variant="top" src={this.props.img} style = {{padding:'2px'}}/>
    			
    				<div className="row">
    				
    				<div className="col sm-1" style = {{display:'inline-block',marginRight:'0'}}><p style = {{fontStyle: 'italic', fontSize: '15px'}}>{(this.props.date).slice(0,10)}</p></div>
   					<div className="col text-right" style = {{display:'inline-block',float:'right'}}><span><SectionLabel section={this.props.section}/> </span></div>
    				
    				</div>
    			
				</Card.Body>
				</Card>
			</Col>
 			)
 	}
}

class FavoritesCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id:this.props.id
		}
		this.handleClick = this.handleClick.bind(this);
	}

	demoMethod(){
   		this.props.sendData(this.state.id,this.props.sectionId);
 	}

 	handleClick(event){
 		localStorage.removeItem(this.props.id);
 		this.setState({id:"null"});
 		toast("Removing: "+this.props.title,  {position: 'top-center', autoClose: 2000, hideProgressBar:true, className: "toast-info-container"});
 		event.stopPropagation();
 	}

	render(){

		if(this.state.id!="null"){
		return(
			<Col md={3} style={{paddingBottom:'10px'}} >
				<Card style = {{cursor: 'pointer'}} onClick = {() => {this.props.handleClick(); 
										  this.demoMethod();
										  this.props.updateParent(this.props.source);}}>
				<Card.Body>
				<Card.Text style ={{fontWeight:'bold'}}>
     				<span>
     				<TextTruncate
    				line={2}
    				element="span"
    				truncateText="…"
    				text={this.props.title}
					/>
					<span>	
					<PopUp author={this.props.author} title={this.props.title} link={this.props.link}/>
					<a style={{cursor:'pointer'}} onClick={this.handleClick}>
						<Delete style = {{className: "global-class-name", size: "18",color:'black'}}/>
					</a>
					</span>
					</span>		
    			</Card.Text>
    			<Card.Img variant="top" src={this.props.img} style = {{padding:'2px'}}/>
    			
    				<div className="row">
    				
    				<div className="col sm-1" style = {{display:'inline-block',marginRight:'0'}}><p style = {{fontStyle: 'italic', fontSize: '15px'}}>{(this.props.date).slice(0,10)}</p></div>
   					<div className="col text-right" style = {{display:'inline-block',float:'right'}}><span><SectionLabel section={this.props.section}/></span></div>
    				
    				</div>
    			
				</Card.Body>
				</Card>
			</Col>
			)
	}else{
		return(
			<div></div>)
	}
	}
}

class ArticleContent extends React.Component{
	constructor(props){
		super(props);
		this.state = {showText: false };
	}

	render(){
		if(!this.state.showText){
			return(
				<React.Fragment>
				<div style = {{textAlign:'justify'}}>
    			<TextTruncate
    				line={4}
    				element="span"
    				truncateText="..."
    				text={this.props.article}
    				textTruncateChild={
    				<div onClick = {() => this.setState({showText: !this.state.showText })} style = {{padding:'0',display: 'block',cursor: 'pointer',textAlign:'right',marginTop:'10px'}}>
          				<ShowMore value = {this.state.showText} style = {{className: "global-class-name", size: "25"}}/>
          			</div>
          			}
				/>
				</div>				
				</React.Fragment>
				)

		}else{
			return(
				<React.Fragment>
				<p  style = {{textAlign:'justify'}}>{this.props.article}</p>
				<div onClick = {() => this.setState({showText: !this.state.showText })} style = {{padding:'0',display: 'block',cursor: 'pointer',textAlign:'right',marginTop:'10px'}}>
          			<ShowMore value = {this.state.showText} style = {{className: "global-class-name", size: "25"}}/>
          		</div>
				</React.Fragment>)
		}
	}
}

class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bookMark : 'no'
		}
		commentBox('5710594808217600-proj');
		const optionsCursorTrueWithMargin = {followCursor: true, shiftX: 20, shiftY: 0}
		this.addBookMark = this.addBookMark.bind(this)
	}

	componentDidMount() {
        this.removeCommentBox = commentBox('5710594808217600-proj');
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }
    addBookMark(){
    	if(localStorage.getItem(this.props.id)!=null){
    		this.setState({bookMark: 'no'});
    		toast("Removing: "+this.props.title,  {position: 'top-center', autoClose: 2000, hideProgressBar:true, className: "toast-info-container"});
    		localStorage.removeItem(this.props.id)
    	}else{
    		this.setState({bookMark: 'bookmark'})
    		toast("Saving: "+this.props.title,  {position: 'top-center', autoClose: 2000, hideProgressBar:true, className: "toast-info-container"});
    		var words = JSON.stringify([this.props.title, this.props.img, this.props.sectionId, this.props.source, this.props.date,this.props.link]);
    		localStorage.setItem(this.props.id, words)
    	}
    }
	
	render(){
		const add = (localStorage.getItem(this.props.id)!=null)? "bookmark":"no"
		return(
		<React.Fragment>
		<div className="shadow p-3 mb-3 bg-white" 
			style={{maxWidth: '98%', margin: "auto", marginTop: "1px", marginBottom: "1px"}}>
			<Row>
				<Col lg={12}>
					<h5>{this.props.title}</h5>
				</Col>
			</Row>
			<Row>
				<Col sm={10}>
					<p style = {{fontStyle: 'italic'}}>{(this.props.date).slice(0,10)}</p>
				</Col>
				<Col sm={2}>
				<div>
					<FacebookShareButton url={this.props.link} id = "fb">
     					<FacebookIcon size={28} round />
					</FacebookShareButton>
					<UncontrolledTooltip placement="top" target="fb">
        				Facebook
      				</UncontrolledTooltip>
        			<TwitterShareButton url = {this.props.link} id = "twt">
        				<TwitterIcon size ={28} round />
        			</TwitterShareButton>
        			<UncontrolledTooltip placement="top" target="twt">
        				Twitter
      				</UncontrolledTooltip>
        			<EmailShareButton url = {this.props.link} id = "em">
        				<EmailIcon size={28} round/>
        			</EmailShareButton>
        			<UncontrolledTooltip placement="top" target="em">
        				Email
      				</UncontrolledTooltip>
        			<div style = {{float:'right'}}>
        			<a href="#" onClick = {this.addBookMark} style = {{padding:'0'}} id = "share">
          				<Icon value = {add}
          						style = {{ color: "red", className: "global-class-name", size: "32"}}/>
          			</a>
         			<UncontrolledTooltip placement="top" target="share">
        				Bookmark
      				</UncontrolledTooltip>
          			</div>
          		</div>
				</Col>
				<Col sm={1}>				
				</Col>
			</Row>
			<Row>
				<Col>
					<img src = {this.props.img} style={{width:"100%", height: "auto",marginBottom: '15px'}}></img>
				</Col>
			</Row>
			<Row>
				<Col>
				<ArticleContent article = {this.props.article}/>
				</Col>
			</Row>
		</div>
		<div className = "commentbox" id = {this.props.link}/>
		</React.Fragment>)
	}
}


class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			favorites:  localStorage,
			source: this.props.source
		}
		this.getData = this.getData.bind(this);
	}


	updateParent(value) {
        this.props.updateGrandparent(value);
    }

	demoMethod(){
   		this.props.sendData("art");
 	}

	getData(val1,val2){
    	this.setState({id:val1,sectionId:val2});
	}

	removeFavorite(key){
		localStorage.removeItem(key);
		this.setState({favorites: localStorage});
	}
	
	componentDidMount(){
		var adr;
		if(this.props.section == 'home'){
			var section = '/home';
		}else{
			var section = "/tab?section="+this.props.section;
		}
		adr = "https://csci571hw7.us-east-1.elasticbeanstalk.com/"+this.state.source+section;
    	var xhr = new XMLHttpRequest();
  		xhr.open("GET",adr,true);
  		xhr.send();	
  		xhr.onload = function() {
  			var json = JSON.parse(xhr.responseText);
			this.setState({ json });

		}.bind(this);

	}

	componentDidUpdate(nextProps,nextState){
		if (this.props.source !== nextProps.source ||this.props.section !== nextProps.section 
			||this.props.display !== nextProps.display||this.props.searchKey!==nextProps.searchKey) {
			var adr;
			if(this.props.display == "news"){
				if(this.props.section == 'home'){
					var section = '/home';
				}else{
					var section = "/tab?section="+this.props.section;
				}
			adr = "https://csci571hw7.us-east-1.elasticbeanstalk.com/"+this.props.source+section;
			}else if(this.props.display == "search"){
				adr = "https://csci571hw7.us-east-1.elasticbeanstalk.com/"+this.props.source+"/search?key="+this.props.searchKey;
			}else if(this.props.display == "article"){
				adr = "https://csci571hw7.us-east-1.elasticbeanstalk.com/"+this.props.source+"/article?id="+this.state.id;
			}else if(this.props.display == "bookmark"){
				this.setState({favorites: localStorage})
				return
			}
    		var xhr = new XMLHttpRequest();
  			xhr.open("GET",adr,true);
  			xhr.send();			
  			xhr.onload = function() {
  				var json = JSON.parse(xhr.responseText);
				this.setState({ json });
		}.bind(this);}
  	}

	
	render(){
		var sectionList = ["world","politics","sport","business","technology","sports"];
		var cards = [];
		if(this.props.display == "news"){			
			if(this.props.source == "guardian"){
				try{
					var info = this.state.json["response"]["results"];
					for(var i = 0; i < info.length; i++){
						if(sectionList.includes(info[i]["sectionId"])){
							var imgUrl = 'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png';

							if(info[i]['blocks']['main']!==undefined){
								if(info[i]["blocks"]["main"]["elements"][0]["assets"][info[i]["blocks"]["main"]["elements"][0]["assets"].length-1] !== undefined){
									imgUrl = info[i]["blocks"]["main"]["elements"][0]["assets"][info[i]["blocks"]["main"]["elements"][0]["assets"].length-1]['file'];
								}
							}

							cards.push(<TabCard img = {imgUrl}
										title = {info[i]["webTitle"]}
										description = {info[i]["blocks"]["body"][0]["bodyTextSummary"]}
										date = {info[i]["webPublicationDate"]}
										key = {i}
										sectionId = {info[i]["sectionId"]}
										link = {info[i]["webUrl"]}
										id = {info[i]["id"]}
										sendData={this.getData}
										handleClick = {() => {this.props.handleClick();this.demoMethod()}}
										source = {'guardian'}/>);
						}
					}
				}catch(e){
					cards.push(<Load key = {1}/>);
				}
			}else{
				try{
					var info = this.state.json["results"];
					for(var i = 0; i < info.length; i++){
						var imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg';
							if(info[i]['multimedia']!=null){
								for(var j = 0; j < info[i]["multimedia"].length; j++){							
									if(info[i]['multimedia'][j]['width']>=2000){
										imgUrl =  info[i]['multimedia'][j]['url'];
										break;
									}
								}
							}
						if(sectionList.includes(info[i]["subsection"])){
							cards.push(<TabCard img = {imgUrl}
												title = {info[i]["title"]}
												description = {info[i]["abstract"]}
												date = {info[i]["published_date"]}
												sectionId = {info[i]["subsection"]}
												link = {info[i]["url"]}
												author = {info[i]["byline"]}
												id = {info[i]["url"]}
												sendData={this.getData}
												handleClick = {() => {this.props.handleClick();this.demoMethod()}}
												key = {i}
												source = {'nyt'}/>);
						}else if(sectionList.includes(info[i]["section"])){
							cards.push(<TabCard img = {imgUrl}
												title = {info[i]["title"]}
												description = {info[i]["abstract"]}
												date = {info[i]["published_date"]}
												sectionId = {info[i]["section"]}
												link = {info[i]["url"]}
												author = {info[i]["byline"]}
												id = {info[i]["url"]}
												sendData={this.getData}
												handleClick = {() => {this.props.handleClick();this.demoMethod()}}
												key = {i}
												source = {'nyt'}/>);
						}
					}
				}catch(e){
					cards.push(<Load key = {1}/>);
				}
			}
		}else if(this.props.display == "article"){
			try{
				if(this.props.source == "guardian"){
					var info = this.state.json["response"]["content"];
					if(this.state.id==info['id']){
						cards.push(<Article date = {info["webPublicationDate"]}
											img = {info['blocks']["main"]["elements"][0]["assets"][info["blocks"]["main"]["elements"][0]["assets"].length-1]["file"]}
											title = {info["webTitle"]}
											link={info["webUrl"]}
											article={info["blocks"]["body"][0]["bodyTextSummary"]}
											key = {1}
											id = {this.state.id}
											section = {this.props.section}
											source = {this.props.source}
											sectionId = {this.state.sectionId}/>);
					}else{
						cards.push(<Load key = {1}/>);
					}

				}else{
					var info = this.state.json['response']['docs'][0];
					if(this.state.id==info['web_url']){
						var imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg';
						for(var i = 0; i<info["multimedia"].length; i++){							
							if(info['multimedia'][i]['width']>=2000){
								imgUrl =  "https://static01.nyt.com/"+info['multimedia'][i]['url'];
								break;
							}
						}
						cards.push(<Article date = {info["pub_date"]}
											img = {imgUrl}
											title = {info["headline"]["main"]}
											link = {info["web_url"]}
											article = {info["abstract"]}
											key = {1}
											id = {this.state.id}
											section = {this.props.section}
											source = {this.props.source}
											sectionId = {this.state.sectionId}/>)
					}else{
						cards.push(<Load key = {1}/>);
					}
				}
			}catch(e){
				cards.push(<Load key = {1}/>);
			}
		}else if(this.props.display == "bookmark"){
			try{
				var articles = this.state.favorites;
				for(var i = 0; i < articles.length; i++){
					var info = JSON.parse(localStorage.getItem(localStorage.key(i)));
					var title = info[0];
					var img = info[1];
					var section = info[2];
					var source = info[3];
					var date = info[4];
					var link = info[5];
					cards.push(<FavoritesCard   title = {title}
												img={img}
												section={section}
												source={source}
												id={localStorage.key(i)}
												date={date}
												handleClick = {() => {this.props.handleClick();this.demoMethod();}}
												sendData={this.getData}
												link ={link}
												updateParent={this.updateParent.bind(this)}/>)
				}
				return(
					<React.Fragment>
					<h4 style={{paddingLeft: '20px',paddingTop:'15px',marginBottom:'0'}}>Favorites</h4>
					<Row style={{padding: '8px 20px'}}>
						{cards}
					</Row>
					</React.Fragment>)
			}catch(e){
				cards.push(<Load key = {1}/>);
			}
		}else{
			try{
				if(this.props.source == "guardian"){
					var info = this.state.json["response"]["results"];
					if(info.length >= 10){
						for(var j = 0; j < info.length; j++){
							var imgUrl = 'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png';

							if(info[j]['blocks']['main']!==undefined){
								if(info[j]["blocks"]["main"]["elements"][0]["assets"][info[j]["blocks"]["main"]["elements"][0]["assets"].length-1] !== undefined){
									imgUrl = info[j]["blocks"]["main"]["elements"][0]["assets"][info[j]["blocks"]["main"]["elements"][0]["assets"].length-1]['file'];
								}
							}
							cards.push(<SearchCard   title = {info[j]['webTitle']}
												img={imgUrl}
												section={info[j]['sectionId']}
												source={this.props.source}
												id={info[j]['id']}
												date={info[j]['webPublicationDate']}
												handleClick = {() => {this.props.handleClick();this.demoMethod();}}
												sendData={this.getData}
												link ={info[j]['webUrl']}
												updateParent={this.updateParent.bind(this)}/>)
						}
					}

				}else{
					var info = this.state.json["response"]["docs"];
					if(info.length >= 10){
						for(var j = 0; j < info.length; j++){
							var imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg';
							for(var i = 0; i < info[j]["multimedia"].length; i++){							
								if(info[j]['multimedia'][i]['width']>=2000){
									imgUrl =  "https://static01.nyt.com/"+info[j]['multimedia'][i]['url'];
									break;
								}
							}
							cards.push(<SearchCard   title = {info[j]['headline']['main']}
												img={imgUrl}
												section={info[j]['news_desk']}
												source={this.props.source}
												id={info[j]['web_url']}
												date={info[j]['pub_date']}
												handleClick = {() => {this.props.handleClick();this.demoMethod();}}
												sendData={this.getData}
												link ={info[j]['web_url']}
												updateParent={this.updateParent.bind(this)}/>)
						}
					}
				}
				return(
					<React.Fragment>
					<h4 style={{paddingLeft: '20px',paddingTop:'15px',marginBottom:'0'}}>Results</h4>
					<Row style={{padding: '8px 20px'}}>
						{cards}
					</Row>
					</React.Fragment>)				
			}catch(e){
				cards.push(<Load key = {1}/>);
			}
		}
		return(
			<div>
			{cards}
			</div>)
	}
}

ReactDOM.render(  <App />, document.getElementById('root'));


