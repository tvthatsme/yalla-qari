import React, { Component } from 'react';
import './ReadingSpace.css';

/**
 * ReadingSpace is for the student to practice reading the
 * volcabulary words that they have provided.
 */
class ReadingSpace extends Component {
  /**
   * Get a random integer value between a min and max value
   */
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Take the collection of words, multiply the number, and randomize
   * as best as possible.
   */
  randomize() {
    let string = '';
    const numWords = this.props.words.length;
    const multiply = 20;

    if (numWords > 0) {
      for(let i = 0; i < (numWords * multiply); i++) {
        let random = this.randomIntFromInterval(0, (numWords - 1));
        string += `${this.props.words[random].arabicWord} `;
      }
    } else {
      string = 'Vocabulary words, randomized, and generated will go here.';
    }

    // return the string trimmed
    return string.trim();
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className="ReadingSpace">
        {this.randomize()}
      </div>
    );
  }
}

export default ReadingSpace;