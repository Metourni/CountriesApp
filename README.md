# Countries app
React Native countries listing app.
## Version
Version Betta  

## Features

## Perspectives
- Search
- Pagination

## Env

  ```bash
  node -v
  v12.14.1
 ```
 
  ```bash
 npm -v
 6.13.4
 ```

## Setup 
1. Clone the project:

  ```bash
  git colne https://github.com/Metourni/CountriesApp.git
  ```

2. Install dependencies:
  > If you're using `npm` run the cmd:

  ```bash
  npm install
  ```
  > If you're using `yarn` run the cmd:

  ```bash
  yarn install
  ```

3. Config the environment :

  ```bash
  // In the file : app/config/index.js
    export const {
        api:{
            // ....
        }
    }
  ```

3. Run the project:

  > If you're using `android` run the cmd:

  ```bash
  npx react-native run-android
  ```
or
 ```bash
  npx yarn android
  ```

  > If you're using `ios` run the cmd:

  ```bash
  npx react-native run-ios
  ```
or
 ```bash
  npx yarn ios
  ```

## Build 
1. Create and then copy a keystore file to android/app:
    Change the value between {} to whatever you want
    
  ```bash
    keytool -genkey -v -keystore {mykeystore}.keystore -alias {mykeyalias} -keyalg RSA -keysize 2048 -validity 10000
  ```
2. Setup your gradle variables in android/gradle.properties:
    
  ```bash
    MYAPP_RELEASE_STORE_FILE=mykeystore.keystore
    MYAPP_RELEASE_KEY_ALIAS=mykeyalias
    MYAPP_RELEASE_STORE_PASSWORD=*****
    MYAPP_RELEASE_KEY_PASSWORD=*****
  ```

3. Add signing config to android/app/build.gradle if not exist:
    
  ```bash
    android {
        signingConfigs {
            release {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
        buildTypes {
            release {
                signingConfig signingConfigs.release
            }
        }
    }
  ```
4. Generate your release APK:
    
  ```bash
    cd android && ./gradlew assembleRelease
  ```
  or 
  ```bash
    npm run apk
  ```
  or 
  ```bash
    yarn apk
  ```

5. If error check this:
    If you you got: Error: Duplicate resources check this solution
    <br>
    https://github.com/facebook/react-native/issues/22234#issuecomment-437812451

6. If you want to build bundle
  
  ```bash
    cd android && ./gradlew bundleRelease
  ```  

7. Testing the release build of your app

  ```bash
    react-native run-android --variant=release
  ```

## Screens

## License

[Duplicate resources issues solution] [https://github.com/facebook/react-native/issues/22234#issuecomment-437812451]
