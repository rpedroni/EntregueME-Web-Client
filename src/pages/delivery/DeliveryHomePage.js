import React, { Component } from 'react';

const Paper = require('material-ui/lib/paper');
const FontIcon = require('material-ui/lib/font-icon');

export default class DeliveryHomePage extends Component {
  render() {
    return (
      <Paper style={{ padding: 50 }}>
        <h2 style={{ fontSize: 68, display: 'inline-block', margin: '0 0 10px 10px' }}>Atenção!</h2>
        <FontIcon className="material-icons" style={{ float:'left', fontSize: 70 }}>new_releases</FontIcon>
        <p>Quer ganhar dinheiro fazendo o que você já faz ou ter uma nova fonte de renda?</p>
        <p>Ainda não liberams nossa plataforma para entregadores mas envie um e-mail para a <a href="mailto:ric.pedroni@gmail.com">EntregueME</a> e vamos te deixar atualizado sobre tudo</p>
    </Paper>
  );
}
}
