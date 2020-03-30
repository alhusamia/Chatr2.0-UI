import React,{Component} from "react";
import {connect} from "react-redux";
import {add_message} from "../redux/actions"
class AddButton extends Component {
    state = {
      store: ""
    };
    
    handleChange = event => {    
      this.setState({ store: event.target.value });
    };
    onSubmitForm = event => {
      event.preventDefault();
      this.props.add_message(this.state.store);
      this.setState({ store: "" });
    }
  render() {
      return (
        <div className="col-12 col-sm-12 col-md-12 col-xl-12">
          <div className="form-group col-lg-12 col-12 ">
            <form onSubmit={this.onSubmitForm}>
              <div className="input-group my-3">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.store}
                  onChange={this.handleChange}
                  placeholder="Type a Message..."
                />
                <button
                  typeof="submit"
                
                >
                  <i
                    className="fa fa-plus lg"
                    style={{
                      fontSize: "30px",
                      color: "#000000",
                      cursor: "pointer"
                    }}
                  ></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    add_message: message => dispatch(add_message(message))
  });
  export default connect(null, mapDispatchToProps)(AddButton);
  
  
