import React, { Component } from 'react';

const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
const Paper = require('material-ui/lib/paper');
const Avatar = require('material-ui/lib/avatar');
const FlatButton = require('material-ui/lib/flat-button');
const RaisedButton = require('material-ui/lib/raised-button');
import Badge from 'material-ui/lib/badge';

export default class HomePage extends Component {
  render() {

    const items = [
      { user: { avatar: 'https://randomuser.me/api/portraits/med/men/20.jpg' }, description: 'Antônio ofereceu fazer a entrega de "Ceia Natal"' },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/women/10.jpg' }, description: 'Monique ofereceu fazer a entrega de "Compras Semanais"' },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/women/90.jpg' }, description: 'Carla ofereceu fazer a entrega de "Ceia Natal"' },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/men/92.jpg' }, description: 'Antônio ofereceu fazer a entrega de "Ceia Natal"' },
    ];
    const doneItems = [
      { user: { avatar: 'https://randomuser.me/api/portraits/med/men/1.jpg' }, description: 'Antônio entregou a lista "Festa da Fran" em 12/02/2015', qualified: true },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/men/13.jpg' }, description: 'Mário entregou a lista "Chá de Bebê" em 10/02/2015', qualified: false },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/women/16.jpg' }, description: 'Carmen entregou a lista "Compras Semanais" em 02/01/2015', qualified: true },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/women/17.jpg' }, description: 'Carmen entregou a lista "Compras Semanais" em 28/12/2014', qualified: true },
      { user: { avatar: 'https://randomuser.me/api/portraits/med/women/18.jpg' }, description: 'Júlia entregou a lista "Final de Ano" em 27/01/2015', qualified: true },
    ];

    return (
      <div>

        <h2>
          Notificações
          <Badge badgeContent={4} secondary={true} badgeStyle={{ top: 18, left:10 }} />
        </h2>

        <Paper style={{ marginBottom: 50 }}>
          <List>
            {items.map((item) => {
              return <ListItem
                disabled={true}
                leftAvatar={<Avatar src={item.user.avatar} />}
                primaryText={item.description}
                rightIconButton={
                  <div>
                    <FlatButton label="Aceitar" primary={true} />
                    <FlatButton label="Cancelar" secondary={true} />
                  </div>
                }
                />;
            })}
          </List>
        </Paper>

        <h2>Listas Recentemente Concluídas</h2>

        <Paper>
          <List>
            {doneItems.map((item) => {
              return <ListItem
                disabled={true}
                leftAvatar={<Avatar src={item.user.avatar} />}
                primaryText={item.description}
                rightIconButton={
                  !item.qualified ? <RaisedButton label="Avaliar" secondary={true} style={{ marginRight: 10 }} /> : null
                }
                />;
            })}
          </List>
        </Paper>

      </div>
    );
  }
}
