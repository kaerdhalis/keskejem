
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IFormState {
  username: string;
  books: any[];
  movies: any[];
  videogames: any[];


}

class Dashboard extends React.Component<RouteComponentProps<any>, IFormState> {
  constructor(props: RouteComponentProps) {
      super(props);
      this.state = {
          username: this.props.match.params.username,
          books:[],
          movies:[],
          videogames:[],

      }
  }

  public componentDidMount(): void {
    axios.get(`http://localhost:4000/${this.state.username}/books`).then(response => [
            setTimeout(() => {
                console.log(response);
                this.setState({books: response.data});
            }, 1500)
        ]).catch(error => {
            console.log(error)
          });

          axios.get(`http://localhost:4000/${this.state.username}/movies`).then(response => [
            setTimeout(() => {
                console.log(response);
                this.setState({movies: response.data});
            }, 1500)
        ]).catch(error => {
            console.log(error)
          });

          axios.get(`http://localhost:4000/${this.state.username}/videogames`).then(response => [
            setTimeout(() => {
                console.log(response);
                this.setState({videogames: response.data});
            }, 1500)
        ]).catch(error => {
            console.log(error)
          });



    
}
  public render() {

    const books = this.state.books;  
    const movies = this.state.movies;  
    const videogames = this.state.videogames;    

  return(
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <div><h2>Books</h2>
          <ul>
            {books.map((book, index) => (
                <li key={`${book}-${index}`}>{ book.name }</li>
            ))}
        </ul>
             </div>
          <div>
            <h2>Movies</h2>
            <ul>
            {movies.map((movie, index) => (
                <li key={`${movie}-${index}`}>{ movie.name }</li>
            ))}
        </ul>
            
            </div>
          <div> <h2>Videogames</h2> </div>
          <ul>
            {videogames.map((videogame, index) => (
                <li key={`${videogame}-${index}`}>{ videogame.name }</li>
            ))}
        </ul>
    </div>
    
  );
}
}
export default withRouter(Dashboard)