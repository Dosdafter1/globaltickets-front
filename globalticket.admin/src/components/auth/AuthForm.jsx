import React, { Component } from 'react';
import './AuthForm.css';
import Login from './pages/Login'
import Registr from './pages/Registr'


class AuthForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'login',
    };
  }

  handleFormSwitch = (newForm) => {
    this.setState({ activeForm: newForm });
  };

  render() {
    return (
      
        <div className="auth-card">
          <div className="buttons-container">
          <button
              onClick={() => this.handleFormSwitch('login')}
              className={this.state.activeForm === 'register' ? 'active' : ''}
            >
              Аутентифікація
            </button>
            <button
              onClick={() => this.handleFormSwitch('register')}
              className={this.state.activeForm === 'login' ? 'active' : ''}
            >
              Реєстрація
            </button>
            {/* Place the forms below the buttons */}
            
          </div>
          <div className="forms-container">
                  {this.state.activeForm === 'login' ? <Login setVisible={this.props.setVisible}/> : <Registr setVisible={this.props.setVisible}/>}
          </div>
        </div>
    );
  }
}

export default AuthForms;
