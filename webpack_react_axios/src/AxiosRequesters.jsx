import React from 'react';
import axios from 'axios';

// If there is just one component in a file, use 'export default'
export class AxiosGetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ posts : res.data });
      })
  }

  componentDidMount() {
      // Alternatively get something here when component mounts instead of
      // clicking a button
  }

  render() {
    return (
        <div>
        <button onClick={this.onClick}>GET posts!</button>
        <ul>
        { this.state.posts.map(post => <li key={'li' + post.title}>{post.title}</li>)}
        </ul>
        </div>
    )
  }
}

export class AxiosPoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      createdUsers: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleChange(event) {
      this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();

      const user = {
        name: this.state.name
      };

      axios.post(`https://jsonplaceholder.typicode.com/posts`, { user })
        .then(res => {
          console.log('Axios response:')
          console.log(res);
          console.log(res.data);
          this.setState({
            name: '',
            createdUsers: [...this.state.createdUsers, res.data.user.name]
          })
        })
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            </label>
            <button type="submit">Add</button>
          </form>
          <ul>
          { this.state.createdUsers.map(user => <li key={'li' + user}>{user}</li>)}
          </ul>
        </div>
      )
    }
  }
