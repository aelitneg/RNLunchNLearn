# React Native Lunch & Learn App
This is a simple app designed to provide a crash course on developing in React Native. 

## Environment Setup
***Important:*** These installation instructions are for macOS with a target of iOS. For other OS and targets, see the [React Native Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started).

1. Install [Homebrew](https://brew.sh/):
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    ```
1. Install Node and Watchman via Homebrew:
    ```
    brew install node
    brew install watchman
    ```
1. Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) via the App Store.

1. Install Xcode Command Lines Tools:
    * Open _Xcode_->_Preferences_->_Locations_
    * Select the most recent version of _Command Line Tools_ in the dropdown.
1. Install an iOS Simulator
    * Open _Xcode_->_Preferences_->_Components_
    * Click the download icon next to the most recent iOS simulator in the list
1. Install CocoaPods:
    ```
    sudo gem install cocoapods
    ```

## Install Dependencies
1. Open a _Terminal_ and `cd` into the `RNLunchNLearn` directory. ***Note*** _paths from here are relative to the `RNLunchNLearn` directory._
1. Install server dependencies
    ```
    cd ./server
    npm ci
    ```
1. Install app dependencies
    ```
    cd ./RNLunchNLearnApp
    npm ci
    ```

## Running the Application
1. Start the server
    ```
    cd ./server
    npm run start
    ```
1. ***In a new Terminal tab***, open Metro Builder
    ```
    cd ./RNLunchNLearnApp
    npm run start
    ```
1. ***In a new Terminal tab***, start the app
    ```
    cd ./RNLunchNLearnApp
    npm run ios
    ```

## Google Slides
The accompanying slides for this repo are available [here](https://docs.google.com/presentation/d/1HuwWCiAgbL_M09TcDTNsuweGzKGlImjq6_cFcegTOcc/edit?usp=sharing).

  
