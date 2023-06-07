import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import  fetchPhotos  from 'components/services/PhotosApi';
import { Loader } from 'components/Loader/Loader';
import css from './App.module.css';
export class App extends Component {
  state = {
    photoText: '',
    page: 1,
    photos: [],
    loading: false,
    error: null,
    showBtn: false,
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.photoText !== this.state.photoText || prevState.page !== this.state.page) {

      this.setState({ loading: true })

         fetchPhotos(this.state.photoText, this.state.page)
           .then(images => this.setState(prevState => ({
             photos: [...prevState.photos, ...images.hits],
             showBtn: this.state.page < Math.ceil(images.totalHits / 12)
           })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));     
    }  
    }

  handleFormSubmit = photoText => {
    this.setState({
      photoText: photoText,
      page: 1,
      photos: [],
    });
     
  }

  onMore = () =>{
    this.setState(prevState => ({
      page: prevState.page + 1,
      
    }));
  
  };

  
  render() {
    
    return(
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.error && <h1>{this.state.error.message}</h1>}
        
        <ImageGallery
        images={this.state.photos}
        />
        <Loader loading={this.state.loading}/>
        <Button showBtn={this.state.showBtn} photos={this.state.photos} click={this.onMore} />
    </div>
  );
  }
  
};



