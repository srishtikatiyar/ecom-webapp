import React from 'react';
// import './AutoCompleteText.css';
class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items=[
           'Women clothing',
           'Men clothing',
           'Kids SchoolDress',
           'Jwellery',
           'Stationary',
           'Electronics',
            'Books',
            'gadgets',
            'Women Western-Wear',
            'Women Indian-Wear',
            'Cosmetics',
            'Footwear',
            'Men Traditional Attire',
            'Perfumes',
            'Wristwatch',
            'Groceries',
            'Daily-wears',
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
                {suggestion.map((item,index)=><li key={index} style={{cursor:"pointer",color:"black",backgroundColor:"white",position:"relative",zIndex:"2",overflow:"hidden",width:"250px",fontSize:"1rem"}} onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    render(){
        const {text}=this.state;
        return(
            <div className="AutoCompleteText">
                <input style={{boxSizing:"border-box",color:"black", width:"250px",height:"30px",fontSize:"1.2rem"}} value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
                <button style={{margin:"4px",width:"50px",fontSize:"0.9rem",backgroundColor:"rgb(197, 226, 139)",cursor:"pointer" }} >search</button>
            </div>
        );
    }
}
export default AutoCompleteText;