# Semester-Project2

# Semester Project 2

https://github.com/Ingsy/SemesterProject2.git

This is a Auction Site

## Acknowledgements

- [Color Palettes](https://gillde.com/56-beautiful-color-palettes-for-your-next-design-project/)
- [Free photos for testing - Pexels](https://www.pexels.com/nb-no/)
- [regular expressions 101](https://regex101.com)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

## API Reference

[Swagger](https://api.noroff.dev/docs/static/index.html)
[Noroff API](<[Swagger](https://api.noroff.dev/docs/static/index.html)>)

#### auction-auth

```http
  POST /api/v1/auction/auth/register
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `api_key` | `string` | **Required** "name" "email" "avatar" "password" |

```http
  POST /api/v1/auction/auth/login
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `api_key` | `string` | **Required** "email" "password" |

#### auction-listings

#### Get all items

```http
  GET /api/v1/auction/listings
```

```http
  POST /api/v1/auction/listings
```

```http
  GET /api/v1/auction/listings/{id}
```

```http
  PUT /api/v1/auction/listings/{id}
```

```http
  DELETE /api/v1/auction/listings/{id}
```

```http
  POST /api/v1/auction/listings/{id}/bids
```

#### auction-profiles

```http
  GET /api/v1/auction/profiles
```

```http
  GET /api/v1/auction/profiles/{name}
```

```http
  PUT /api/v1/auction/profiles/{name}/media
```

```http
  GET /api/v1/auction/profiles/{name}/listings
```

```http
  GET /api/v1/auction/profiles/{name}/bids
```

```http
  GET /api/v1/auction/profiles/{name}/credits
```

## Appendix

## Design-prototype

https://xd.adobe.com/view/8edb65ae-21da-455c-a6ad-53993b9ffa76-db88/

## Style-title

https://xd.adobe.com/view/9ca7a3f5-ceb2-4e73-9b47-5ac16520533e-c9f4/

## Trello-link

https://trello.com/invite/b/m4wabXdD/ATTI86c13d260f643e1ca004b8be31673e184DE90F14/semester-project-2

## Authors

- [@Ingsy](https://github.com/Ingsy)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Color Reference

| Color      | Hex                                                              |
| ---------- | ---------------------------------------------------------------- |
| Yellow     | ![#FCD029](https://via.placeholder.com/10/FCD029?text=+) #44C1C5 |
| Turqois    | ![#f8f8f8](https://via.placeholder.com/10/44C1C5?text=+) #EAF4F5 |
| black      | ![#000000](https://via.placeholder.com/10/000000?text=+) #00b48a |
| light blue | ![#EAF4F5](https://via.placeholder.com/10/EAF4F5?text=+) #00d1a0 |

## Demo

Insert gif or link to demo

## Documentation

[Documentation](https://linktodocumentation)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
