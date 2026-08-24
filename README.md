# Tax Calculator Final Project

This repository contains the Tax Calculator app, Jasmine tests, Dockerfile, and Tekton pipeline configuration for the final project.

## Run tests
```bash
npm install
npx jasmine
```

## Build and run locally
```bash
docker build -t tax-calculator .
docker run -d --name tax-calculator -p 8080:80 tax-calculator
```

Then open `http://localhost:8080`.
