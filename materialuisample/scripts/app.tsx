import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppBar, FlatButton, Dialog} from 'material-ui';

interface AppState {
    isDialogOpen: boolean;
}

class App extends React.Component<{}, AppState> {
    constructor(prop: {}) {
        super(prop);
        this.state = { isDialogOpen: false } as AppState;
    }

    private handleClick() {
        this.setState({
            isDialogOpen: true
        } as AppState);
    }

    private handleCloseClick() {
        this.setState({
            isDialogOpen: false
        } as AppState);
    }

    render() {
        return <div>
                <AppBar
                    title='マテリアルUIサンプル'
                    iconElementRight={<FlatButton label='ダイアログ' onClick={this.handleClick.bind(this) } />} />
                <div style={{ margin: '200px 0 0 0', textAlign: 'center'}}>
                    <h1>ダイアログ使ってみた</h1>
                    <Dialog
                        modal={true}
                        title='Sample dialog'
                        actions={[<FlatButton label='閉じる' onClick={this.handleCloseClick.bind(this) } />]}
                        open={this.state.isDialogOpen}>
                        <p>ダイアログを出してみた</p>
                    </Dialog>
                </div>
            </div>;
    }
}

ReactDOM.render(<App />,
    document.getElementById('content'));