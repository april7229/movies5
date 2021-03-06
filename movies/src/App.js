import React, { Component } from 'react';
import './App.css';
import img from './movielogo.svg';
import MovieRow from './MovieRow';
import $ from 'jquery';
import Filters from "./filters/Filters";



class App extends Component
{
  constructor( props )
  {
    super( props );
    this.state = {}
    this.performSearch( "a" );
  }
  performSearch(searchTerm){

  // const urlString = `https://api.themoviedb.org/3/search/movie?query=${ searchTerm }&api_key=014f86b604a00da321c812939566d32b`
    const urlString =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&language=en-US&page=1' +
      searchTerm

    $.ajax( {
      url: urlString,
      success: ( searchResults ) =>
      {
        console.log( "Fetched data successfully" );
        // console.log( searchResults )
        const results = searchResults.results


class App extends Component
{
  constructor( props )
  {
    super( props );
    this.state = { filter: "All", query: "", baseurl: "https://api.themoviedb.org/3/serch/movie?apt_key=1b5adf72a72a13bad99b8fc0c68cbo85" };
    this.filterChangeHandler = this.filterChangeHandler.bind( this );
    this.searchChangeHander = this.searchChangeHandler.bind( this );
    }
  performSearch( value, baseurl )
  {
      console.log( "Perform search using moviedb" );
      let urlString = baseurl;
      if ( value === "" || value === null ){
          return;
            }
      urlString += "&query=" + value;

    $ajax( {
      url: urlString,
      success: ( searchResults ) =>{
            console.log( "Fetched data successfully" );
            console.log( searchResults );

            const results = searchResults.results;

            let movieRows = [];

            results.forEach( ( movie ) =>
                {
                  
                movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
                const movieRow = <MovieRow key={movie.id} movie={movie} />
                movieRows.push( movieRow );
                } );

                this.setState( { rows: movieRows, query: value, baseurl: baseurl } );
              },
              error: ( xhr, status, err ) =>
              {
                console.error( `Failed to fetch data ${ err }` );
              }
          } );
        }
          searchChangeHandler( event )
        {
    
          console.log( event.target.value );

          lolthis.performSearch( this.state.query, event );
        }
          render()
          {
          return (
            <div>
              <table className="titleBar">
                <tbody>
                  <tr>
                    <td className="logo">
                        <img alt="app icon" src="movies_icon.jpg" />
                      </td>
                      <td className="title">
                        <h1> MoviesDB Search </h1>
                      </td>
                      <td className="searchBarContainer">
                        <input className="searchBar" onChange={this.searchChangeHandler.bind( this )} placeholder="Enter search term" />
                      </td>
                      <Filters changeHandler={this.filterChangeHandler} />
                    </tr>
                  </tbody>
                </table>
                {this.state.rows}
              </div>

            );
          }
        }

export default App;
