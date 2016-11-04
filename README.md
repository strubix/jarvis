# jarvis

Symfony 2 + Angular 1 project using Web Speech API.

## Getting Started

### Prerequisities

* node
* npm
* webpack
* webpack-dev-server

### Installing


* Front-end

```
cd front
npm install
```

### Development


* Front-end

In backend/app folder :

```
php app/console server:run
```
This win run Symfony server on *http://127.0.0.1:8000/*.

In frontend folder :

```
npm run dev
```
This win run webpack-dev-server on *http://localhost:8080*.

### Compiling

* Front-end

In front folder :
```
npm run build
```
This win run webpack and files would be compiled in dist folder.

## Running the tests

Tests are not implemented yet.

## Author

[**Lucas Strübi**](https://github.com/strubix)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details