import React, { Component } from 'react';

const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const Paper = require('material-ui/lib/paper');
const TextField = require('material-ui/lib/text-field');
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');
const TimePicker = require('material-ui/lib/time-picker');
const FontIcon = require('material-ui/lib/font-icon');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
const Popover = require('material-ui/lib/popover/popover');

import Item from '../../components/Item';

class CustomerCreateListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      activePopover: null,
      anchorEl: null,

      list: {
        name: 'Lista de Natal',
        date: '12/12/2015',
        time: '14:30',
        items: [
          { name: 'Água Cristal 500ml', description: '6 unidades | R$ 1,75' },
          { name: 'Panetone Bauduco 500g', description: '1 unidade | R$ 18,75' },
          { name: 'Banana 1kg', description: '1 kg | R$ 2,98' },
        ]
      }
    };
  }

  updateDate(e, date) {
    console.log(date);
  }
  updateTime(e, time) {
    console.log(time);
  }

  render() {
    const style = {
      container: {
        padding: 20
      },
      addButton: {
        marginLeft: 10
      }
    };

    return (
      <div>

        <h2>Criar uma Lista</h2>

        <Paper style={style.container}>
          <TextField
            hintText="Nome da Lista"
            />
          <DatePicker
            onChange={this.updateDate.bind(this)}
            hintText="Data da Entrega"
            autoOk={true}
            />
          <TimePicker
            onChange={this.updateTime.bind(this)}
            format="24hr"
            hintText="Hora da Entrega"
            autoOk={true}
            />

          <RaisedButton label="Criar Lista" primary={true} />

        <RaisedButton
            style={style.addButton}
            label="Adicionar Item"
            secondary={true}
            onClick={this.show.bind(this, "pop")}
            />

          <Popover open={this.state.activePopover === 'pop'}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.closePopover.bind(this, 'pop')}>
            <div style={{ padding:20 }}>

              <Item />

            </div>
          </Popover>

        </Paper>

        <Paper style={{ marginTop: 10 }}>
          <List>
            {this.state.list.items.map((item) => {
              return <ListItem
                primaryText={item.name}
                secondaryText={item.description}
                rightIconButton={
                  <span>
                    <FontIcon className="material-icons">edit</FontIcon>
                    <FontIcon className="material-icons">close</FontIcon>
                  </span>}
                  />;
              })}
            </List>
          </Paper>

        </div>
      );
    }
    show(key, e) {
      this.setState({
        activePopover:key,
        anchorEl:e.currentTarget,
      });
    }

    closePopover(key) {
      if (this.state.activePopover !== key)
      return;
      this.setState({
        activePopover:'none',
      });
    }

  }

  export default CustomerCreateListPage;
