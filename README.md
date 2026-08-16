# ⏰ Digital Clock

A simple and visually appealing **Digital Clock web project** built with HTML, CSS, and JavaScript.

The main purpose of this project is to create a **static website and deploy it using GitHub Actions and GitHub Pages**. The project was developed and managed using the **Git CLI**, providing practical experience with version control, GitHub repositories, automated deployment, and static website hosting.

## 🌐 Live Demo

**GitHub Pages:** https://jin2das.github.io/Digital-Clock/

## 📌 About the Project

The Digital Clock displays time through a clean and simple web interface. The project uses standard front-end technologies and does not require a backend server or database.

The project was created as a practical learning project to understand:

* Static website development
* HTML, CSS, and JavaScript
* Git version control
* Using the Git CLI for project management
* Creating and managing GitHub repositories
* Making commits and pushing changes using Git
* GitHub Actions workflows
* Automated deployment
* GitHub Pages static website hosting
* Organizing website assets and project files

## 🛠️ Technologies Used

* **HTML5** — Website structure
* **CSS3** — Styling and layout
* **JavaScript** — Clock functionality and interaction
* **SVG / PNG** — Visual assets
* **Git** — Version control
* **Git CLI** — Committing, branching, and pushing changes
* **GitHub** — Repository and source-code management
* **GitHub Actions** — Automated build and deployment workflow
* **GitHub Pages** — Static website hosting

## 🚀 Running the Project Locally

Since this is a static website, no backend setup or database is required.

### 1. Clone the repository

```bash
git clone https://github.com/Jin2Das/Digital-Clock.git
```

### 2. Navigate to the project

```bash
cd Digital-Clock
```

### 3. Open the website

Open `index.html` directly in your web browser.

Alternatively, you can use an extension such as **Live Server** in Visual Studio Code for local development.

## 🔧 Git CLI Workflow

The project was managed using the **Git command-line interface (CLI)** rather than relying only on the GitHub web interface.

A typical development workflow used for this project was:

### Check repository status

```bash
git status
```

### Add changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Update digital clock"
```

### Push changes to GitHub

```bash
git push origin main
```

This workflow makes it possible to track changes locally and synchronize the project with the GitHub repository.

## 🔄 GitHub Actions Deployment

The project uses **GitHub Actions** to automate deployment of the static website.

The deployment workflow is stored inside:

```text
.github/workflows/
```

Whenever changes are pushed to the configured branch, GitHub Actions can automatically run the deployment workflow and publish the latest version of the website to GitHub Pages.

### Deployment Flow

```text
Local Development
       │
       ▼
   Git CLI
       │
       │ git add
       │ git commit
       │ git push
       ▼
    GitHub
       │
       ▼
 GitHub Actions
       │
       ▼
 Automated Deployment
       │
       ▼
 GitHub Pages
       │
       ▼
 Live Website
```

This setup eliminates the need to manually upload the website files every time a change is made.

## 🌍 GitHub Pages

The website is hosted using **GitHub Pages**.

GitHub Pages provides static hosting directly from the GitHub repository, while **GitHub Actions handles the deployment process**.

### Deployment Process

1. Make changes to the project locally.
2. Test the website locally.
3. Stage the changes using Git.
4. Commit the changes using Git CLI.
5. Push the changes to GitHub.
6. GitHub Actions starts the deployment workflow.
7. The workflow publishes the updated website.
8. GitHub Pages serves the latest version of the project.

### Live Website

**https://jin2das.github.io/Digital-Clock/**

## 🎯 Purpose

The primary purpose of this project is **learning and practicing modern GitHub-based static website deployment**.

Rather than simply creating a website, this project demonstrates a complete development and deployment workflow:

```text
Develop → Commit → Push → Automate → Deploy → Publish
```

It combines basic front-end development with Git, GitHub, Git CLI, GitHub Actions, and GitHub Pages.

## 📚 What I Learned

Through this project, I practiced:

* Creating a website using HTML, CSS, and JavaScript
* Structuring a front-end project
* Managing source code with Git
* Using Git CLI commands
* Creating commits and maintaining project history
* Pushing local changes to GitHub
* Managing a GitHub repository
* Working with GitHub Actions
* Creating an automated deployment workflow
* Deploying a static website using GitHub Pages
* Understanding the relationship between Git, GitHub, Actions, and Pages
* Making a web project publicly accessible through a URL

## 👨‍💻 Author

**Jin2Das**

GitHub: https://github.com/Jin2Das

Repository: https://github.com/Jin2Das/Digital-Clock

## 📄 License

This project is available for **educational and personal use**.

---

⭐ If you find this project useful, feel free to **star the repository**!

<p align="center">
  Built with ❤️ using HTML, CSS, JavaScript, Git & GitHub
</p>
