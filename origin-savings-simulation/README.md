# Origin Saving Goal Planner

A simple React + Vite project styled with Tailwind CSS to simulate a savings goal plan.  
Users can enter a target amount and a goal date to calculate how much they need to save monthly.

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
https://github.com/0sama-rao/origin-savings-platform.git
cd origin-savings-planner
```

### 2. Install dependencies
npm install 
or 
yarn


### 3. Start the development server
npm run dev

or 

yarn dev


### 4. Build for Production

npm run build

### 5. Project Structure
## 5. Project Structure

```plaintext
origin-savings-planner/
├── public/                 # Static assets (e.g., logo, images)
├── src/
│   ├── assets/             # SVGs and internal graphics
│   ├── components/
│   │   ├── Inputs/         # MoneyInput, DatePicker
│   │   ├── CardContainer.jsx
│   │   ├── ConfirmButton.jsx
│   │   ├── GoalHeader.jsx
│   │   ├── MonthlySummary.jsx
│   │   ├── Navbar.jsx
│   │   └── Title.jsx
│   ├── pages/
│   │   └── MainPage.jsx        # Main simulation screen
│   ├── styles/
│   │   └── utilities.css   # Tailwind reusable styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md

