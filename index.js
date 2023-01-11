async function createPostList() {
    const postsElement = document.getElementById('posts');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    for(let i = 0; i < data.length; i++) {
        const divElement = document.createElement('div');
        const titleElement = document.createElement('p');
        const bodyElement = document.createElement('p');
        const byElement = document.createElement('p');
        const deletePostElement = document.createElement('p');
        deletePostElement.innerHTML = 'X';
        deletePostElement.addEventListener('click', function(){
            postsElement.removeChild(divElement);
        })
        divElement.classList.add('post');
        titleElement.classList.add('title');
        bodyElement.classList.add('body');
        byElement.classList.add('by');
        deletePostElement.classList.add('deleteButton');
        byElement.innerHTML = `by ${data[i].id}`;
        bodyElement.innerHTML = data[i].body;
        titleElement.innerHTML =  data[i].title;
        divElement.appendChild(deletePostElement);
        divElement.appendChild(titleElement);
        divElement.appendChild(bodyElement);
        divElement.appendChild(byElement);
        postsElement.appendChild(divElement);
    }
}

createPostList();