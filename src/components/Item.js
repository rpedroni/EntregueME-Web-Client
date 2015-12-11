import React, { Component } from 'react';

import 'whatwg-fetch';

const AutoComplete = require('material-ui/lib/auto-complete');
const RaisedButton = require('material-ui/lib/raised-button');
const TextField = require('material-ui/lib/text-field');
const CircularProgress = require('material-ui/lib/circular-progress');

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      preloadedItems: [],
      selectedLoadedItem: null
    };
  }

  render() {

    let field;
    if (this.state.loading) {
      field = <p><em>Preço Médio:</em><CircularProgress mode="indeterminate" size={0.25} style={{ float: 'right' }} /></p>;
      } else if (this.state.selectedLoadedItem) {
        field = <p><em>Preço Médio:</em> R$ {this.state.selectedLoadedItem.price}</p>;
        } else {
          field = <p><em>Preço Médio:</em> ... </p>;
          }

          // dataSource={this.state.preloadedItems.map(item => item.description)}
          return (
            <div style={{ width: 400, height: 300 }}>
              <AutoComplete
                hintText="Nome do Produto"
                dataSource={[
                  {"Id":"","price":"2.49","address":"RUA FRANCISCO DEROSSO 4693 CURITIBA PR","category":"3","description":"Milho Pipoca T1 - Classe Amarela","amount":"500.0"},
                  {"Id":"","price":"3.49","address":"RUA FRANCISCO DEROSSO 4693 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos \"Renata\" Espag.","amount":"500.0"},
                  {"Id":"","price":"1.99","address":"RUA FRANCISCO DEROSSO 4693 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos Espaguete  ( + Barato )","amount":"500.0"},
                  {"Id":"","price":"2.19","address":"RUA FRANCISCO DEROSSO 4693 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos Parafuso  ( + Barato )","amount":"500.0"},
                  {"Id":"","price":"2.19","address":"RUA GAL. POTIGUARA 2895 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos Parafuso  ( + Barato )","amount":"500.0"},
                  {"Id":"","price":"2.19","address":"AV. BRASILIA 5547 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos Parafuso  ( + Barato )","amount":"500.0"},
                  {"Id":"","price":"2.19","address":"RUA FRANCISCO DEROSSO 2680 CURITIBA PR","category":"4","description":"Macarrao C/ Ovos Parafuso  ( + Barato )","amount":"500.0"},
                  {"Id":"","price":"3.89","address":"RUA FRANCISCO DEROSSO 2680 CURITIBA PR","category":"5","description":"Biscoito Agua e Sal   (+ Barato )","amount":"400.0"},
                  {"Id":"","price":"3.89","address":"RUA FRANCISCO DEROSSO 2680 CURITIBA PR","category":"5","description":"Biscoito Cream Craker  (+ Barato )","amount":"400.0"},
                  {"Id":"","price":"3.29","address":"RUA FRANCISCO DEROSSO 2680 CURITIBA PR","category":"6","description":"Extrato de Tomate \"Cica Elefante\"","amount":"340.0"},
                  {"Id":"","price":"1.99","address":"RUA GAL. POTIGUARA 2895 CURITIBA PR","category":"6","description":"Extrato de Tomate    ( + Barato )","amount":"350.0"}
                ].map(i => i.description)}
                onUpdateInput={(t) => { this.nameChange(t); }}
                onNewRequest={(t, index) => { this.selectLoadedItem(t, index); }}
                style={{ width: '100%' }}
                fullWidth={true}
                />

              {field}

              <TextField hintText="Preço Máximo Aceitável" /><br/>
              <RaisedButton label="Adicionar"  />
              <RaisedButton label="Cancelar" secondary={true} />
            </div>
          );
        }

        nameChange(t) {
          this._fetch(t);
        }

        _fetch(name) {
          this.setState({
            loading: true,
            preloadedItems: []
          });
          fetch('http://54.172.151.38:8080/products?description=' + name)
          .then((response) => {
            return response.json();
          }).then((json) => {
            this.setState({
              loading: false,
              preloadedItems: json
            });
          });
        }

        selectLoadedItem(t, index) {
          console.log(t, index, this.state.preloadedItems[index]);
          this.setState({
            selectedLoadedItem: this.state.preloadedItems[index]
          });
        }

      }
