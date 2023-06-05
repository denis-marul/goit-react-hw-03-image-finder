import { Component } from "react";
import css from './Serchbar.module.css';
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";
export class Searchbar extends Component {
    state = {
      photoText: '',
    };

  handlePhotoTextChange = e => {
    this.setState({ photoText: e.currentTarget.value.toLowerCase() })
    };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.photoText.trim() === '') {
      alert('Будласка заповніть форму.');
      return;
    }
    this.props.onSubmit(this.state.photoText);
      
    };

    
    render() {
        return <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button className={css.SearchFormButton} type="submit">
              <CiSearch style={{
                width: 40,
                height: 25,
              }} />
    </button>
            <input
              className={css.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      value={this.state.photoText}
      onChange={this.handlePhotoTextChange}
    />
  </form>
</header>
    }
}

Searchbar.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlePhotoTextChange: PropTypes.func.isRequired,
  photoText: PropTypes.string.isRequired,
}