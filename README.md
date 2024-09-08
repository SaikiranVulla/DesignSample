
Tyre Motors Dashboard UI
Overview
This project is the UI implementation for Tyre Motors, an automotive service provider. The UI features a side navigation menu that allows users to navigate between different sections of the app. The focus of this project is on the UI and the navigation flow between different screens.

Features
1. Side Navigation Menu
The side menu allows users to navigate to different sections of the app:

Dashboard 
Profile
Messaging
Payments
Favourites
Clients
Projects
Technician Dashboard
Settings
Help
Logout

2. Profile and Project Management Screen
Profile Section: Displays company details such as the logo, name, industry, location, and team size.
Clients Section: Lists associated clients with options to add and manage them.
Current Projects: Displays a list of ongoing projects with status indicators and brief details.
File Upload: Allows the user to upload and manage relevant images and documents.
Navigation
React Navigation: The UI uses React Navigation to navigate between different screens when a user clicks on the side menu items.
Drawer Navigation is implemented for the side menu.
Each menu item is linked to a respective screen.

Tech Stack
React Native: For building the cross-platform UI.
React Navigation: For handling navigation between screens.
CSS-in-JS: Styled components for the UI layout and design.

Installation and Setup
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/tyre-motors-dashboard-ui.git
Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
npm start
Open the project in your simulator or connected mobile device.
