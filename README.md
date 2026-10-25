# web-development-internship-elevate-labs-Task-2

# ✅ To-Do List Web App

## 📌 Project Overview

The **To-Do List Web App** is a simple, interactive task management application developed using HTML, CSS, and Vanilla JavaScript. It allows users to add new tasks, mark tasks as completed, and delete tasks when they are no longer needed.

The application uses browser local storage to save tasks, allowing them to remain available even after the page is refreshed or reopened.

This project was developed as part of **Web Development Internship – Task 2**.

## 🎯 Objectives

- Develop a functional task management application.
- Practise DOM manipulation using JavaScript.
- Understand event handling and form submission.
- Implement add, delete, and task completion functionality.
- Store tasks using the browser's local storage.
- Create a responsive and user-friendly interface.

## 🛠️ Technologies Used

<img width="742" height="363" alt="Screenshot 2026-10-25 225305" src="https://github.com/user-attachments/assets/8ae0e4a0-fbc3-4480-980d-6e00a3cb44e2" />


## ✨ Features

- **Add Tasks:** Enter a task and add it to the list.
- **Mark as Completed:** Click on a task to toggle its completed status.
- **Delete Tasks:** Remove individual tasks using the delete button.
- **Automatic Saving:** Tasks are saved in local storage.
- **Persistent Tasks:** Previously saved tasks are restored when the application is reopened.
- **Responsive Design:** The layout adjusts to different screen sizes.
- **Modern Interface:** Features a background image, translucent container, rounded corners, and styled task items.
- **Instant Updates:** The task list updates dynamically without reloading the page.

## 📱 Responsive Design

The application uses CSS media queries to provide a better experience on tablets and mobile phones.

- The main container adjusts its padding according to screen size.
- The task application maintains a suitable width for smaller displays.
- Input fields and buttons adapt to available space.
- Task items use flexible layouts to accommodate longer task descriptions.

## 📂 Project Structure

```text
To-Do-List-App/
│
├── internship task 2.html
├── internship task 2.css
├── internship task 2.js
└── README.md
```


## 🚀 How to Run the Project

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Ensure the HTML, CSS, and JavaScript files are in the same directory.
4. Open `index.html` in a browser or run it using the Live Server extension.
5. Enter a task in the input field and click the `+` button.
6. Click a task to mark it as completed.
7. Click the `×` button to delete a task.

## 💾 Data Storage

The application uses the browser's **Local Storage API** to save tasks.

Tasks are converted into JSON format before being stored. When the application loads, saved data is retrieved and displayed again.

Each task contains two properties:

- `text` – Stores the task description.
- `completed` – Records whether the task has been completed.

This allows the application to preserve both task descriptions and their completion status across page reloads.

## 🧠 Key Concepts Learned

- HTML forms and input elements.
- CSS Flexbox and responsive design.
- DOM selection and manipulation.
- JavaScript functions and arrays.
- Event listeners and event handling.
- Dynamic creation of HTML elements.
- Adding and removing CSS classes.
- JSON serialization and parsing.
- Browser local storage.
- Error handling with `try...catch`.

## 🔮 Future Enhancements

- Add task editing functionality.
- Introduce task categories and priorities.
- Add due dates and reminders.
- Include filters for all, pending, and completed tasks.
- Add a button to clear all completed tasks.
- Improve keyboard accessibility.
- Add a confirmation prompt before deleting a task.

## 📚 Conclusion

The To-Do List Web App demonstrates how HTML, CSS, and Vanilla JavaScript can be combined to create an interactive and responsive web application. It provides practical experience with DOM manipulation, event handling, dynamic interface updates, and local storage.

This project helped strengthen my understanding of front-end web development and the fundamentals of building useful browser-based applications.

## 👨‍💻 Author

**Pratham Singh**

- GitHub: [pratham-codes8735](https://github.com/pratham-codes8735)

---

⭐ If you find this project useful, feel free to explore the repository!
