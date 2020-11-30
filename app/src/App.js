import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Testimonial from './components/Testimonial';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Testimonial />
        
        <main className="Main">
          <Header className="Header" />
          <section className="CadastroSection">
            <Form />
          </section>
        </main>
      </div>
    );
  }
}
