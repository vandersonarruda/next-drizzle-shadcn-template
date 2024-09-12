# Next.js + Drizzle + Shadcn Template

This project is a **Next.js 14** template that includes pre-configured tools and technologies to jumpstart your projects. It leverages **Docker Compose** for containerization, **Biome** for code formatting and linting, **Drizzle** for database handling, **Shadcn UI components** for UI design, **Zod** for schema validation, and **React Hook Form** for efficient form handling.

## Technologies

This template includes the following stack:

- [Next.js 14](https://nextjs.org/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Biome](https://biomejs.dev/)
- [Drizzle](https://orm.drizzle.team/)
- [Shadcn UI](https://shadcn.dev/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)

## Installation

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.
- [Node.js](https://nodejs.org/) installed (optional for local development outside Docker).

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/next-drizzle-shadcn-template.git
cd next-drizzle-shadcn-template
```

### Step 2: Set Up Environment Variables

Copy the `.env.example` file to `.env` and update the environment variables as needed.

```bash
cp .env.example .env
```

Make sure to configure your database connection, API keys, or any other required environment variables in the `.env` file.

### Step 3: Run with Docker Compose

To start the development environment with Docker Compose, run:

```bash
docker compose up -d
```

This will build and start the application in development mode using the services defined in the `docker-compose.yml` file.

### Step 4: Access the Application

Once the containers are up, the application should be accessible at:

```
http://localhost:3000
```

## Configuration

### Database Setup (Drizzle)

Drizzle is already pre-configured with this template. Make sure to configure your database connection in the `.env` file:

```bash
DATABASE_URL=your-database-url-here
```

To generate and run database migrations, use the following commands:

```bash
pnpm db:generate
pnpm db:migrate
```

These commands will generate the migration files and apply them to your database.

### Zod and React Hook Form

This template includes `Zod` and `React Hook Form` integration for validating forms. You can use them like this:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
});

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Usage

### Running Commands
You can run the following pnpm commands:

- Start development server: `pnpm dev`

- Build for production: `pnpm build`

- Run production server: `pnpm start`

## License

This project is licensed under the MIT License.
