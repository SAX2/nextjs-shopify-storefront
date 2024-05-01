# Nextjs 14 E-commerce with Shopify

This project is a Next.js 14.2 e-commerce application inspired by Stussy.com. It utilizes the Shopify Storefront API but includes dummy data to function without an active Shopify connection. The project incorporates libraries such as Shadcn for UI components and Tailwind CSS for styling. 

In the router app you will find 2 folders, one _**(app)**_ is the one that has the connection with shopify, and another _**(example)**_ is the one that has the cart functionality with react context and the false data

## Features

- **Shopify Integration**: The application is designed to connect with Shopify's Storefront API, allowing for seamless integration with an existing Shopify store.
- **Dummy Data (example)**: In the absence of an active Shopify connection, the project includes dummy data to showcase the application's functionality.
- **Cart Functionality (example)**: Users can add items to the cart, even when the Shopify integration is not active.
- **UI Components**: The project utilizes the Shadcn library for reusable UI components, enhancing the overall user experience.
- **Styling**: Tailwind CSS is used for styling the application, providing a modern and responsive design.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/SAX2/nextjs-shopify-storefront.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Shopify Integration

To enable Shopify integration, you need to provide the necessary credentials in the `.env` file:

````
SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
SHOPIFY_PUBLIC_API_URL=your-shopify-public-url-graphql
`````

You can obtain these values by setting up a Shopify Partner account and creating a new app in the Shopify Partner Dashboard.

## Enable middleware redirection to shopify app

In order to redirect everything to the connected Shopify app you have to change the following variables within the `.env` file:

````
shopify=true
`````

In order to redirect everything to the example app you have to change the following variables within the `.env` file:

````
shopify=false
`````

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
