# ASP.NET Core 2.1 multi-page Vue.js with TypeScript template

The repository contains template using Vue.js, Vuex, Vue router, TypeScript, Bulma, SASS and Jest. It integrates Vue into AspNetCore MVC and showcases how to use Vue with it's entire ecosystem in .NET as a multipage (multiple mini SPA's) application. The template can also be used as a complete single page application but you should consider using [Vue cli](https://cli.vuejs.org/) for this as it is a more flexible and advanced solution.

---

<p style="text-align:center">
    <a href="#0">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" />
    </a>
    <a href="#0">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs welcome">
    </a>
</p>

## Nuget

- [AspNetCore.Vue.TypeScript.Template](https://www.nuget.org/packages/AspNetCore.Vue.TypeScript.Template)

| Version | Downloads |
| :---: | :---: |
| [![NuGet](https://img.shields.io/nuget/v/AspNetCore.Vue.TypeScript.Template.svg)](https://nuget.org/packages/AspNetCore.Vue.TypeScript.Template) | [![Nuget](https://img.shields.io/nuget/dt/AspNetCore.Vue.TypeScript.Template.svg)](https://nuget.org/packages/AspNetCore.Vue.TypeScript.Template) |

## Table of Contents

- [Features](#features)
- [Prerequisites:](#prerequisites)
- [Installation:](#installation)
- [Creating new project:](#creating-a-new-project)
- [Running newly created project](#running-newly-created-project)
- [Licence](#licence)
- [Screenshots](#screenshots)

## Features

- **ASP NET Core 2.1**
- **Vue.js**
- **Vuex**
- **TypeScript**
- **Bulma**
- **Sass**
- **Jest**
- **Webpack 4**

## Prerequisites

- [.Net Core 2.1 SDK](https://www.microsoft.com/net/download/windows)
- [NodeJS](https://nodejs.org/)

## Installation

In order to create a new project from this template, you must first install it.

Install the template from NuGet by running the following command:

```
dotnet new -i AspNetCore.Vue.TypeScript.Template
```

If successful, you should see the new template in your template list `ASP.NET Core with Vue, Vuex and TypeScript`

## Creating a new project

To create a new project run `dotnet new vuetypescript` command and provide the name of your project as the `-n` or `--name` parameter. If name is not provided, name of the current folder will be used.

Example

```
dotnet new vuetypescript --name TestProject.Web
```

## Running newly created project

In order to run your application, you can just start it from the Visual Studio or by running `dotnet run` command from the console.

> NOTE: When starting the application for the first time, the build might take some time because it will install required npm packages.

## Development, publishing and available commands

Template features the following commands

- `npm run dev` - Builds front end in development mode and watches for any changes made to the files.
- `npm run build:dev` - Builds front end in development mode.
- `npm run build:prod` - Builds front end in production mode.
- `npm run test` - Runs tests under __tests__ folder and generates code coverage report.
- `npm run publish` - Builds production optimized front-end packages and publishes the application in release mode.

## Licence

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/content/LICENSE)

Copyright (c) 2018-Present [Danijel Hrček](https://github.com/DanijelH)

## Screenshots

### Using third-party libraries

![template](https://i.imgur.com/lgF1xEC.jpg)

### VueX store with TypeScript

![template](https://i.imgur.com/KnJk0Cr.png)

### Template info

![template](https://i.imgur.com/8JMIwaW.png)

### Fetching data from external API

![template](https://i.imgur.com/4toIA95.jpg)
