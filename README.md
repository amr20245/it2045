# IT 2045 BMI Calculator

This project provides a simple three‑page BMI calculator to satisfy the requirements for Module 5 of the IT 2045 course. The app is built with [React](https://reactjs.org/) and [React Router](https://reactrouter.com/) and implements stack‑based navigation between pages. Users can input their weight and height, select their gender, compute their BMI and see personalized health recommendations.

## Features

### Page 1 — User Input

* Weight slider (0–300 lbs, default 90 lbs).
* Height slider (0–100 inches, default 50 inches).
* Gender selection via buttons (Male or Female).
* A “Calculate BMI” button that navigates to the Result page (disabled until a gender is selected).

### Page 2 — BMI Result

* Displays the computed BMI based on the user’s weight and height.
* Shows the BMI category (underweight, normal, overweight or obese) with thresholds that differ slightly for men and women.
* Buttons to navigate back to the input page or forward to the recommendations page.

### Page 3 — Health Recommendations

* Provides a list of simple, gender‑specific suggestions based on the user’s BMI category.
* Buttons to navigate back to the result page or directly to the input page.

## Running the App

To run the application locally you’ll need [Node.js](https://nodejs.org/) installed. Once you have Node.js, clone the repository and install the dependencies:

````bash
git clone https://github.com/YOUR_GITHUB_USERNAME/it2045-bmi-calculator.git
cd it2045-bmi-calculator
npm install
npm start
```

This will start a development server on [http://localhost:3000](http://localhost:3000). Open that URL in your browser to interact with the BMI calculator.

## Notes for Instructors

* The navigation logic uses React Router’s `useNavigate` hook to push and pop pages from the history stack. The back buttons navigate to previous pages consistent with the assignment requirements.
* The app is intentionally simple and uses inline styles to keep the focus on logic and navigation. In a production context you might refactor the styles into separate CSS files or a CSS‑in‑JS solution.
* The BMI thresholds and recommendations are illustrative. Feel free to adjust them to match course materials.

## Screenshots

After running the app on both Windows (using a modern web browser) and Android (for example using Chrome on an Android emulator), capture screenshots of each of the three pages and compile them into a PDF to submit along with your assignment. The screenshots should clearly show the entered data and the resulting categories/recommendations.

## License

This project is released under the MIT license. See the [LICENSE](LICENSE) file for details.
