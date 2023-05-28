# Vidstack-Angular

This README provides instructions on how to run an Angular project locally.

## Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager) - usually comes with Node.js installation

## Installation

Follow these steps to set up the Angular project:

1. Clone the project repository from GitHub.

   ```shell
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory.

   ```shell
   cd your-project
   ```

3. Install project dependencies using npm.
   ```shell
   npm install
   ```

## Running the Project

To run the Angular project locally, execute the following command:

```shell
ng serve
```

This command builds the project and starts a local development server. Once the server is running, you can access the project in your browser at `http://localhost:4200/`.

By default, the server watches for any changes in the source files and automatically reloads the application in the browser.

## Additional Commands

Here are some additional commands that you can use with the Angular project:

- `ng test`: Run unit tests using Karma.
- `ng e2e`: Run end-to-end tests using Protractor.
- `ng lint`: Perform code linting using TSLint.
- `ng generate component component-name`: Generate a new component.
- `ng generate service service-name`: Generate a new service.
- `ng generate directive directive-name`: Generate a new directive.
- `ng generate pipe pipe-name`: Generate a new pipe.
- `ng generate module module-name`: Generate a new module.

Refer to the official Angular documentation for more information on these commands and their usage.
