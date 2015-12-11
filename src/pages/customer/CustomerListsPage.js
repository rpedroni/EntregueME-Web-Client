import React, { Component } from 'react';

const Paper = require('material-ui/lib/paper');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
const FontIcon = require('material-ui/lib/font-icon');

export default class CustomerListsPage extends Component {
  render() {

    const activeItems = [
      { name: 'Compras da Semana', description: '03/10/2015 - 26' },
      { name: 'Ceia de Natal', description: '24/12/2015 - 14' },
      { name: 'Compras da Semana', description: '10/10/2015 - 9' },
      { name: 'Compras da Semana', description: '03/10/2015 - 26' },
      { name: 'Ceia de Natal', description: '24/12/2015 - 14' },
      { name: 'Compras da Semana', description: '10/10/2015 - 9' },
      { name: 'Ceia de Natal', description: '24/12/2015 - 14' },
      { name: 'Festa da Patty', description: '03/09/2015 - 2' },
      { name: 'Festa da Mandy', description: '03/09/2015 - 2' },
    ];
    const doneItems = [
      { name: 'Festa da Fran', description: '03/09/2015 - 2' },
      { name: 'Festa do Rô', description: '01/09/2015 - 4' },
    ];
    const inactiveItems = [
      { name: 'Compras da Semana', description: '22/09/2015 - 12' },
      { name: 'Compras da Semana', description: '15/09/2015 - 12' },
    ];

    return (
      <div>

        <h2>Minhas Listas</h2>

        <Paper>


          <Tabs style={{ paddingBottom: 10 }}>
            <Tab label="Ativas" >

              <List>
                {activeItems.map((item) => {
                  return <ListItem
                    primaryText={item.name}
                    secondaryText={item.description + ' itens'}
                    rightIconButton={
                      <span>
                        <FontIcon className="material-icons">edit</FontIcon>
                        <FontIcon className="material-icons">close</FontIcon>
                      </span>}
                      />;
                  })}
                </List>

              </Tab>
              <Tab label="Concluídas" >

                <List>
                  {doneItems.map((item) => {
                    return <ListItem
                      primaryText={item.name}
                      secondaryText={item.description + ' itens'}
                      rightIconButton={
                        <span>
                          <FontIcon className="material-icons">edit</FontIcon>
                          <FontIcon className="material-icons">close</FontIcon>
                        </span>}
                        />;
                    })}
                  </List>

                </Tab>

                <Tab label="Inativas">
                  <List>
                    {inactiveItems.map((item) => {
                      return <ListItem
                        primaryText={item.name}
                        secondaryText={item.description + ' itens'}
                        rightIconButton={
                          <span>
                            <FontIcon className="material-icons">edit</FontIcon>
                            <FontIcon className="material-icons">close</FontIcon>
                          </span>}
                          />;
                      })}
                    </List>
                  </Tab>

                </Tabs>

              </Paper>
            </div>
          );
        }
      }
