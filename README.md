# nodejs-api

Simple Node.js REST API built with Express, deployed via CI/CD to Google Cloud Run.

The app exposes two endpoints: `GET /` returns a hello world response, and `GET /health` is used for health checks.

To run locally, install dependencies with `npm install` then start the server with `npm start`. The app listens on port `8080` by default, configurable via the `PORT` environment variable.

To run tests, use `npm run test:unit` for unit tests, `npm run test:integration` for integration tests, or `npm run test:e2e` for end-to-end tests (requires a running app instance).

On every push to `main`, the CI pipeline runs static analysis via SonarQube, executes unit tests, builds and pushes a Docker image to Artifact Registry tagged with the commit SHA, then runs integration and E2E tests against that image. Once all tests pass, the pipeline automatically updates the development environment in the gitops repository and triggers a deployment.

For staging and production, deployments are promoted manually via the "Promote Image" workflow in the gitops repository.
