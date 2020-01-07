<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/tsdorsey/iso8601-js">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">ISO8601 Support</h3>

  <p align="center">
    Support for more parts of the iso8601 spec than is provided by the Date object
    <br />
    <br />
    <a href="https://npm.runkit.com/iso8601-support">Try in RunKit</a>
    ·
    <a href="https://github.com/tsdorsey/iso8601-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/tsdorsey/iso8601-js/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
- [Usage](#usage)
  <!-- * [Roadmap](#roadmap) -->
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

The built in support for iso8601 date/times does not include any timezone offset formatting. This was the beginning of the project. The need to foramt a date/time string with offset.

<!-- GETTING STARTED -->

### Installation

With yarn

```sh
yarn add iso8601-support
```

With npm

```sh
npm install iso8601-support
```

<!-- USAGE EXAMPLES -->

## Usage

```javascript
import * as iso8601 from 'iso8601-support';

// Passing no argument uses the current time and local machine offset.
iso8601.toISOStringWithOffset();
// '2019-12-18T03:49:38.282-08:00'

// Passing a date in will use the local machine offset.
iso8601.toISOStringWithOffset(new Date('2018-04-01T00:00:00.000Z'));
// '2018-03-31T17:00:00.000-07:00' (if you're current local offset is UTC-7)

// Passing a date and offset will use that offset instead of the local one.
iso8601.toISOStringWithOffset(new Date('2018-03-31T23:00:00.000Z'), -120);
// '2018-04-01T01:00:00.000+02:00'

// Passing just an offset will use the local time with the given offset.
iso8601.toISOStringWithOffset(undefined, -600);
// '2020-01-08T05:49:41.428+10:00'
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/tsdorsey/iso8601-js/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

This filled a need I had but if you need some other part of the iso8601 spec, add it and open a PR.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Trevor Dorsey - [@tsdorsey](https://twitter.com/tsdorsey) - tsdorsey@gmail.com

Project Link: [https://github.com/tsdorsey/iso8601-js](https://github.com/tsdorsey/iso8601-js)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [TypeScript](https://www.typescriptlang.org/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tsdorsey/iso8601-js.svg?style=flat-square
[contributors-url]: https://github.com/tsdorsey/iso8601-js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tsdorsey/iso8601-js.svg?style=flat-square
[forks-url]: https://github.com/tsdorsey/iso8601-js/network/members
[stars-shield]: https://img.shields.io/github/stars/tsdorsey/iso8601-js.svg?style=flat-square
[stars-url]: https://github.com/tsdorsey/iso8601-js/stargazers
[issues-shield]: https://img.shields.io/github/issues/tsdorsey/iso8601-js.svg?style=flat-square
[issues-url]: https://github.com/tsdorsey/iso8601-js/issues
[license-shield]: https://img.shields.io/github/license/tsdorsey/iso8601-js.svg?style=flat-square
[license-url]: https://github.com/tsdorsey/iso8601-js/blob/master/LICENSE.txt
