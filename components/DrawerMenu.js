/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the Drawer menu component.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React 	         = require('react-native');
var Icon	         = require('react-native-vector-icons/FontAwesome');
var DrawerMenuItem	 = require('./DrawerMenuItem');

var {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableNativeFeedback,
} = React;


var DrawerMenu = React.createClass({

    /**
     * Set default menu item as active
     */
	getInitialState: function() {
		return {
			screenIndex: 0
		};
	},

    /**
     * Handle menu item press callback
     * from menu item
     *
     * @param {[type]} position [position of menu item]
     */
	_handlePress: function(position) {
        // Set new active
		this.setState({
			screenIndex: position 
		});

        // Change screen
		this.props.onSelect(position, 'replace');
	},

	render: function() {

		// Render menu items
		var items = this.props.menuItems.map(function (item) {
					return <DrawerMenuItem 
								title={item.title}
								position={item.position}
								icon={item.icon}
								key={item.position}
								active={this.state.screenIndex}
								onSelect={this._handlePress} />
				}.bind(this));

		return (
			<View style={styles.container}>
				<View style={styles.drawerHeader}>
					<Text style={styles.appTitle}>App name here</Text>
				</View>
				{items}
			</View>
		);
	}

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    drawerHeader: {
        backgroundColor: '#f5f5f5',
        height: 58,
        marginBottom: 19,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 2,
    },
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
        flex: 2,
        backgroundColor: 'blue',
        fontSize: 14
    },
    appTitle: {
    	fontSize: 20,
    	marginLeft: 16,
    	marginTop: 15
    }
});

module.exports = DrawerMenu;