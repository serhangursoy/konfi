# Konfi
##### Simple Steganography example with React JS
Konfi is really simple demo of LSB replacing to achieve basic version of Steganography.

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)]()
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]()
![](https://i.ibb.co/DLNzGjX/Untitled.png)
# About
### About Steganography
Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection; the secret data is then extracted at its destination. The use of steganography can be combined with encryption as an extra step for hiding or protecting data. The word steganography is derived from the Greek words steganos (meaning hidden or covered) and the Greek root graph (meaning to write).  
Steganography can be used to conceal almost any type of digital content, including text, image, video or audio content; the data to be hidden can be hidden inside almost any other type of digital content. The content to be concealed through steganography -- called hidden text -- is often encrypted before being incorporated into the innocuous-seeming cover text file or data stream. If not encrypted, the hidden text is commonly processed in some way in order to increase the difficulty of detecting the secret content.

### About Konfi

Konfi is a small project that demonstrates the usage of Steganography algorithms.  
All you need to do is uploading a photo and defining your message. Rest will be handled by the algorithm.  
**You are not uploading anything to any server - everything happens in the browser, hence, it's secure ( also slow if you upload a huge image )**

### Technical Information

For this project, I'm using a quite common technique which is called LSB Replacing. LSB stands for **least significant bit**. If you are not familiar with bits and bytes, here is an example of how a byte looks like in binary.  
![](https://i.ibb.co/jRw62j3/Untitled.jpg)  
What Konfi does is the following:  
It converts the entire message to Base64 to avoid any conversion loss, then it converts it to bytes hence to its bits. Then, it gets each pixel, breaks each pixel into its channels ( Red, Green, Blue and Alpha ) and breaks down each channel into bits. Once this is done, rest is just replacing each bit with the message's bits. Depending on your content and depending on your style, this process can take a while. Once the process is completed, you can download the file.  

**Beware:** _I'm exporting images in PNG format. It should **always** keep it in this format. JPEG and other formats are not a lossless compression. Any compression can result in a break in the message structure._

# Getting Started
## Available Scripts

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# What next?
I have several things in mind. 
- Cleaning. The current version of the code is quite messy.
- I'm planning to add several more functionalities to this. Currently, data is not encrypted - the main reason for this is that I require encryption key from users otherwise if I embed this inside the app, it will be exposed anyways. I can give the possibility for users to define their own predetermined keys to lock and unlock the messages. AES could be a way to go
- Extending functionality into 2 bits rather than 1 bit. So that it can hold more information.
- Adjusting the headers so that we can put information in any arbitrary location in the data
- Creating blocks of data, chaining them, so that without properly reading the chain, data will be a mess