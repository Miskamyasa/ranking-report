# GitHub Ranking Report

[Demo](https://ranking.miskamyasa.me)

## Introduction

The GitHub Ranking Report is a web application that generates ranking reports for GitHub users based on their followers. The purpose of this project is to provide a user-friendly interface to retrieve and display information about a GitHub user's followers.

## Features

- Retrieve the list of followers for a given GitHub username up to a specified depth.
- Calculate the followers-rank, which represents the total number of direct and indirect followers.
- Sort the ranking report by username, profile creation date, or followers-rank.
- Pagination control to load the next data page.
- User-friendly dashboard with user avatars, links to user profiles, and profile creation dates.

## Technologies Used

- TypeScript
- React
- Redux
- Redux-Saga
- React-paginate
- Tailwind CSS
- Axios
- ESLint
- Vite
- PNPM

## Installation

1. Clone the repo
```sh
git clone https://github.com/Miskamyasa/ranking-report.git
```

2. Install NPM packages
```sh
npm install
```

3. Generate token
https://github.com/settings/tokens?type=beta

4. Set token to config file `./src/constants/config.ts`


## Usage
Run the project
```sh
npm start
```
Open in browser
http://localhost:4173/

## License

This project is licensed under the MIT License.
