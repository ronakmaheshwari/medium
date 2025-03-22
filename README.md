# 🌟 Medium Clone

This is a **Medium Clone** built with modern web technologies. The application allows users to create, edit, and publish blog posts seamlessly.

## 🚀 Features

- 📝 **Create & Edit Blogs**: Users can add new blog posts with a title and content.
- 📖 **View Blogs**: Read all published blog posts.
- 🔑 **Authentication**: Secure login and signup functionality.
- 🌐 **RESTful API**: Backend services using **Hono**.
- 🎨 **Modern UI**: Built with **React** and **TailwindCSS** for a smooth user experience.

## 🛠️ Tech Stack

| Category            | Technology |
|--------------------|------------|
| 🏗️ **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript) |
| 🎨 **Frontend** | ![React](https://img.shields.io/badge/React-20232a?logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css) |
| ⚙️ **Backend** | ![Hono](https://img.shields.io/badge/Hono-orange) |
| 🗄️ **Database** | ![PostgreSQL](https://img.shields.io/badge/Postgres-336791?logo=postgresql) + ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma) + ![Accelerate](https://img.shields.io/badge/Accelerate-green) |
| 🔐 **Authentication** | ![JWT](https://img.shields.io/badge/JWT-000000?logo=json-web-tokens) |
| 📏 **Runtime Validation** | ![Zod](https://img.shields.io/badge/Zod-8E44AD) |
| 📦 **State Management** | ![React Hooks](https://img.shields.io/badge/React%20Hooks-blue?logo=react) |
| 🚀 **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel) ![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-FF7139?logo=cloudflare) |

## 📦 Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ronakmaheshwari/medium.git
   cd medium
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add:
     ```env
     BACKEND_URL=http://localhost:5000
     JWT_SECRET=your_secret_key
     ```
4. **Start the development server**:
   ```sh
   npm start
   ```

## 🚀 Running the Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

## 🌍 Deployment

- **Frontend**: Deployed using **Vercel**
- **Backend**: Deployed using **Cloudflare Workers**

## 📜 API Endpoints

| Method | Endpoint        | Description         |
|--------|---------------|---------------------|
| GET    | `/api/blogs`   | Fetch all blogs     |
| POST   | `/api/blogs`   | Create a new blog   |
| GET    | `/api/blogs/:id` | Get a specific blog |
| PUT    | `/api/blogs/:id` | Update a blog       |
| DELETE | `/api/blogs/:id` | Delete a blog       |

## 💡 Contributing

1. **Fork** the repository.
2. **Create a new branch** (`feature/new-feature`).
3. **Commit your changes** (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/new-feature`).
5. **Open a Pull Request**.

## 📜 License

This project is licensed under the **MIT License**.

## 📬 Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [ronakmaheshwari](https://github.com/ronakmaheshwari)
- **LinkedIn**: [Ronak Maheshwari](https://www.linkedin.com/in/ronakmaheshwari)
- **Email**: [ronak@example.com](mailto:ronak@example.com)

