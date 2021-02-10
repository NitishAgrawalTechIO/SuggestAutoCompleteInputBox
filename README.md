# SuggestAutoCompleteInputBox

A `react-native` app with text input widget. It enables simple search box to present suggestions as user start typing.

### How it works

![](https://github.com/NitishAgrawalTechIO/SuggestAutoCompleteInputBox/blob/master/demo/demo.gif)

### System requirements

- AndroidStudio
- Android SDK
- XCode
- CocoaPods
- Node
- yarn

For setting up the whole environment for react-native apps, check out [this](https://reactnative.dev/docs/environment-setup).

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/NitishAgrawalTechIO/SuggestAutoCompleteInputBox.git
$ cd SuggestAutoCompleteInputBox
$ git checkout suggest_auto_complete_input_box
$ yarn
```

### Run Apps

Run iOS

```sh
$ npx pod-install
$ yarn ios
```

Run Android

- Run the emulator
- Run the following command

```sh
$ yarn android
```

`Note`: If there will be some issue to run android app then please use Android Studio to run the application.

### Props

| Prop          | Type  | Required | Description                                           |
| ------------- | ----- | -------- | ----------------------------------------------------- |
| searchedData  | Array | true     | It takes the result array of searched data |
| query       | String | false | It takes the string to set in search box.
| getKeyExtractor | fun | false | It return a id to set key extractor for flat list.
| onItemSelected | fun | false | This function calls when suggest item selected.
| getItemText | fun | false | It returns the show able text in case of object.
| onSearchChange | fun   | false    | It gives the current word for getting the suggestions |


### Development

- `Project Structure`: Used different directory to create modular structure to make code more organize, readable and easy to understand.
- `Navigation`: Used react-navigation with stack to manage the flow of the application.
- `Assets`: Use app level assets for this app also can use module level assets for big application. 
- `API`: Create a mock API module which can we replace anytime.
- `Component pattern`: Use both class and functional components. We can go with any one between them.
- `Styling`: Using styleSheet for creating styles instead of in line styling also using styleSheet in the same file but we also can create different file for styleSheet.
- `SafeAreaWithStatusBarView`: Create a reusable component for SafeAreaView and status bar. We can use it for managing multiple themes with status bar in the app.
- `Debounce`: Create a reusable debounce component which are using react native in-build widgets with debounce effect.
- `Search`: Create a reusable search component which we are using in auto complete text input box and also can be use at other places in app.
- `SuggestSearch`: Create a directory for creating a screen. So, at the time of need we can add small screen level components also create a 'component' folder for creating 'AutoCompleteInputSearch'. Also we can create Screen level assets and other directories as per need.

### Improvements

- Can use functional components then class component for global components.
- Set more improved custom eslint rules.
- Can use `babel-plugin` to make import more similar for other classes.
- Can add unit test cases for functions.
- Component can be more reusable for different scenario.