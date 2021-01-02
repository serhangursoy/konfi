import React from 'react';
import Button from "../components/Button";
import Steganography from '../helpers/Steganography'

export default class ImageDecrypt extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef()
        this.steganObj = null
        this.state = {
            isUploaded: false,
            hiddenText: ""
        };
    }

    onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        var self = this;
        var file = event.target.files[0];
        const canvas = this.canvasRef.current;
        var reader = new FileReader();
        console.log(file)
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                self.steganObj = new Steganography(context, img)
                let hiddenText = self.steganObj.GetHiddenContent()
                self.setState({ hiddenText: hiddenText, isUploaded: true });
            }
        }
        reader.readAsDataURL(file);
    }

    render() {
        let canvasStyle = this.state.isUploaded ? { height: "auto" } : { height: "0px" }
        return (
            <div className="CryptHolder">
                <h2>Reveal Hidden Message</h2>
                <p> If your image includes a hidden message, you can reveal it from here. You can learn more about this in About section.</p>
                <canvas className="ImageCanvas" ref={this.canvasRef} style={canvasStyle} />
                <input id="fileUploadInput" type="file" accept="image/png" ref={(ref) => this.upload = ref} style={{ display: 'none' }}
                    onChange={this.onChangeFile.bind(this)} />
                { this.state.isUploaded && <p style={{width: "100%"}}>Hidden text is: <div className="HiddenTextContainer">{this.state.hiddenText} </div> </p>}
                <Button text="Upload" size="big" onClick={() => { this.upload.click() }}></Button>
                <subtitle>This can take a while if your image is big. Please wait</subtitle>
            </div>
        )
    }
}