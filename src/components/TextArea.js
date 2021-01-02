import React from 'react'

/**
 * Summary. Super simple TextArea component
 *
 * Description. Simple textarea component to remove ugly looking default one. Check hacky App.css for css details 
 */
export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            textValue: ""
        };
    }

    onInputHandler(event) {
        this.setState({ textValue: event.target.value }, this.props?.onInput(event.target.value));
    }

    render() {
        return (
            <div className="TextareaParent">
                <textarea maxLength={this.props.textMaxLength} className={this.props.isDisabled? "InputTextArea TextDisabled":"InputTextArea"} type="text" placeholder="Your Secret Message" value={this.state.textValue} onInput={this.onInputHandler.bind(this)} />
                <p className="InformationText">This image can only take up to {this.props.textMaxLength} characters. You used {this.state.textValue.length} characters ( not words )</p>
            </div>)
    }
}