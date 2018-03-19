import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        term : '',
        location : '',
        sortBy : 'best_match'
      }
      this.handleSortByChange = this.handleSortByChange.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.sortByOptions = {
        'Best Match' : 'best_match',
        'Highest Rated' : 'rating',
        'Most Reviewed' : 'review_count'
      }
      this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortOption) {
    if (this.state.sortBy === sortOption) {
      return 'active'
    } else {return ''}
  };

  handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption})
  }

  handleTermChange(event) {
    console.log(event.target.value);
    this.setState({term:event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location:event.target.value})
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortOption => {
      let sortByOptionValue = this.sortByOptions[sortOption];
      return <li className={this.getSortByClass(sortByOptionValue)}  key={sortByOptionValue}
              onClick={()=>this.handleSortByChange(sortByOptionValue)}>{sortOption}</li>

    })
  };

  handleSearch(event) {
    //console.log(event.target.tagName + this.state.location + this.state.sortBy);
    console.log(this.state.term);
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
             {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a className='hello' onClick={this.handleSearch}>{`Let's Go`}</a>
        </div>
        <div>{this.state.sortBy}</div>
      </div>
    )
  }
}

export default SearchBar;
