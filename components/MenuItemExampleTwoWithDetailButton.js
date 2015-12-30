/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the second example screen with detail button
 * to show a detail view with its own toolbar.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
} = React;

var MenuItemExampleTwoWithDetailButton = React.createClass({

	/**
	 * Function that shows the detail screen.
	 */
	_showDetailScreen: function () {
		this.props.redirect('detailView', 'push');
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text>
					Second example screen with detail button
				</Text>
				<TouchableNativeFeedback 
				onPress={this._showDetailScreen}
				background={TouchableNativeFeedback.Ripple()} >
					<View style={styles.button}>
						<Text style={styles.buttonText}>
							Show Detail View
						</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 15
    },
    button: {
    	marginTop: 15,
    	padding: 15,
    	backgroundColor: '#2196F3',
    	justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
    	color: '#FFF' 
    }
});

module.exports = MenuItemExampleTwoWithDetailButton;