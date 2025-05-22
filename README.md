# 🤖 Salesforce Automation Testing with Cypress

> Automated end-to-end testing for Salesforce Sales & Service Cloud using Cypress, covering Account, Contact, Lead, Opportunity, and Case management with persona-based validation.

---

## 📚 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Test Coverage](#test-coverage)
- [CI/CD Integration](#cicd-integration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🧠 About

This project automates the Salesforce Sales and Service processes using Cypress. It includes creation and updation flows for key Salesforce objects:
- Accounts
- Contacts
- Leads
- Opportunities
- Cases

The tests are also designed with **persona-based scenarios** to simulate real-world user behavior and access rights.

---

## ✨ Features

- ✅ Automation of core Salesforce objects (CRUD)
- ✅ Persona-wise test execution
- ✅ JWT-based authentication using Connected App
- ✅ Cypress Page Object Model (POM) structure
- ✅ CI/CD with GitHub Actions
- ✅ GitHub integration for source control and activity tracking

---

## 🛠 Tech Stack

| Tech         | Description                          |
|--------------|--------------------------------------|
| `Cypress`    | Front-end testing tool               |
| `Node.js`    | JavaScript runtime                   |
| `OpenSSL`    | For generating and managing certificates |
| `Salesforce` | Cloud platform for CRM               |
| `GitHub`     | Version control and CI/CD pipelines  |

---

## ⚙️ Setup Instructions

### 1️⃣ Install Node.js and Required Modules

Make sure you have the latest stable version of Node.js installed.

```bash
node -v
npm install
```

---

### 2️⃣ Install OpenSSL (For Certificate Generation)

Generate certificates and private key using OpenSSL and store securely.

---

### 3️⃣ Configure Salesforce Connected App

- Create a new **Connected App** in Salesforce.
- Upload the certificate generated from OpenSSL.
- Enable **JWT OAuth Flow** and grant required scopes.

---

### 4️⃣ Install Cypress

```bash
npm install cypress --save-dev
```

---

### 5️⃣ Write Test Suites

Test suites include creation and update flows for:

- 🧾 Account  
- 👥 Contact  
- 🌱 Lead  
- 💼 Opportunity  
- 🛠 Case  

Tests are structured using **Page Object Model** for reusability and maintainability.

---

### 6️⃣ GitHub Integration

- Project is version-controlled using Git.
- Source code and activities are managed via **GitHub repository**.

---

## ▶️ Usage

### Run Cypress Tests Locally

```bash
npx cypress open   # Launch interactive mode
npx cypress run    # Run all tests in headless mode
```

---

## 🧪 Test Coverage

Each module includes test cases for:

- Creation
- Updation
- Field-level validations
- Role-based (persona) access
- Error handling

---

## 🚀 CI/CD Integration

GitHub Actions is used for continuous integration and deployment.

### Example: `.github/workflows/test.yml`

```yaml
name: Run Cypress Tests

on:
  push:
    branches: [main]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm run cy:run
```

---

## 📁 Project Structure

```bash
salesforce-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── accounts.cy.js
│   │   ├── contacts.cy.js
│   │   ├── leads.cy.js
│   │   ├── opportunities.cy.js
│   │   └── cases.cy.js
│   ├── support/
│   ├── fixtures/
│   └── pages/
├── .github/workflows/
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests.

```bash
# Fork & clone
git clone https://github.com/Raushan-Kumar007/CypressAutomationGithubAction

# Create your feature branch
git checkout -b feature/your-feature

# Commit and push
git commit -m "Your message"
git push origin feature/your-feature
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

- **Name**: Raushan Kumar  
- **LinkedIn**: [raushankumar01](https://linkedin.com/in/raushankumar01)  
- **GitHub**: [github.com/Raushan-Kumar007](https://github.com/Raushan-Kumar007)

---
