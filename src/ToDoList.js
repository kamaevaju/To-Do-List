import { Component } from "react";

export class BusinessList extends Component{
    state = {
        userInput: '',
        BusinessList: [],
    }
    onChangeEvent(e){
        this.setState({userInput: e});   
    }
    addItem(input){
        if(input===''){
            alert("Enter something in your list")
        }
        else{
        let listArray = this.state.BusinessList;
        listArray.push(input);
        this.setState({BusinessList : listArray, userInput: ''});
        }
    }
    deleteItem(){
        let listArray = this.state.BusinessList;
        listArray = [];
        this.setState({BusinessList: listArray })
    }
    crossedWord(e){
        const li = e.target;
        li.classList.toggle('crossed')
    }
    onFormSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
              <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text"
                    placeholder="What are your plans?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)} }
                    value={this.state.userInput} />
                </div>

                <div className="buttons">
                    <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
                    <button className="btn delete" onClick={()=> this.deleteItem()}>Delete</button>
                </div>

                <ul>
                    {this.state.BusinessList.map((item, index) =>(
                        <li onClick={this.crossedWord} key={index}>⚪ {item}</li>
                    ))}
                </ul>
              </form>
            </div>
        )
    }
}
