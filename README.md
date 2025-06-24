# MarketPro - Marketing Agency Website

This project is a modern, responsive website for "MarketPro," a fictional digital marketing agency. It is built with React, TypeScript, and Vite, and styled with Tailwind CSS. The website is designed to be professional, engaging, and fully functional, showcasing the agency's services, projects, and team.

## Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite for a fast and efficient development experience.
- **Responsive Design**: Fully responsive layout using Tailwind CSS, ensuring a great user experience on all devices, from mobile phones to desktops.
- **Multi-language Support**: Internationalization (i18n) implemented with `react-i18next` to support both English and Arabic.
- **Dark Mode**: A theme switcher to toggle between light and dark modes, with styles saved to local storage.
- **Dynamic Page Titles**: Uses `react-helmet-async` for SEO-friendly and descriptive page titles.
- **Component-Based Architecture**: Clean and maintainable code with a well-organized structure of reusable components.

### Pages & Sections

- **Homepage**:
  - **Hero Section**: An impressive hero section with a background image, compelling headline, and a call-to-action button.
  - **Services**: A section detailing the services offered by the agency.
  - **Company Stats**: Displays key metrics like clients served and projects completed.
  - **Testimonials**: A slider showcasing client feedback.
  - **Call to Action (CTA)**: Encourages visitors to get in touch.

- **Contact Page**:
  - **Modern Contact Form**: A stylish and user-friendly contact form with input validation.
  - **Contact Information**: Includes address, phone number, and email.
  - **Social Media Links**: Icons linking to the agency's social profiles.

- **Navigation & Footer**:
  - **Responsive Navbar**: A sticky navigation bar that includes the logo, page links, language switcher, and dark mode toggle. The logo correctly routes to the homepage.
  - **Comprehensive Footer**: A detailed footer with quick links, service summaries, contact info, and a dynamic copyright notice.

## Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd marketing-agency
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the TypeScript and React code for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally to preview it.
