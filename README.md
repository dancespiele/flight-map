# Flight Map

Example of google maps that connect to api to get the flights

## Requirements

* node > 8
* typescript 3

## How use it

First you need to install and run [flight-map-api](https://github.com/dancespiele/flight-map-api).

Execute the next commands:

* `git clone git@github.com:dancespiele/flight-map.git`
* `cd flight-map`
* `npm install`
* Create a .env file in the root of flight-map directory

```
GOOGLE_API_KEY=[your api key]
```

* `npm run watch`

## Test

* create a .env.test in the test directory

```
GOOGLE_API_KEY=[your api key]
```
* run [flight-map-api](https://github.com/dancespiele/flight-map-api)
* execute `npm test` in the root of flight-map directory