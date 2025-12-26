# Product Management Dashboard

A high-performance, professional Product Management Dashboard built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This project was developed as part of the technical assessment for Kodevio Limited, focusing on responsive design, efficient API handling, and modern UX patterns.

## 🚀 Features

- **Responsive Sidebar**: A hybrid navigation system that functions as a persistent column on desktop and a smooth-transition drawer on mobile.
- **Dynamic Product Table**:
  - **Horizontal Scroll**: Mobile-optimized table views with `overflow-x-auto` to prevent layout breaking.
  - **Skeleton Loading**: Seamless user experience using React Suspense and custom `animate-pulse` skeletons to prevent layout shift.
- **Advanced Filtering & Search**:
  - **Category Filtering**: Dynamic filtering via URL query parameters.
  - **Search**: Full-text search functionality integrated with the DummyJSON API.
  - **URL-Persistent State**: All filters, search queries, and pagination states are stored in the URL, making the dashboard views shareable and bookmarkable.
- **Responsive Pagination**: Smart pagination logic that includes page numbers, "Next/Previous" controls, and ellipses truncation for large datasets.
- **Error Handling**: Robust multi-layer error handling including a custom `error.tsx` boundary and graceful "Not Found" pages.

---

## 🛠 API Handling & Technical Decisions

The project interacts with the [DummyJSON API](https://dummyjson.com/).

### 1. Handling API Limitations

The DummyJSON API does not currently support combining `search` and `category` filters in a single request (e.g., searching for "phone" within the "smartphones" category).

- **Our Solution**: The data fetching logic prioritizes the category filter. If a user searches within a category, the app fetches the category dataset and performs a client-side filter. This ensures the user intent is always met despite API constraints.

### 2. Performance & Rendering

- **Server Components**: Product data and categories are fetched on the server to reduce client-side bundle size and improve SEO/Initial Load time.
- **Streaming**: By using React `Suspense`, the shell of the page (Sidebar/Filters) loads instantly, while the data-heavy table streams in once the API responds.
- **Pagination Logic**: Implemented using `limit` and `skip` parameters to ensure only 10 items are loaded at a time, keeping the application fast even as the database grows.

---

## 💻 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**:

    ```bash
    git clone [https://github.com/Jahid0178/product-management-dashboard-task](https://github.com/Jahid0178/product-management-dashboard-task)
    cd product-management-dashboard-task
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## 📁 Project Structure

```text
src/
├── actions/            # Server actions for API communication
├── app/                # Next.js App Router (Pages, Layouts, and Error boundaries)
├── components/         # Atomic UI components and feature-specific logic
├── data/               # Static navigation and configuration data
├── typescript/         # Shared interfaces and TypeScript types
└── utils/              # Helper functions (getInitials, string formatting)
```

---

## 📝 Submission Details

- **Candidate:** AKM Zahidul Haque
- **Role:** Frontend Developer
- **Date:** December 26, 2025
- **Project Status:** Completed

---
