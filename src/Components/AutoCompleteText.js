import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import './AutoCompleteText.css';

class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        console.log("props ",this.props);
        console.log("func ",this.props.setStateOfParent);
        this.items=[
           'ClothingWomen',
           'ClothingMen',
           'Stationery',
           'Shoes',
           'Jwellery'
        ];
        this.state={
            suggestion:[],
            text:"",
        };
    }
    onTextChanged=(e)=>{
        const value=e.target.value;
        let suggestion=[];
        if(value.length>0){
            const regex=new RegExp(`^${value}`,'i');
             suggestion=this.items.sort().filter(v=>regex.test(v));
        }
        this.setState(()=>({suggestion,text:value}));
    };
    suggestionSelected(value){
        this.setState(()=>({
            text:value,
            suggestion:[],
        }))
       
    }
    renderSuggestions(){
        const {suggestion}=this.state;
        if(suggestion.length===0){
            return null;
        }
        return(
            <ul style={{listStyleType:"none"}}>
                {suggestion.map((item,index)=><li key={index} style={{cursor:"pointer",color:"black",padding:"5px",position:"relative",zIndex:"2",overflow:"hidden",width:"250px",fontSize:"1.2rem"}} onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render(){
        const {text}=this.state;
        return(
            <div className="AutoCompleteText">
                <input style={{boxSizing:"border-box",color:"black", width:"280px",height:"30px",fontSize:"1rem",borderRadius:"12px",padding:"10px"}} value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
                <Link to={text}><button style={{margin:"4px",width:"100px",height:"30px",fontSize:"0.9rem",backgroundColor:"black",color:"white",cursor:"pointer",borderRadius:"4px" }}  >search</button></Link>
            </div>
        );
    }
}
export default AutoCompleteText;