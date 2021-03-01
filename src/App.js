import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import marked from 'marked';


const initialSate =`
# heading 1
## heading 2
### heading 3

- list item 1
- list item 2
- list item 3

[visit my git hub](https://https://github.com/Cas147)

this is a inline \`<div><div>\`

**Bolded text**

this is a quote= 
\`\`\`
> Block Quotes!
\`\`\`

![React Logo w/ Text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHQhQ0ZrsjuACsQizD7gpXPFQe5vboAmZWg&usqp=CAU)
`
class  App extends React.Component {
  state ={
    text:initialSate,
  }

  handleChange =(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  render(){
    const {text}=this.state;
    const markdown = marked(text)
    return (
      <div>
        <h1 className="text-center m-4" >Convert your Markdown</h1>
        <div className="row">
            <div className="col-6">
              <h4 className="text-center">Enter you markdown here</h4>
              <textarea className="editor form-control p-2" value={text} onChange={this.handleChange}/>
            </div>
            <div className="col-6">
            <h4 className="text-center">See the result</h4>
            <div className="preview rounded" dangerouslySetInnerHTML={{__html: markdown}}>
            </div>
              </div>
        </div>
      </div>
    );
}
}

export default App;
