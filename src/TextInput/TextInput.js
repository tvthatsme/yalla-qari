import React, { Component } from 'react';
import './TextInput.css';

/**
 * TextInput is for any text entry into the application data
 */
class TextInput extends Component {

  /**
   * Handle keyup event on input element
   */
  handleKeyUp (event) {
    // listen for enter button
    if (event.keyCode === 13) {
      // send the word to the caller and clear the input
      this.props.onInput(event.target.value);
      event.target.value = '';
    }
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className="text-input">
        <input type='text' className="input" onKeyUp={(e) => this.handleKeyUp(e)}/>
      </div>
    );
  }
}

export default TextInput;
