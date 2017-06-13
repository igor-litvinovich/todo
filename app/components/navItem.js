import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <div className={'nav__item' + (this.props.isActive ? ' nav__item_active' : '')} onClick={this._navigate}>
                {this.props.link.title}
            </div>
        );
    }

    _navigate() {
        this.props.navigate(this.props.link)
    }
}
module.exports = NavItem;