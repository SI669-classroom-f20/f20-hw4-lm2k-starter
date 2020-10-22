# HW4: ListMaker 2000
**SI669 Fall 2020**

## Video Walkthrough
See the [Demo Video](https://youtu.be/bdeskk3JXYk).

## Learning Goals
This homework will give you practice working with CRUD and Firebase.

## Project Goals
The ListMaker 2000 (LM2K) app is already fully functioning in terms of CRUD within the app’s memory (this is effectively the same as week7ListMaker1000 with no dummy data, a different name, and a different color scheme). Your goal is to connect LM2K to Firebase, so that all changes made in the app are made persistent across launches of the app.

## What to Do
1. Accept the GitHub Classroom invitation.
2. Clone this repo to your local machine.
3. `cd` into the directory that was created when you cloned the repo (it should be called `hw4-listmaker2000-<your-github-id>`).
4. Run `yarn install` to install all dependencies.
5. Integrate a firebase project that you “own” into the app (this can be the project you created in week8 or a new one).
6. Modify existing functions and/or add new functions so that all modifications of application data (create, update, delete) are reflected in both your Firestore DB and your app’s UI.
7. Implement the functionality that displays a message on the home screen when the list is empty.
8. Push your final changes to GitHub before the deadline.
9. Create a screencast video and submit the link to Canvas before the deadline.
10. Indicate in your Canvas comments which requirements (including extra credit) you believe you met.

## Notes
* Be sure to show that the effects of all types of data modification (create, update, delete) persist across app launches.
* :exclamation: You don't need to show the Firebase console in your video as the one in Demo Videos. Showing just your phone screen will be adequate.

## Grading (up to 120 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Create operations result in correct changes to Home Screen list | 10  |
| 2 | Update operations result in correct changes to Home Screen list | 10 |
| 3 | Delete operations result in correct changes to Home Screen list | 10 |
| 4 | Create operations result in correct changes to Firestore DB, and these changes are reflected after the app restarts | 25 |
| 5 | Update operations result in correct changes to Firestore DB, and these changes are reflected after the app restarts | 25 |
| 6 | Delete operations result in correct changes to Firestore DB, and these changes are reflected after the app restarts | 25 |
| 7 |  HomeScreen displays a “list empty” message when there are no items in the list | 15 |
|   | **Total** | **120**

## Extra Credit
For extra credit you can 
* make it so that the “Save” button in the details screen is disabled if there is no text in the text box.
* present a confirmation dialogue when the user tries to delete an item, and only deletes the item if the user confirms
See the [Demo Video](https://youtu.be/xDLquY98oVI) for an example of how these should work.

## Grading (up to 4 points)
| No. | Requirement  | Points |
| --- | ------------- | ------------- |
| 1 | Save button is visually “greyed out” to indicate it is disabled when there is no text in the details screen text box | 1  |
| 2 |  Save button does not receive clicks and does not operate (data is not saved, no navigation occurs) when there is no text in the details screen box | 1 |
| 3 | A confirmation dialog is displayed when the user tries to delete an item, and the delete only occurs if the user confirms the operation | 2 |
|   | **Total** | **4**