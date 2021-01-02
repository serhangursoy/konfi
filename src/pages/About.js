import React from 'react';


export default class About extends React.Component {
    render() {
        return (
            <div className="AboutSection">
                <div className="ImageHolder"> <img alt="Demo" src="https://i.ibb.co/DLNzGjX/Untitled.png" /> </div>
                <h1>About</h1>
                <h3>About Steganography</h3>
                <p>Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection; the secret data is then extracted at its destination. The use of steganography can be combined with encryption as an extra step for hiding or protecting data. The word steganography is derived from the Greek words steganos (meaning hidden or covered) and the Greek root graph (meaning to write).<br />Steganography can be used to conceal almost any type of digital content, including text, image, video or audio content; the data to be hidden can be hidden inside almost any other type of digital content. The content to be concealed through steganography -- called hidden text -- is often encrypted before being incorporated into the innocuous-seeming cover text file or data stream. If not encrypted, the hidden text is commonly processed in some way in order to increase the difficulty of detecting the secret content.</p>
                <h3>About Konfi</h3>
                <p>Konfi is a small project that demonstrates the usage of Steganography algorithms.
                    <br />
                    All you need to do is uploading a photo and defining your message. Rest will be handled by the algorithm.<br />
                    <b> You are not uploading anything to any server - everything happens in the browser, hence, it's secure ( also slow if you upload a huge image ) </b>
                </p>
                <h3> Technical Information </h3>
                <p>
                    For this project, I'm using a quite common technique which is called LSB Replacing. LSB stands for <b>least significant bit</b>. If you are not familiar with bits and bytes, here is an example of how a byte looks like in binary. <br /> <img alt="Bytes" src="https://i.ibb.co/jRw62j3/Untitled.jpg" /><br />
                    What Konfi does is the following:
                    <br />
                    It converts the entire message to Base64 to avoid any conversion loss, then it converts it to bytes hence to its bits. Then, it gets each pixel, breaks each pixel into its channels ( Red, Green, Blue and Alpha ) and breaks down each channel into bits. Once this is done, rest is just replacing each bit with the message's bits. Depending on your content and depending on your style, this process can take a while. Once the process is completed, you can download the file.
                    <br /><br /><b>Beware:</b> <i>I'm exporting images in PNG format. It should <b>always</b> keep it in this format. JPEG and other formats are not a lossless compression. Any compression can result in a break in the message structure. </i>
                </p>
            </div>
        )
    }
}