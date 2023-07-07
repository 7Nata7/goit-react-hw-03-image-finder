import { Component } from 'react';
import { fetchImages } from './services/api';

import css from './App.module.css';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { Modal } from './Modal';

const toastConfig = {
  position: 'top-center',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    images: [],
    isLoading: false,
    loadMoreBtn: false,

    modal: { isOpen: false, imgURL: '' },
  };

  onOpenModal = imgURL => {
    this.setState({
      modal: {
        isOpen: true,
        imgURL: imgURL,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        imgURL: null,
      },
    });
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  formSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    const prevSearchQuery = prevState.searchQuery;
    const prevPage = prevState.page;

    if (searchQuery !== prevSearchQuery || prevPage !== page) {
      try {
        this.setState({ isLoading: true });
        const images = await fetchImages(searchQuery, page);

        const totalHits = images.totalHits;
        const totalPages = Math.ceil(totalHits / 12);
        const isMorePages = page < totalPages;

        if (prevSearchQuery !== searchQuery) {
          this.setState({ images: images.hits, loadMoreBtn: isMorePages });
        } else {
          this.setState({
            images: [...prevState.images, ...images.hits],
            loadMoreBtn: isMorePages,
          });
        }

        if (images.hits.length === 0) {
          toast.warn('No images', toastConfig);
        }

        if (page === 1 && images.hits.length > 0) {
          toast.success('Wow! It`s success', toastConfig);
        }

        if (page === totalPages) {
          this.setState({ loadMoreBtn: false });
        }
      } catch (error) {
        this.setState({ error: error.message });
        toast.error('Something get wrong. Please try again', toastConfig);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, loadMoreBtn, modal } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmit} />

        {isLoading && <Loader />}

        <ImageGallery images={images} onOpenModal={this.onOpenModal} />

        {loadMoreBtn && <Button onClick={this.onLoadMore} />}

        {modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            onOpenModal={this.onOpenModal}
            imgURL={modal.imgURL}
          />
        )}
      </div>
    );
  }
}
