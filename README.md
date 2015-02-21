# spotify-test
# Jeffrey Qua - 20 Feb 2015

Some reference code for spotify form from:
http://jsfiddle.net/JMPerez/0u0v7e1b/

Architecture -->
I opted for a HTML/JS single-page application as that seemed to be the most efficient use of time to write code without having to use a framework.
The required functionality of API/JS calls are implemented but I did not have enough time for more additional suggested features such as routing or pagination.

A large portion of the code was improvised from the Spotify API call example listed above. Scripts included Jquery, and Handlebars for templating. Ideally would have used some type of framework as a coding build such as grunt to apply advanced features, as well as using additional css frameworks, ie. sass.

Styling -->
The majority of my time was prioritized for functionality but what styling I did apply was minimal inspired by the current Spotify web interface - elements such as color, fonts, and formatting of artist results list and track results list.

Limitations -->
Styling considerations was only given to a standard desktop browser.
Known issues:
-track list is not visible at smaller window heights (need to add scrolling)