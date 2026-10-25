// Write your code here!
//Display the posts on the webpage
function displayPosts(posts) {
    console.log("displayPosts is running!");
    
    //Find the ul element where posts will appear
    const postList = document.getElementById("post-list");

    console.log("Found the list:", postList);
    console.log("Is the list connected to the page?", postList?.isConnected);


    //Go through each post in the array
    for (const post of posts) {
        //Create a list item for one post
        const li = document.createElement("li");

        //Create a heading for the post title
        const h1 = document.createElement("h1");

        //Put the post inside the heading
        h1.textContent = post.title;

        //Create a paragraph for the post
        const p = document.createElement("p");


        //Put the post paragraph inside
        p.textContent = post.body;

        //Put the heading and paragraph inside the list item
        li.appendChild(h1);
        li.appendChild(p);


        //Then put the completed post on the webpage
        postList.appendChild(li);
    
    }
}

//Fetch the posts 
async function fetchPosts () {
    try {
        //Request the posts from the API

        const response = await fetch (
            "https://jsonplaceholder.typicode.com/posts"
        );

      //Check whether the request succeedded
      if (!response.ok) {
        throw new Error ("Could not fetch posts");
    }
        //Convert the repsponse to json
        const posts = await response.json();


        //Display the posts after receiving the data
        await displayPosts(posts);
    }catch (error) {
        //Display an error if the request fails
        console.error ("Error fetching posts", error);
    }
}

//Start fetching the posts
fetchPosts();
