<!-- # Events-Application

A modern events application built with Node, React and MongoDB. -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Tonyeseh/Events-Application">
    <img src="images/logo.png" alt="Logo" width="120">
  </a>

<h3 align="center">Eventify</h3>

  <p align="center">
    A modern events application built with Node, React and MongoDB.
    <br />
    <a href="https://github.com/Tonyeseh/Events-Application"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Tonyeseh/Events-Application">View Demo</a>
    ·
    <a href="https://github.com/Tonyeseh/Events-Application/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Tonyeseh/Events-Application/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Eventify is a dynamic event sharing application that aims to revolutionize the way people discover, share, and attend events. Whether you're looking for local concerts, art exhibitions, sports games, or community gatherings, Eventify connects you with a vibrant array of events tailored to your interests and location. With intuitive features and a user-friendly interface, Eventify makes exploring and participating in events a seamless and enjoyable experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Express][Express.js]][Express-url]
- [![MongoDB][Mongodb]][Mongo-url]
- [![Redis][Redis]][Redis-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To install Eventify, simply clone the repository and follow the installation instructions in the provided documentation. Eventify is available as a web app only that is accessed easily through your browser.

### Prerequisites

First, install `npm` and `nodejs` to get all install all dependencies.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Tonyeseh/Events-Application.git
   ```
3. Install NPM packages for frontend and backend
   ```sh
   cd backend/ && npm install
   cd frontend/eventify && npm install
   ```
   <!-- 4. Enter your API in `config.js`
      ```js
      const API_KEY = "ENTER YOUR API";
      ``` -->
4. create an `.env` the `backend` folder
   ```sh
   cd backend/ && touch .env
   ```
5. Enter your ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET and UPLOAD_DIR in `.env` for `jwt`
   ```text
   ACCESS_TOKEN_SECRET=ACCESS_SECRET
   REFRESH_TOKEN_SECRET=REFRESH_SECRET
   UPLOAD_DIR=UPLOAD_DIR
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

More screenshot would be added here...

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Event Discovery
- [ ] Personalized Recommendations
- [x] Easy Event Sharing
- [ ] Interactive Event Calendar
- [ ] Real-time Updates
- [ ] Community Engagement

See the [open issues](https://github.com/Tonyeseh/Events-Application/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Eseh Tony - [@esehtony](https://twitter.com/esehtony) - esehtony123@gmail.com

Project Link: [https://github.com/Tonyeseh/Events-Application](https://github.com/Tonyeseh/Events-Application)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Pearl Pereira](https://www.figma.com/@pearlpereira) for the design

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Tonyeseh/Events-Application.svg?style=for-the-badge
[contributors-url]: https://github.com/Tonyeseh/Events-Application/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Tonyeseh/Events-Application.svg?style=for-the-badge
[forks-url]: https://github.com/Tonyeseh/Events-Application/network/members
[stars-shield]: https://img.shields.io/github/stars/Tonyeseh/Events-Application.svg?style=for-the-badge
[stars-url]: https://github.com/Tonyeseh/Events-Application/stargazers
[issues-shield]: https://img.shields.io/github/issues/Tonyeseh/Events-Application.svg?style=for-the-badge
[issues-url]: https://github.com/Tonyeseh/Events-Application/issues
[license-shield]: https://img.shields.io/github/license/Tonyeseh/Events-Application.svg?style=for-the-badge
[license-url]: https://github.com/Tonyeseh/Events-Application/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/esehtony
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com
[Redis]: https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white
[Redis-url]: https://redis.io
