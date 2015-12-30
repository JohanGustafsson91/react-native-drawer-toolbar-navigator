/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the Drawer menu item component.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React 	= require('react-native');
var Icon	= require('react-native-vector-icons/FontAwesome');

var {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableNativeFeedback,
} = React;

var DrawerMenuItem = React.createClass({

	/**
	 * Handle menu item press
	 */
	_handlePress: function() {
		this.props.onSelect(this.props.position);
	},

	render: function() {

		// Set menu item as active or not active
		var menuColor = this.props.position == this.props.active ? "#E91E63" : "#737373";
		var menuColorStyle = {
			color: menuColor,
			fontSize: 14
		};

		return (
			<TouchableNativeFeedback 
				onPress={this._handlePress}
				background={TouchableNativeFeedback.Ripple()} >
				<View style={styles.menuItemWrapper}>
					<View style={styles.menuItemIcon}>
						<Icon name={this.props.icon} size={24} color={menuColor} marginRight={30} />
					</View>
					<View style={styles.menuItemtext}>
						<Text style={menuColorStyle}>
							{this.props.title}
						</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

});

var styles = StyleSheet.create({
    menuItemWrapper: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center'
    },
    menuItemIcon: {
        marginRight: 32
    },
    menuItemtext: {
        flex: 2
    },
});

module.exports = DrawerMenuItem;