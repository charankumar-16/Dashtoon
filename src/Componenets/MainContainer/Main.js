import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  state = {
    inputIds: [
      { id: 1, imageUrl: '' },
      { id: 2, imageUrl: '' },
      { id: 3, imageUrl: '' },
      { id: 4, imageUrl: '' },
      { id: 5, imageUrl: '' },
      { id: 6, imageUrl: '' },
      { id: 7, imageUrl: '' },
      { id: 8, imageUrl: '' },
      { id: 9, imageUrl: '' },
      { id: 10, imageUrl: '' },
    ],
    id: this.props.id,
    prompt: this.props.prompt,
  };


  componentDidMount() {
    const {id,prompt} = this.props;
    
    // console.log(id);
    // console.log('charan')
    // console.log(prompt);
    // if(prompt.length !==0 && id !== null){
        this.fetchImageData();
    // }
}


query = async (data) => {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: {
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
        );
        const result = await response.blob();
    console.log(result);
    return result;
  };
  updateImageSrc = (id, imageUrl) => {
      this.setState((prevState) => ({
      inputIds: prevState.inputIds.map((item) => (item.id == id ? { ...item, imageUrl } : item)),
    }));
  };
  
  fetchImageData = async () => {
    const { id, prompt } = this.props;
    
    try {    
        const response = await this.query({ inputs: `${prompt}` });
        const imageURL = URL.createObjectURL(response);
        this.updateImageSrc(id, imageURL);        
    } catch (error) {
      console.log('Error fetching image data:', error);
    }
};

render() {
    console.log(this.props);
    console.log(this.state);
    const { inputIds} = this.state;    
    return (
      <div className="all-image-container">
        {inputIds.map((eachItem) => (
          <div className="image-container" key={eachItem.id}>
            {eachItem.imageUrl&&(<img src={eachItem.imageUrl} alt={eachItem.id} className="about-image"/>)}
            {!eachItem.imageUrl && (<p className="check-image">No-Image</p>)}
          </div>
        ))}
      </div>
    );
  }
}

export default Main;