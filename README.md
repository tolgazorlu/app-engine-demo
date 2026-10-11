# App Engine Demo

A minimal Express.js "hello world" app for deploying to Google Cloud App Engine.

## About
A small demo built to try out deploying a Node.js server to Google Cloud App Engine (built 2023-03).

## Features
- Single Express route returning a greeting message
- Configured for Google App Engine's standard Node.js runtime

## Tech stack
- Node.js, Express
- Google Cloud App Engine (`app.yaml`)

## Getting started
```bash
npm install
npm start
```
Server listens on `PORT` (default `8080`).

To deploy to Google Cloud App Engine:
```bash
gcloud app deploy
```

## Status
Learning project, not maintained.

## License
MIT, see [LICENSE](LICENSE).
