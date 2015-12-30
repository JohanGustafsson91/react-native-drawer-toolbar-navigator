# react-native-drawer-toolbar-navigator

A react native example for Android that uses Drawermenu, Toolbar and the navigator

Screenshots:

![Alt text](http://gropio.com/stek/file/2gdk2o "Drawer")
![Alt text](http://gropio.com/stek/file/5fmmeb "Example screen with toolbar")
![Alt text](http://gropio.com/stek/file/xzof8k "Detail view")


Setup:
- Clone repo
- run "npm install" in project folder
- run "react-native run-android" to build app
- run "react-native start" for packager / server

If you having trouble with "Cant get bundle.js" run:
curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"

while having your server running (react-native start) 

See issue: 
http://stackoverflow.com/questions/32572399/react-native-android-failed-to-load-js-bundle
