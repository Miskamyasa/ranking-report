# GitHub Ranking Report

[Demo](https://ranking.miskamyasa.me)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation-and-development)
- [Usage](#usage)
- [License](#license)

## Introduction

The GitHub Ranking Report is a web application that generates ranking reports for GitHub users based on their followers. 
The purpose of this project is to provide a user-friendly interface to retrieve and display information about a GitHub user's followers.

## Features

- Retrieve the list of followers for a given GitHub username up to a specified depth.
- Calculate the followers-rank, which represents the total number of direct and indirect followers.
- Sort the ranking report by username, profile creation date, or followers-rank.
- Pagination control to load the next data page.
- User-friendly dashboard with user avatars, links to user profiles, and profile creation dates.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React-paginate](https://github.com/AdeleD/react-paginate#readme)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [Vite](https://vitejs.dev/)
- [PNPM](https://pnpm.io/)

## Installation and development

1. Clone the repo
```shell
git clone https://github.com/Miskamyasa/ranking-report.git
```

2. Install NPM packages
```shell
npm install
```

3. Generate token
https://github.com/settings/tokens?type=beta

4. Set token to config file `./src/constants/config.ts`


## Usage

Run the project
```shell
npm start
```
Open in browser
http://localhost:4173/

## Contributing

Contributions are always welcome!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

You can use it or reproduce it in any way you want.

```
