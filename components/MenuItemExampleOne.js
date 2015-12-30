/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the first example screen.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
} = React;

var MenuItemExampleOne = React.createClass({

	render: function() {
		return (
			<View style={styles.container}>
				<Text>
					First example screen
				</Text>
			</View>
		);
	}

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 15
    }
});

module.exports = MenuItemExampleOne;