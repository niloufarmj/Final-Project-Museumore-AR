<p align="center">
  <img src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/mmR.png"></img>
 </p>
 
<h2 align="center">MUSEUMORE: Augmented Reality Web Application For Museums and Gallaries</h2>
<div align="center">
  
  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
    [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/museumore-ar-project.svg)](https://github.com/niloufarmj/museumore-ar-project/issues/)
    [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/niloufarmj/museumore-ar-project/pulls)
<!--   [![License](https://img.shields.io/badge/license-CC0-blue.svg)](http://creativecommons.org/publicdomain/zero/1.0/) -->
  
</div>

---

<p align = "center">💡 This project was implemented for university final course.</p>

## Table of Contents

- [Project Description](#project_description)
- [Technologies](#technologies)
  - [Django](#django)
  - [React](#react)
  - [WebAR](#webar)
- [Models](#models)
  - [Gallary](#gallary)
  - [Item](#item)
- [Pages](#pages)
  - [Home](#home)
  - [Scan](#scan)
  - [Item Information](#item_info)
  - [Gallary / Museum Signup](#signup)
  - [Gallary / Museum Login](#login)
  - [Dashboard](#dashboard)
  - [Library](#library)
  - [Add New Item](#addItem)
  - [Edit Gallary / Museumo Information](#editinfo)

## Project Description <a name="project_description"></a>

Today, every field has been directly or indirectly affected by technology and it has improved the efficiency and accuracy of that work. One of these technologies is augmented reality, and this project is an attempt to use this technology in order to improve the method of informing people in the fields of artistic and historical works in places such as museums, galleries, etc. Although these days, similar programs have been used in great museums of the world, such as the Louvre Museum, it can almost be said that there is no similar program in Iran. Also, there is no published program that is not specific to a specific place and any person can enter the system dynamically and not only use the augmented reality features of the program, but also be the administrator of this system and add or delete information from it. For this reason, this project has been developed with the aim of creating a dynamic system for places such as museums, galleries and any other archives, which is a web application. This program includes special panels for the visitor and the administrator, each of them has its own features and facilities and has been developed for a specific purpose.

## Technologies <a name = "technologies"></a>

- ### Django <a name = "django"></a>
  Before starting the app, you must have the following installed on your computer:
  - Python 3
  - Django

  ## Getting Started

  1. Download the project files from the source repository. 
  2. Open the project directory in your command line.
  3. Run the command `python manage.py runserver` in the command line to start the server.
  4. The app should now be running and can be accessed from http://localhost:8000 in your browser.

  ## Model

  The app includes two models: Gallery and Item. Each gallery can sign in to the app and has a list of items. 

  
  
 
- ##  React <a name = "react"></a>
  This document provides an overview of the React project, including instructions for setup and use. 

    ## Prerequisites:
     - Node.js installed 
     - NPM installed 

    ## Setup: 
     - Clone the repository from your chosen source control 
     - Run `npm install` to install the necessary dependencies 
     - Run `npm start` to start the development server 

    ## Usage: 
     - The project is split into components, each with its own folder within the `src` directory 
     - Create or edit components as needed 
     - Run `npm start` to compile the code and open the browser 
     - When you are ready to deploy the project, run `npm run build` to create a production build 

    ## Troubleshooting: 
     - If you encounter any errors, try running `npm install` again and restarting the development server. If that doesn't work, refer to the error      message and/or contact the project maintainer for assistance. 
     
- ## WebAR <a name = "webar"></a>
    Official Documentation: https://hiukim.github.io/mind-ar-js-doc

## Models <a name = "models"></a>

- ## Gallary <a name = "gallary"></a>
<p align="center">
  <img width="60%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/gallaryList.png"></img>
 </p>

- ## Item <a name = "item"></a>
<p align="center">
  <img width="60%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/ItemList.png"></img>
 </p>


## Pages <a name = "pages"></a>

Figma: https://www.figma.com/file/R6v9TTdyeUUAMcnH4GwIbp/museumore?type=design&node-id=0%3A1&mode=design&t=HBOD2qMXpebs5f1b-1

- ## Home <a name = "home"></a>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Home.png"></img>
 </p>

   Overview: The Museumore Home Page serves as the first page for users of the Museumore website. Common users are led to the "scan" page while gallery owners are leaded to the "signup/login" page. The name and logo of the project is Museumore. 

 Functionality: 
  - Logo: The Museumore logo appears at the top of the page and is displayed with a width of 100. 
  - Button: A "scan" button is displayed on the page that redirects users to the "http://127.0.0.1:8080" page. 
  - Text: Text is displayed that reads "Do you own a museum / gallary?" 
  - Link: A link is displayed that reads "Click here to signup" and redirects users to the "signup" page. 
  - Image Button: Two image buttons are displayed on the page. The first displays the "about us" image and redirects users to the "about us" page. The second displays the "how to" image. 
  - Return Button: A return button is displayed at the top of the page that does not have a return path. 

 Layout: 
  - Logo: The logo is centered on the page. 
  - Button: The button is located directly below the logo. 
  - Text: The text is located directly below the button. 
  - Link: The link is located directly below the text. 
  - Image Button: The image buttons are located directly below the link. 
  - Return Button: The return button is located at the top of the page. 

 Style: 
  - Logo: The logo is displayed in the Museumore colors and with a width of 100. 
  - Button: The button is displayed in the Museumore colors and with the text "scan". 
  - Text: The text is displayed in the Museumore colors and is centered on the page. 
  - Link: The link is displayed in the Museumore colors and is centered on the page. 
  - Image Button: The image buttons are displayed in the Museumore colors and are displayed side by side with a gap of 20px. 
  - Return Button: The return button is displayed in the Museumore colors.

  
- ## Scan <a name = "scan"></a>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Scan1.png"></img>
 </p>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Scan2.png"></img>
 </p>
     
- ## Item Information <a name = "item_info"></a>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/ItemInfo.png"></img>
 </p>
   1. PURPOSE

   This design document is for the webAR project which can detect paintings and provide information about it. The purpose of this design document is to provide a detailed description of the features, user interface, and design considerations of the project. 

   2. FUNCTIONALITY

   The project will enable users to detect paintings with the webAR feature and then provide information about the painting. The information page will contain the following components:

  - An image of the painting
  - The title of the painting
  - A description of the painting
  - An audio file (optional)
  - An extra video (optional)
  - A button to view the museum/gallery information



  3. USER INTERFACE

  The user interface will be displayed on a web page. It will contain the components listed above and will be organized in the following sections:

  - Image of the painting
  - Title of the painting
  - Description of the painting
  - Audio file (optional)
  - Extra video (optional)
  - Button to view the museum/gallery information

  The user interface will also have a Return Button which will direct the user back to the home page of the project. 

  4. DESIGN CONSIDERATIONS

  - The page will be designed with a modern and minimalistic look. 
  - The page will be responsive and optimized for mobile devices.
  - All components will be designed to be easy to use and understand. 
  - All components will be designed to be visually appealing and easy to read. 
  - All components will be designed to be accessible for all users. 
  - The page will use a dark background with contrasting colors for the text and other components. 
  - The page will be designed with a focus on usability and user experience.


- ## Gallary / Museum Signup <a name = "signup"></a>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Signup.png"></img>

 </p>

<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/AdditionalInfo1.png"></img>

 </p>


<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/AdditionalInfo2.png"></img>
 </p>
 
- ## Gallary / Museum Login <a name = "login"></a>

<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Login.png"></img>
 </p>

  Objective:
  The objective of this login page is to provide a secure and easy way for gallary owners to access their account.

  Functionality:
  The Login page allows users to enter their username and password. The app will then verify the credentials and if they match an existing account the user will be taken to the dashboard. If there is no matching account, an error message will be displayed. The page also includes a link for users to reset their forgotten password.

  Layout:
  The login page consists of a return button to take the user back to the home page. It then has an input field for username and password. There is also a link to reset forgotten password. Finally, there is a button to submit the credentials and a link to sign up.

  Styling:
  The page uses a combination of HTML and React components for styling. The components include Text, Input, Button, Link, ReturnButton and CustomLoadingButton. The page uses a combination of colors and fonts to provide a modern, professional look.

  Testing:
  The login page will be tested for functionality and styling. The functionality will be tested by entering different combinations of username and password. The styling will be tested by ensuring that the page looks as intended on different devices.


- ## Dashboard <a name = "dashboard"></a>

<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Dashboard.png"></img>
 </p>

  Objective: 
  The objective of the code is to create a dashboard page for the user with a profile image, the user's name, and options to add a new item, edit information, view the library, and logout.

  Functionality: 
  The code allows the user to view their profile image and name, which is retrieved from the local storage. The user is then presented with four different buttons with text provided by the i18n library for translations. The first button is for the user to add a new item, the second button is for the user to edit their information, the third button is for the user to view their library, and the fourth button is for the user to log out. 

  Layout: 
  The layout of the code consists of a ReturnButton component to allow the user to go back to a previous page, the profile image, the user's name, and the four buttons for the user to interact with. The profile image is displayed using the Image component and has a round shape, a width of 35%, a height of 125px, and is aligned to the left with 32%. The user's name is displayed using the Title component. The four buttons are displayed using the Button component and have text provided by the i18n library. 

  Style: 
  The code uses the Assets/CSS/button.css file to style the four buttons. 

  Testing: 
  The code should be tested to make sure the profile image and name are retrieved from the local storage, that the four buttons are displayed correctly and have the correct texts from the i18n library, and that the buttons link to the correct paths.


- ## Add New Item <a name = "add_item"></a>

<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/AddItem.png"></img>
 </p>

  This code is for a gallery page that allows users to add a new item, such as a painting, to the program. The page utilizes React, a popular JavaScript library for creating user interfaces, to create a form for the user to fill out.

  The page starts by importing the necessary components such as Button, Input, ReturnButton, AddFileButton, TextArea, AddImageButton, Text, Image, RemoveButton, VideoArea, and CustomLoadingButton. The page also imports the useNavigate hook from the react-router-dom library. The page then imports the useTranslation hook from the react-i18n library, allowing for translations of the page.

  The page then declares a function, AddItem, which contains states and a useEffect hook. The useEffect hook is used to fetch items from the API and set the items state.

  The page then creates a form for the user to fill out. This includes an option for them to upload an image, add a title, add a description, add an audio file, add an augmented video or image, add an extra video, and submit the form upon completion. The form also includes a ReturnButton component for the user to return to the dashboard page, an AddImageButton component for the user to upload an image, an AddFileButton component for the user to upload audio and video files, a TextArea component for the user to add a description, a VideoArea component for the user to view the extra video, and a CustomLoadingButton component for the user to indicate that their submission is being processed.

  Finally, the page includes a handleAddItem function for the user to submit their form. This function checks to make sure that the user has filled out the form correctly, and if so, sends a POST request to the API with the form data. If the request is successful, the page calls a compile function to compile the data. The page also includes an imageChange and videoChange functions to update the image and video states.

  With this design documentation, users can better understand the code and create a successful form for adding new items to the program.


- ## Library <a name = "library"></a>

<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/Library.png"></img>
 </p>

    Objective
  The Library page allows the gallery owner to view and manage the items they have added to the gallery.

  Requirements
  - The Library page must be part of a larger application, allowing the user to navigate to and from the page. 
  - The Library page must display the items the user has added in a visually appealing way.
  - The Library page must allow the user to view and manage the items they have added to the gallery.

  Features 
  - Return Button: This button will allow the user to navigate back to the Dashboard page.
  - Item Card: This card will show the user the item they have added to the gallery, such as the target image and title.
  - Item List: This list will display all the items the user has added to the gallery.

  Implementation
  The Library page will be implemented using React.js. The page will be composed of a ReturnButton component, an ItemCard component, and an ItemList component. The ReturnButton component will allow the user to navigate back to the Dashboard page. The ItemCard component will display the target image and title of the items the user has added to the gallery. The ItemList component will display all the items the user has added to the gallery. The page will fetch data from the API and use local storage to store the user information.
  
 - ## Add New Item <a name = "add_item"></a>
<p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/AddItem.png"></img>
 </p>

 - ## Edit Museum / Gallary Information <a name = "edit_info"></a>
 <p align="center">
  <img width="30%" src="https://github.com/niloufarmj/museumore-ar-project/blob/main/readme%20assets/editInfo.png"></img>
 </p>
