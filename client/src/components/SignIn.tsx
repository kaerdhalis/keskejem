
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    username: string,
    password: string
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
    error: string;
}

class SignIn extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            values: [],
            loading: false,
            submitSuccess: false,
            error: '',
        }
    }


    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            username: this.state.username,
            password: this.state.password,

        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:4000/signin`, formData).then(response => [
            setTimeout(() => {
                console.log(response);
                this.props.history.push('/'+formData.username);
            }, 1500)
        ]).catch(error => {
            this.setState({ loading: false });
            if (error.response.status === 401)
                this.setState({ error: "Username or Password is wrong." });
            else if (error.response.status === 400)
                this.setState({ error: "Username or Password is required." });
            else this.setState({ error:"Something went wrong. Please try again later."});
          });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
    })
    }
    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2> Login </h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to login <br /><br />
                    </div>
                    )}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Login successfull
                            </div>
                    )}
                    <form id={"login-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="username"> Username </label>
                            <input type="username" id="username" onChange={(e) => this.handleInputChanges(e)} name="username" className="form-control" placeholder="Enter username " />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="password"> Password </label>
                            <input type="password" id="password" onChange={(e) => this.handleInputChanges(e)} name="password" className="form-control" placeholder="Enter password" />
                        </div>
                        {this.state.error && <><small style={{ color: 'red' }}>{this.state.error}</small><br /></>}<br />
                        <br /><br />
                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Login
                            </button>
                            {loading &&
                                <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }    
}
export default withRouter(SignIn)