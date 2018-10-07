import React from 'react';
import styles from './ParentComponent.scss';
import KeyValue from '../KeyValue/KeyValue';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dict: {}};
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(event) {
        // add the key value pair each time there is a change on the form
        this.state.dict = {[event.state.key]: event.state.dict};
    }
  
    onSubmit(event) {
        // output the JSON dictionary to the console's log on submit
        var jsonOutput = JSON.stringify(event.state.dict)
        console.log(jsonOutput);
        event.preventDefault();
    }

    makeKeyValue(event) {
        // render a new KeyValue component
    }

    deleteKeyValue(event) {
        // remove the specified KeyValue component
    }
  
    render() {
        return (
            <div>
                <h2>This is the ParentComponent</h2>
                <form onSubmit={this.onSubmit}>
                    <h3>Add a new KeyValue</h3>
                    <button className={styles.addButton} onClick={this.makeKeyValue}>+</button>
                    {/* Every time the button is pressed it should make a new KeyValue */}
                    <KeyValue />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ParentComponent;
