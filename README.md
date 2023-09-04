# Paxful Helper V2

## Overview

Paxful Helper is a google chrome extension that retrieves and displays statistics / information about a specific vendor to you through a chrome pop-up. The chrome pop-up will only be clickable when you are on a user's profile page. 

Paxful Helper v2 differs in function from the original by only displaying the vendor statistics when the user's presses on the extension. Furthermore, Paxful would provide private access to query api endpoints for each user's profile statistic so no web scraping is required increasing efficieny. 

Note: The project manager in Paxful that hired me to build the 2nd version of the original Paxful Helper left the company and as such the project was discountinued. However, the project was ~90% completed.

## Frontend

![Page_1](images/page_1.png)

After pressing the 'Learn More' button, the extension would query the API for the user's statistics, the following page will be displayed.

![Page_2](images/page_2.png)

## Backend

The backend was built using NodeJS with the express framework. The statistics for each box seen in the picture above would've been retrieved by querying Paxful's private API endpoint.

However, the project was cut short and I never got to implement the querying side of the project. So I made it such that the backend would send a static data value, just to see that the frontend would correctly display the data.
