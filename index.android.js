/**
 * Sample React Native App with Drawer, Toolbar and Navigator
 *
 * This is the second main index file.
 *
 * @author Johan Gustafsson <johan.gustafsson@solidio.se>
 */
'use strict';

var React       = require('react-native');
var Icon        = require('react-native-vector-icons/FontAwesome');

// DrawerLayout components
var Drawer      = require('react-native-drawer');
var DrawerMenu  = require('./components/DrawerMenu');

// Example components
var MenuItemExampleOne                  = require('./components/MenuItemExampleOne');
var MenuItemExampleTwoWithDetailButton  = require('./components/MenuItemExampleTwoWithDetailButton');
var DetailViewExample  = require('./components/DetailViewExample');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ToolbarAndroid,
} = React;

/**
 * Drawer menu items.
 * 
 * You can add all screens info 
 * here if you want.
 */
var MENU_ITEMS = [{
    'title': 'Example screen one',
    'icon': 'mobile',
    'position': 0
}, {
    'title': 'Example screen two',
    'icon': 'info',
    'position': 1
}];

/**
 * Toolbar button for opening drawer menu.
 *
 * @todo [Sets the open drawer toolbar button as
 *       as action because the button gets hard
 *       to press when using the navIcon. 
 *       Maybe the drawer has an overlay or something.]
 * 
 */
var toolbarMenu = [
    {title: 'Menu', icon: require('./images/fa-bars.png'), show: 'always'}
];

var App = React.createClass({

    /**
     * Set default screen
     */
    getInitialState: function() {
        return {
            title: MENU_ITEMS[0].title,
            position: 0
        };
    },

    /**
     * Function that shows a new screen by changing
     * the navigator
     *
     * @param {[type]} position [screen position]
     * @param {[type]} action   [navigator action]
     */
    _showNewScreen: function(position, action) {

        // Set title in main toolbar
        var title = '';
        try {
            title = MENU_ITEMS[position].title;
        } catch (err) {
            // No title, the new screen component
            // has an own toolbar with a title
        }

        this._closeDrawer();

        /**
         * Change screen in navigator.
         */
        switch (action) {
            case 'push':
                this._navigator.push({id: position, title: title});
                return;
            case 'replace':
                this._navigator.replace({id: position, title: title});
                return;
            default:
                this._navigator.replace({id: position, title: title});
                return;
        }
    },

    /**
     * Function that sets a reference to the navigator.
     *
     * @param {[type]} navigator [navigator]
     */
    _setNavigatorRef: function(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;

            if (navigator) {
                var callback = (event) => {
                    /*console.log(
                        `DrawerToolbarNavigator: event ${event.type}`,
                        {
                        route: JSON.stringify(event.data.route),
                        target: event.target,
                        type: event.type,
                        }
                    );*/
                };
                // Observe focus change events from the owner.
                this._listeners = [
                    navigator.navigationContext.addListener('willfocus', callback),
                    navigator.navigationContext.addListener('didfocus', callback),
                ];
            }
        }
    },

    /**
     * Function that renders a new scene.
     * 
     * All screens are listed here as components 
     * and the position in the _showNewScreen() 
     * is mapped to the screen.
     *
     * @param {[type]} route [route]
     * @param {[type]} nav   [navigator]
     */
    _renderScene: function(route, nav) {

        // Main toolbar
        var toolBars = [];
        toolBars.push(
            <View style={styles.toolbarWrapper}>
                <ToolbarAndroid
                    actions={toolbarMenu}
                    onActionSelected={this._openDrawer}
                    style={styles.toolbar}
                    title={route.title} />
            </View>
        );

        switch (route.id) {
            case 0:
                // First example screen
                return (
                    <View style={styles.container}>
                        {toolBars[0]}
                        <MenuItemExampleOne 
                            navigator={nav} 
                            redirect={this._showNewScreen} />
                    </View>
                );
            case 1:
                // Second example screen with button
                // to show a detail view with its on
                // toolbar
                return (
                    <View style={styles.container}>
                        {toolBars[0]}
                        <MenuItemExampleTwoWithDetailButton 
                            navigator={nav} 
                            redirect={this._showNewScreen} />
                    </View>
                );
            case 'detailView':
                // Second example screen with button
                // to show a detail view with its on
                // toolbar
                return (
                    <View style={styles.container}>
                        <DetailViewExample 
                            navigator={nav} 
                            goBack={this._goBack} />
                    </View>
                );
            default:
                // Show first as default
                return (
                    <View style={styles.container}>
                        {toolBars[0]}
                        <MenuItemExampleOne 
                            navigator={nav} 
                            redirect={this._showNewScreen} />
                    </View>
                );
        }
    },

    /**
     * Function that closes the current screen
     * and shows the screen before in the queue.
     */
    _goBack: function () {
        this._navigator.pop();
    },

    /**
     * Function that opens the drawer
     */
    _openDrawer: function() {
        this.refs.drawer.open();
    },

    /**
     * Function that closes the drawer
     */
    _closeDrawer: function() {
        this.refs.drawer.close();
    },


    render: function() {
        return ( 
            <Drawer
                ref="drawer"
                type="overlay"
                content={<DrawerMenu 
                            menuItems={MENU_ITEMS}
                            onSelect={this._showNewScreen} />}
                tapToClose={true}
                openDrawerOffset={0.25}
                panCloseMask={0.2}
                closedDrawerOffset={0}
                styles={{
                    drawer: {
                        shadowColor: '#000000', 
                        shadowOpacity: 0.8, 
                        shadowRadius: 3, 
                        backgroundColor: '#fff', 
                        borderRightWidth: 1,
                        borderRightColor: '#e0e0e0'},
                    main: {paddingLeft: 3}
                }}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
                >
                <Navigator
                    ref={this._setNavigatorRef}                         // Control pushes manually
                    initialRoute={
                        {
                            id: this.state.position, 
                            title: MENU_ITEMS[this.state.position].title
                        }
                    }
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }}
                    renderScene={this._renderScene}                      // Control routes manually
                 /> 
            </Drawer>  
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        backgroundColor: '#f5f5f5',
        height: 56,
    },
    toolbarWrapper: {
        borderBottomColor: '#e0e0e0',
        elevation: 3
    },
    row: {
        flexDirection: 'row',
    }
});

AppRegistry.registerComponent('DrawerToolbarNavigator', () => App);
