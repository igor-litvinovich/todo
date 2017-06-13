import React from 'react';

class ToDo extends React.Component{
    render() {
        return (
            <div className="todo">
                <div className="todo__title">React ToDo</div>
                <Nav links={this.state.links} activeLink={this.state.activeLink}
                     navigate={this._navigate}/>
                <ToDoSummary remains={this.state.remains} completed={this.state.completed}/>
                <ToDoList tasks={this.state.tasks} areAllComplete={this.state.areAllCompleted}
                          toggleItem={this._toggleItem} toggleAll={this._toogleAll}
                          removeItem={this._removeItem} updateItem={this._updateItem}
                />
                <ToDoForm addItem={this._addItem}/>
                <ToDoClear removeCompleted={this._removeCompleted}/>
            </div>
        );
    }

    getInitialState() {
        return this._getState();
    }

    _getState() {
        const state = {
            remains: todoModel.getActiveCount(),
            completed: todoModel.getCompletedCount(),

            links: navModel.getLinks(),
            activeLink: navModel.getActive()
        };

        state.areAllCompleted = state.remains === 0;

        if (state.activeLink.title === 'All') {
            state.tasks = todoModel.getItems();
        } else if (state.activeLink.title === 'Completed') {
            state.tasks = todoModel.getCompletedItems();
        } else {
            state.tasks = todoModel.getActiveItems();
        }

        return state;
    }

    _rerender() {
        this.setState(this._getState());
    }

    _toggleItem(id) {
        todoModel.toggleItem(id);
        this._rerender();
    }

    _toogleAll() {
        todoModel.switchAllTo(!this.state.areAllCompleted);
        this._rerender();
    }

    _removeItem(id) {
        todoModel.removeItem(id);
        this._rerender();
    }

    _addItem(text) {
        todoModel.addItem(text);
        this._rerender();
    }

    _updateItem(id, text) {
        todoModel.updateItem(id, text);
        this._rerender();
    }

    _removeCompleted() {
        todoModel.removeCompleted();
        this._rerender();
    }

    _navigate(link) {
        navModel.setActive(link);
        this._rerender();
    }
}