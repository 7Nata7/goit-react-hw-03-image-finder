import { Component } from 'react';

import css from './App.module.css';

// import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { Modal } from './Modal';
import { fetchImages } from './services/api';


const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}



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
      this.setState({ isLoading: true })
      const { hits } = await fetchImages();
      // console.log(images)
      this.setState({ images: hits })
toast.success('Wow! It`s success', toastConfig)


    } catch (error) {
this.setState({ error: error.message});
toast.error('Something get wrong. Please try again', toastConfig)
    } finally {
      this.setState({ isLoading: false })
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
    const { images, largeImage, modal, isLoading, 
      // loadMore, 
      // error 
    } = this.state;


      
    return (
      <div className={css.App}>

        <Searchbar />
        {isLoading && (
<Loader />
)}

        {/* {error !== null && <p className="errorMessage"></p>} */}
        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
            images={images}
            image={largeImage}
          />
        )}

<Button />
{/* <Modal /> */}


      </div>
      
    )
  }
}