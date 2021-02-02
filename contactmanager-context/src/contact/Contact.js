import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";
import { Consumer } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      // .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
    } catch (e) {
      console.log("Error");
    }
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // const name = { this.props };
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i onClick={this.onShowClick} className="fas fa-sort-down"></i>
                <i
                  className="fas fa-times float-right"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      fontSize: "22px",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
