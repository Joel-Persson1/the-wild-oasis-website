# The Wild Oasis - Hotel Booking Website

A modern hotel booking website built with Next.js, allowing users to browse and book cabins, manage their bookings, and handle administrative tasks.

## Features

- 🏠 Browse available cabins and their details
- 📅 Real-time cabin availability checking
- 🔐 User authentication and account management
- 👤 User dashboard for managing bookings
- 🎫 Booking management system
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Supabase
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/the-wild-oasis-website.git
cd the-wild-oasis-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
app/
├── _components/     # Reusable components
├── _lib/           # Utility functions and configurations
├── _styles/        # Global styles and Tailwind configuration
├── account/        # User account related pages
├── api/            # API routes
├── cabins/         # Cabin listing and details pages
├── context/        # React context providers
└── login/          # Authentication pages
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with ❤️ using Next.js
- Special thanks to all contributors
