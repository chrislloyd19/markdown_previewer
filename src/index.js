import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './App.sass';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({input: e.target.value});
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12" id="title">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="col-sm-6">
          <InputText input={this.state.input} update={this.update}/>
        </div>
        <div className="col-sm-6">
          <DisplayText input={this.state.input}/>
        </div>
      </div>
    )
  }
}

class InputText extends React.Component {
  render() {
    return (
      <textarea
        type="text"
        rows="20"
        onChange={this.props.update}
        value={this.props.input}>
      </textarea>
    )
  }
}

class DisplayText extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: marked(this.props.input, {sanitize: true}) }}>
      </div>
    )
  }
}

ReactDOM.render(
  <MarkdownPreviewer />,
  document.getElementById('root')
);
