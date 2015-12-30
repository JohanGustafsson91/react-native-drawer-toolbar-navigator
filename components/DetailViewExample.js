/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the detail example screen with with its own toolbar.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
} = React;

// Toolbar back button action
var toolbarBackButton = [
    {title: 'Back', show: 'always'}
];

var DetailViewExample = React.createClass({

	/**
	 * You can also pass the title from 
	 * the parent.
	 */
	getInitialState: function() {
		return {
			title: 'Detail view screen'
		};
	},

	/**
	 * Function that handles toolbar
	 * button press.
	 *
	 * @param {[type]} position [position of action]
	 */
	_handleToolbarBtnPress: function (position) {
		if (position === 0) {
			// Go back
			this.props.goBack();
		}
	},

	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.toolbarWrapper}>
	                <ToolbarAndroid
	                	actions={toolbarBackButton}
	                    onActionSelected={this._handleToolbarBtnPress}
	                    style={styles.toolbar}
	                    title={this.state.title} />
	            </View>
				<View style={styles.padding15}>
					<Text>
						Detail screen example. 
						You can click back button or 
						drag the screen down to go back.
					</Text>
				</View>
			</View>
		);
	}

});

var styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    padding15: {
    	padding: 15,
    },
    toolbar: {
        backgroundColor: '#f5f5f5',
        height: 56,
    },
    toolbarWrapper: {
        borderBottomColor: '#e0e0e0',
        elevation: 3
    }
});

module.exports = DetailViewExample;