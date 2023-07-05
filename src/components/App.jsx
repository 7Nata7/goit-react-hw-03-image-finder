import { Component } from 'react';
import css from './App.module.css';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
// import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { Modal } from './Modal';
import { fetchImages } from './services/api';

export class App extends Component {
state = {
  modal: { isOpen: false, visibleData: null },
  images: {},
  isLoading: false,
  error: null,
}

onOpenModal = data => {
  this.setState({
    modal: {
      isOpen: true,
            visibleData: data
    }
  })
}

onCloseModal = () => {
  this.setState({
      modal: {
        isOpen: false,
              visibleData: null
      }
    })
  }

  async componentDidMount() {
    try {
      const { hits } = await fetchImages();
      // console.log(images)
      this.setState({ images: hits })
    } catch (error) {

    } finally {

    }
  }
// async componentDidMount() {
//   const response = await axios.get("/search?query=react");
//   this.setState({ images: response.data.hits });
// }

// async componentDidMount() {
//   this.setState({ isLoading: true });
//   const response = await axios.get("/search?query=react");
//   this.setState({
//     articles: response.data.hits,
//     isLoading: false,
//   });
// }

  render() {
    // const { images, isLoading, error } = this.state;
    // const { images } = this.state;
    const { images, largeImage, 
      // showModal, 
      // isLoading, 
      // loadMore, 
      error } =
      this.state;
    return (
      <div className={css.App}>
        
        <Searchbar />

        {error && (
          <p className="errorMessage">Whoops, something went wrong: {error}</p>
        )}
        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
            images={images}
            image={largeImage}
          />
        )}

{/* <ImageGallery 
// images={this.state.images}
images={images}
/> */}
{/* <ImageGallery images={images} onOpenModal={this.onOpenModal} /> */}

{/* {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )} */}


{/* <Loader /> */}
<Button />
{/* <Modal /> */}


      </div>
    )
  }
}