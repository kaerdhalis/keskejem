import axios from 'axios';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class SignUp extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }
    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password,

        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:4000/signup`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
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
                    <h2> Create User </h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to create a new post <br /><br />
                    </div>
                    )}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                            </div>
                    )}
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="firstName"> First Name </label>
                            <input type="text" id="firstName" onChange={(e) => this.handleInputChanges(e)} name="firstName" className="form-control" placeholder="Enter first name" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="lastName"> Last Name </label>
                            <input type="text" id="lastName" onChange={(e) => this.handleInputChanges(e)} name="lastName" className="form-control" placeholder="Enter last name" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="username"> Username </label>
                            <input type="username" id="username" onChange={(e) => this.handleInputChanges(e)} name="username" className="form-control" placeholder="Enter username " />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="password"> Password </label>
                            <input type="password" id="password" onChange={(e) => this.handleInputChanges(e)} name="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <br /><br />
                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Create User
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
export default withRouter(SignUp)