import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Avatar  from 'material-ui/lib/avatar';
import AppBar  from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Badge from 'material-ui/lib/badge';
const RaisedButton = require('material-ui/lib/raised-button');

const Theme = require('../styles/Theme');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');
const FontIcon = require('material-ui/lib/font-icon');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const Popover = require('material-ui/lib/popover/popover');
const Toggle = require('material-ui/lib/toggle');

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
class NavPageWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDelivery: false,
      activePopover: false,
      anchorEl: null
    };
  }

  menuItemSelected(route) {
    this.props.history.pushState(null, route);
  }

  render() {
    const style = {
      header: {
        padding: 10,
        color: 'white',
        textAlign: 'center',
        backgroundColor: !this.state.isDelivery ? Theme.palette.accent1Color : 'rgb(187, 66, 66)'
      },
      listCount: {
        margin: 7
      },
      button: {
        width: 260,
        marginBottom: 5
      },
      container: {
        paddingLeft: 260,
        width: 720
      }
    };

    return (
      <div>
        <LeftNav ref="leftNav" docked={true}>

          <AppBar title="EntregueME" />

          <div style={style.header}>
            <FloatingActionButton mini={true} style={{ float: 'right' }} onClick={this.show.bind(this, "pop")}>
              <FontIcon className="material-icons">build</FontIcon>
            </FloatingActionButton>

            <Popover open={this.state.activePopover === 'pop'}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.closePopover.bind(this, 'pop')}>
              <div style={{padding:20}}>
                <RaisedButton style={style.button} label="Trocar foto de perfil" /><br />
                <RaisedButton style={style.button} label="Adicionar Endereços" primary={true} /><br />
                <RaisedButton style={style.button} label="Ver Minhas Avaliações" secondary={true} /><br />
                <RaisedButton style={style.button} label="Meus Métodos de Pagamento" />
              </div>
            </Popover>

            <Avatar size={100} src="https://randomuser.me/api/portraits/med/women/91.jpg" />
            <h3>Maria Joaquina</h3>
            <p style={style.listCount}>
              {!this.state.isDelivery ? '16 Listas Ativas' : '3 Entregas Abertas' }
            </p>
          </div>

          {this.state.isDelivery ?
            <MenuItem primaryText="Notificações" disabled={true} /> :
            <MenuItem primaryText="Notificações" onClick={() => { this.menuItemSelected(''); }} rightIcon={<Badge badgeContent={4} secondary={true} badgeStyle={{ top: 12, right:12 }} />} />
          }
          {this.state.isDelivery ?
            <MenuItem primaryText="Minhas Entregas" disabled={true} /> :
            <MenuItem primaryText="Criar uma Lista" onClick={() => { this.menuItemSelected('new-list'); }} />
          }
          {this.state.isDelivery ?
            null :
            <MenuItem primaryText="Minhas Listas" onClick={() => { this.menuItemSelected('lists'); }} />
          }

          <MenuItem style={{ marginTop: 10 }} disabled={true}>
            <Toggle
              label={ this.state.isDelivery ? "Quero fazer Compras" : "Quero fazer Entregas" } onToggle={this.goToSeller.bind(this)}
              />
          </MenuItem>

        </LeftNav>

        <div style={style.container}>
          {this.props.children}
        </div>

      </div>
    );
  }

  goToSeller() {
    if (this.state.isDelivery)
    this.props.history.pushState(null, '');
    else
    this.props.history.pushState(null, 'delivery');
    this.setState({
      isDelivery: !this.state.isDelivery
    })
  }

  show(key, e) {
    this.setState({
      activePopover:key,
      anchorEl:e.currentTarget,
    });
  }

  closePopover(key) {
    if (this.state.activePopover !== key)
    return
    this.setState({
      activePopover:'none',
    });
  }

}

export default NavPageWrapper;
