# To Do List

This is a project app, created with the MERN stack (MongoDB, Express js, React and Node.js) for creating, saving and editing lists. 
https://to-do-list-esdn.onrender.com/

## Main Menu

The Main Menu includes two primary options—Create List and View Your Lists—along with Login/Signup access and an Information button.

<img width="829" height="760" alt="main_menu" src="https://github.com/user-attachments/assets/630fa94c-e93a-499b-af7a-5b0bc93091f9" />

Main Menu 


It is mandatory to login/sign up as a user, to be able to create and save a list. Initially, the app was created with a local storage and not with a database and the user could save his information and lists to the browser. But, that was changed, making way to a more flexible approach, where the user could access his lists in any device he chose to. If the user doesn't login / sign up, a prompt will appear when he'll try to access the app components: 

<img width="548" height="607" alt="prompt" src="https://github.com/user-attachments/assets/d1826dfc-c6ab-4dd5-b070-d3d6d247e1c0" />

Login / Sign up prompt


To Login, the user can simply tap the login button option. There, he will be guided to a modal, where he can either login as a default user, or log in with his personal information (name, email and password).

<img width="1001" height="751" alt="login" src="https://github.com/user-attachments/assets/610dd122-d28a-42fb-9375-28f47f2dc8ad" />


Login

<img width="909" height="751" alt="login_default" src="https://github.com/user-attachments/assets/770f4b2d-7330-40e1-93e8-4d7a366ecae1" />

Login as default user

If the user doesn't have an account, he can simply tap on the Sign Up button, where he can create his own account. All passwords in the To-Do-List are securely encrypted, ensuring that your information remains protected and eliminating any risk of unauthorized access.

<img width="747" height="731" alt="signup" src="https://github.com/user-attachments/assets/2b76875b-ee15-407e-8d64-d7a4f239a0e9" />

Signup


After the user has successfully logged in / signed up , the login button will display his name, prompting him to access and edit his lists.

<img width="883" height="737" alt="mainmenu_default" src="https://github.com/user-attachments/assets/bef720eb-2d6a-4adc-b7a1-6103447d8f66" />

Main Menu when user is logged in.

Also, in the bottom corner of the App, there is a info button, where the user can learn about the functionality of the App.





### Create List

By clicking the Create List card, the user will be redirected to the list creation page, where he can add a title and list items for his list. By clicking submit list, his list is created and saved in the database. Also , there are two buttons at the top, for redirection to View Lists / Main  Menu.

<img width="776" height="822" alt="createlist" src="https://github.com/user-attachments/assets/c99d3afc-781d-423e-aae3-7bbc2c0f7703" />

Create list



### View Lists

After succesfully creating a list, the user is redirected to View Lists, where he can view all the lists created by him, including the newlly created list. At the top there is a small navbar for redirection to Create List / Main Menu. Bellow that, there is a search bar, where the user can search a specific list. 

<img width="903" height="771" alt="ViewLists" src="https://github.com/user-attachments/assets/e604d1e1-8e0e-4db9-8b37-8f18cb27f848" />

View Lists

The search bar is case-insensitive, allowing you to find lists regardless of whether you use uppercase or lowercase letters. By typing the name of your list, the component will automatically filter the results.

<img width="517" height="641" alt="search" src="https://github.com/user-attachments/assets/2a258b76-27c6-46a7-90ee-a0665bcf6c36" />

Search lists


Also, the user-created-lists are shown. By clicking the left button on each list, the list will become done. By hovering each list, the list items will be shown, providing the required information about the list.

<img width="669" height="856" alt="ViewLists_Hovered" src="https://github.com/user-attachments/assets/15f94b81-197b-4b77-99d6-3bae330f5ede" />

Hovered List

### View and Edit List

By clicking on a specific list, the user will be redirected to ViewAndEditList component. There, he will be able to manipulate the list, changing/ deleting or adding list items, or even deleting the whole list. Also, two navbar options appear: View your Lists and Main Menu.

<img width="563" height="871" alt="ViewAndEditlist" src="https://github.com/user-attachments/assets/3fee7c64-1969-440c-b1e1-861b97a1b8b8" />

View and Edit List

<img width="653" height="879" alt="ViewAndEditListEdited" src="https://github.com/user-attachments/assets/8e0a3954-2b0f-4cf9-a7ec-e5cc67a3fcbc" />

View and Edit List Edited

To succesfully save your changes, all that is needed is to tap the submit button on the bottom of the list.

If the user wants to delete the list, all he has to do is tap the green trash icon.



## Learn More

Github link: 
[https://www.linkedin.com/in/stauros-koulas-a708aa10a/)
### Contact Me

Contact me via email at stevekoulas@gmail.com

