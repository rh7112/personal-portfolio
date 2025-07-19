# Personal Portfolio

A Next.js application showcasing my personal portfolio, built with Tailwind CSS and Hero UI. The application files are hosted on my Synology NAS server, while a Raspberry Pi 4 runs `pm2` to keep the site running!

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open your browser and navigate to `http://localhost:3000`

## Tech Stack

* **Next.js**: A React-based framework for building server-rendered, statically generated, and performance-optimized applications.
* **Tailwind CSS**: A utility-first CSS framework for building custom user interfaces.
* **Hero UI**: A set of reusable UI components for building consistent and accessible interfaces.

## Features

* **Responsive Design**: A mobile-friendly design that adapts to different screen sizes and devices.
* **Server-Side Rendering**: Next.js enables server-side rendering, which improves SEO and provides faster page loads.
* **Static Site Generation**: Next.js generates static HTML files for each page, reducing the load on the server and improving performance.

## Components

* **Hero Section**: A custom Hero UI component used for the homepage hero section.
* **Project Cards**: A reusable component for showcasing projects, built with Tailwind CSS.
* **About Section**: A custom component for the about page, featuring a brief bio and skills list.

## Customization

* **Tailwind Config**: Customize the Tailwind CSS configuration in `tailwind.config.js`.
* **Hero UI Config**: Customize the Hero UI configuration in `hero.config.js`.
* **Next.js Config**: Customize the Next.js configuration in `next.config.js`.

## Deployment

This application is deployed via a Raspberry Pi, reading the files from my Synology NAS Server. My reasoning for this is that the Raspberry Pi isn't capable of building the project approrpiately, so my NAS handles that and serves the files to the Pi. 

### Synology NAS
To begin deployment of this application, first the branch must be pulled:
```
# git pull
```
After the branch has been pulled, we can than build the project:
```
# npm run build
```
Now that we've done that, we're good to skip over to the Pi!

### Raspberry Pi
Now that the files on the NAS have been updated, we can go ahead and start up the website. First off, we need to kill the existing instances of `pm2`. 
```
# pm2 kill
```
Now we can start `pm2` back up with our `ecosystem.config.js` file
```
# pm2 start ecosystem.config.js
```

Wait a few minutes, and the website will be up and running!

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Acknowledgements

* Thanks to the Next.js, Tailwind CSS, and Hero UI communities for their amazing work and support.
* Kiosk Photo by <a href="https://unsplash.com/@paul_siewert?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Siewert</a> on <a href="https://unsplash.com/photos/a-display-case-filled-with-lots-of-drinks-QjFfLfa9qWA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
* Crescendo Photo by <a href="https://www.sweetwater.com/tour/40/crescendo_cafe">Sweetwater Sound</a>
* Turkey Photo by <a href="https://unsplash.com/@heathergill">Paul Siewert</a> on <a href="https://unsplash.com/photos/a-group-of-chickens-in-a-fenced-in-area-o9vQS5XXaAM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Unsplash</a>