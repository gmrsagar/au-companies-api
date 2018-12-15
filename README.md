# Tech Companies in Nepal API

Simple API to process diffs from [tech-companies-in-nepal](https://github.com/mesaugat/tech-companies-in-nepal) and push it into an [Airtable](https://airtable.com/shrXv3YvlfxLnHJfr).

### Installation

Clone the repository and install dependencies using [yarn](https://yarnpkg.com/en/)

```bash
$ git clone git@github.com:mesaugat/tech-companies-in-nepal-api.git

$ cd tech-companies-in-nepal-api

$ yarn
```

### For Production Environment

```bash
export PORT=4444
export AIRTABLE_BASE='dummy'
export AIRTABLE_API_KEY='dummy'
export GITHUB_WEBHOOK_SECRET='dummy'
```

Set the following environment variables and start the application using `yarn start`

### For Test Environment

```bash
$ cp .env.example .env
```

Make a copy of `.env.example` as `.env`, update the API keys and test the application using `yarn test`

### Scripts

The following commands are available:

|Name        |Description                                                                                   |
|------------|----------------------------------------------------------------------------------------------|
|start       | Start application                                                                            |
|lint        | Run linter                                                                                   |
|lint:fix    | Run linter and try to fix errors                                                             |
|test        | Run tests

Run a command using `yarn <command:name>`

### Contributing

For contribution and feature requests, please create an [issue](https://github.com/mesaugat/tech-companies-in-nepal-api/issues/new) first.

### License

tech-companies-in-nepal-api is under [MIT License](LICENSE.md).

---

__Most of the code is taken from [hww-api](https://github.com/poteto/hww-api).__
