# Library-Search-API

![Gif_13_07_2024_20_26_09](https://github.com/user-attachments/assets/d47129ee-c30a-441d-8134-813b64d51cc6)
<hr/>

This project is a React-based website that serves as a platform for managing and viewing a list of books. It utilizes React Router for navigation and context for state management, ensuring a seamless user experience. Below is an overview of the main components and pages of the website:

## Features

1. **Home Page**:
   - Acts as the main entry point of the application.
   - Provides navigation links to other sections of the site.

2. **About Page**:
   - Offers information about the website or the project.

3. **Book List**:
   - Displays a list of books available in the collection.
   - Each book entry can be clicked to view more details.

4. **Book Details**:
   - Shows detailed information about a specific book.
   - Accessible via the URL pattern `/book/:id`, where `:id` is the identifier of the book.

## Technical Overview

- **React**: The primary JavaScript library used for building the user interface.
- **React Router**: Manages the routing and navigation between different pages.
- **Context API**: Provides a way to pass data through the component tree without having to pass props down manually at every level.
- **CSS**: Custom styles are defined in `index.css`.

## Folder Structure

- `src/pages/Home/Home.js`: Contains the Home component.
- `src/pages/About/About.js`: Contains the About component.
- `src/components/BookList/BookList.js`: Contains the BookList component.
- `src/components/BookDetails/BookDetails.js`: Contains the BookDetails component.
- `src/Context.js`: Contains the context provider for state management.
- `src/index.css`: Contains the global styles for the application.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git

   
2. **Install dependencies**:
    ```bash
    npm install

    
3.  **Start the development server**:
    ```bash
      npm start

4. **Open your browser and navigate to http://localhost:3000 to view the website**.

## Usage
Navigate to the Home page to see an overview.

Visit the About page to learn more about the project.

Check out the Book List to see all available books.

Click on a book in the Book List to view its details.

