# NextGen Youth Empowerment Website

A React-based website for NextGen Youth Empowerment, a non-profit organization in Washington State focused on Sports, Education, and Robotics educational camps.

## Features

- Built with React and TypeScript
- Material-UI components for consistent design
- Tailwind CSS for additional styling
- Responsive layout

## Organization Details

- **Name**: NextGen Youth Empowerment
- **Focus Areas**:
  - Sports programs for youth development
  - STEM education Volunteer lead Programs

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adnthunderr/nextgenye-website.git
   cd nextgenye-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured to deploy automatically with GitHub Actions.

1. Ensure `vite.config.ts` uses the correct base path:
   ```ts
   base: "/nextgenye-website/",
   ```

2. Push to the `main` branch. The workflow at `.github/workflows/deploy.yml` will build and deploy.

3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

4. Visit the published site:
   ```
   https://<your-username>.github.io/nextgenye-website/
   ```

## Technologies Used

- **React**: Frontend framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Material-UI**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **Emotion**: CSS-in-JS for MUI

## Contributing

Please read the contributing guidelines before making contributions.

## License

This project is licensed under the MIT License.

## Contact

For more information about NextGen Youth Empowerment, visit our website or contact us directly.
