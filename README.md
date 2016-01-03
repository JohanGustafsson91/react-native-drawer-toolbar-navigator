# react-native-drawer-toolbar-navigator

A React Native example for Android that uses Navigation drawer, Toolbar and the navigator for routing.

## Rationale

Since React Native is so new, I haven't found any good tutorial on how to integrate **navigation drawer**, **toolbar** and the **navigator** (as router) for Android.

This repo was created as a project start with these tools integrated. I also included an example on how to use a detail view with it's own toolbar. There is a lot of comments in the code so someone else can understand how it works, built on it and improve it.

### Setup:
* Clone repo
* Run "npm install" in project folder
* Run "react-native run-android" to build app
* Run "react-native start" for packager / server

### Screenshots:

![Alt text](http://gropio.com/stek/file/2gdk2o "Drawer")

![Alt text](http://gropio.com/stek/file/5fmmeb "Example screen with toolbar")

![Alt text](http://gropio.com/stek/file/xzof8k "Detail view")

**Thanks to:**
* https://github.com/oblador/react-native-vector-icons
* https://www.npmjs.com/package/react-native-drawer


## Issues
* I know that the menu button to open the navigation drawer should be to the left in the toolbar (according to Androids design guidelines). As I placed it there, the button/icon was very difficult to press. I suspect that the navigation drawer have some sort of overlay that covers the button a bit. Therefore, I placed it to the right so long while I try to solve the problem when I get time.

* Having trouble finding "bundle.js" when debugging on device?
See issue: http://stackoverflow.com/questions/32572399/react-native-android-failed-to-load-js-bundle
