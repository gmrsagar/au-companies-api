# AU Companies API

Simple API to process diffs from [au-companies-providing-work-visa-sponsorship](https://github.com/geshan/au-companies-providing-work-visa-sponsorship) and push it into an [Airtable](https://airtable.com/shrgB7IeiaGmIkGug).
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


### License

au-companies-api is under [MIT License](LICENSE.md).

---

__Most of the code is taken from [hww-api](https://github.com/poteto/hww-api).__
