import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class Home extends React.Component<RouteComponentProps<any>> {

public render() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <div>
      <button type="button" onClick={() => this.props.history.push('/signin/')}>Sign In</button>
      <button type="button" onClick={() => this.props.history.push('/signup/')}>Sign Up</button>
      </div>
    </div>
  );
}
}
export default withRouter(Home);