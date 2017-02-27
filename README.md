# Watson Text to Speech Demo

Uses IBM Bluemix Text to Speech API to convert text into a wav audio file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1. You will need an IBM Bluemix account.
2. Copy .sample.env into .env and replace dummy credentials with your service credentials.

### Installing

A step by step series of examples that tell you have to get a development env running

1. Install dependencies

    ```
        npm install
    ```

2. Test app

    ```
        npm test
    ```

3. If the tests fail, start an issue here. Otherwise, star the app

    ```
        npm start
    ```

## Running the tests

The application uses mocha tests. The routes are the only component tested at this point.
## Authors

* **Upkar Lidder** - *Initial work*

See also the list of [contributors](https://github.com/lidderupk/watson-text-speech/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## References

* [Watson Speech to Text Demo](https://text-to-speech-demo.mybluemix.net/)
* [Watson Speech to Text Docs](https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/)
* [Watson Speech to Expressive Language](https://www.ibm.com/watson/developercloud/doc/text-to-speech/http.shtml#expressive)
