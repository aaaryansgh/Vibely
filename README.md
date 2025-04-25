# Vibely : A movie reccomender website
 - Created React App
 - Configured tailwindCSS
 - Header
 - Login form
 - SignUp form
    - We can do two things here
      - Either Create a new page for signup
      - Or Change the state in the same login route
 - Form Validation
   - useRef
   - checkValidate function
 - Authentication
   - Using firebase (Setup your project and turn off cors plugin while setuping auth)
   - create sign up/sign in user in firebase
   - Created redux store because we can need user detail anywhere in our project.
   - BugFix: Signup user displayName and profile picture update
   - BugFix: if the user is not logged in Redirect it to login page and vice versa.
 - Browse page
   - Registered at TMDB for movies data. (Note: Specific ISP (eg.Jio) in India may face issue while getting the data, Hence you can use VPN).
   - Get Data from tmdb now playing api
   - Created a Movie slice in a redux store and dispatched the movies detail.
   - Created a custom Hook and put all my fetching logic into that hook file for better readability of code.
   - UI Planning for mainContainer and secondary container
   -fetched data for trailer video and updated the store
   - embeded the youtube video and make it autoplayed and mute
     - Explanation of Parameters:
      - autoplay=1 → Starts playing automatically.
      - mute=1 → Autoplay works best when muted (some browsers block autoplay with sound).
      - loop=1 → Ensures the video keeps looping.
      - playlist=YOUR_VIDEO_ID → Required for looping a single video.
      - rel=0 → Prevents related videos from showing at the end.
   - Created hooks for different upcoming, top rated and popular movies
   - GPT searchBar
     - Added multilingual feature
     - Made header dynamic
     - Integrate GPT Api
     - GPT search api call
     - Memoization
     - fetched gptmoviesuggestion from tmdb
     - Reused movielist component in gpt movie list page
     - Added env file
     


# Features
 - Login/signup
    - Sign/in form
    - redirect to browse page
 - Browse Page (After loggedIN)
   - Header
   - Main Movie
      - Trailer/Picture in background
      - Title and Description of that movie
      - MovieSuggestions
         - Movie Lists (cards)
    
 - GPT
    - Search Bar
    - Movie Suggestions