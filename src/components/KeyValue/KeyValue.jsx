import React from 'react';
import styles from './KeyValue.scss';
// TODO: get state passed between Parent and Child
const KeyValue = () => (
    <div className={styles.keyValue}>
        <input type="text" className={styles.keyInput} value={this.state.key} onChange={this.onChange} />
        <input type="text" className={styles.valueInput} value={this.state.value} onChange={this.onChange} />
        <button className={styles.deleteButton} onChange={this.deleteKeyValue}>X</button>
    </div>
);

export default KeyValue;
