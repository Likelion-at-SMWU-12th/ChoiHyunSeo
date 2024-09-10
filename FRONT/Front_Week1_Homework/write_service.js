const loginForm = document.querySelector("#login-form");
const loginNameInput = document.querySelector("#login-form .input[type='text']");
const loginPasswordInput = document.querySelector("#login-form .input[type='password']");
const greeting = document.querySelector("#greeting");
const writePostBtn = document.querySelector("#writePostBtn");
const postForm = document.querySelector("#postForm");
const postContent = document.querySelector("#postContent");
const postsContainer = document.querySelector("#postsContainer");
const postsList = document.querySelector("#postsList");

// 게시글 배열
let posts = []; 

function loginSubmit(event) {
    event.preventDefault();
    const userName = loginNameInput.value;
    const password = loginPasswordInput.value;

    if (!userName.trim() || !password.trim()) {
        alert("Please enter both username and password!");
        return;
    }

    // 비밀번호 1234 통일
    if (password !== "1234") {
        alert("Incorrect password!");
        return;
    }

    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove("hidden");
    writePostBtn.classList.remove("hidden");
}

function showPostForm() {
    postForm.classList.remove("hidden");
    // 글 작성 중에는 글쓰기 버튼 숨기기
    writePostBtn.classList.add("hidden"); 
}

function addPost(event) {
    event.preventDefault();
    const content = postContent.value;
    if (content.trim() === "") {
        alert("Please enter some content!");
        return;
    }
    posts.push(content);
    renderPosts();
    postContent.value = "";
    postForm.classList.add("hidden");
    postsContainer.classList.remove("hidden");
    writePostBtn.classList.remove("hidden"); 
}

function renderPosts() {
    postsList.innerHTML = "";
    posts.forEach((content, index) => {
        const postItem = document.createElement("li");
        postItem.textContent = content;

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");

        const editButton = document.createElement("button");
        editButton.textContent = "수정";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", () => {
            editPost(index);
        });
        buttonsContainer.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            deletePost(index);
        });
        buttonsContainer.appendChild(deleteButton);

        postItem.appendChild(buttonsContainer);

        postsList.appendChild(postItem);

        const lineBreak = document.createElement("br");
        postsList.appendChild(lineBreak);
    });
}

function editPost(index) {
    const newContent = prompt("수정할 내용을 입력하세요:", posts[index]);
    if (newContent === null || newContent.trim() === "") {
        return;
    }
    posts[index] = newContent;
    renderPosts();
}

function deletePost(index) {
    const confirmation = confirm("정말로 삭제하시겠습니까?");
    if (confirmation) {
        posts.splice(index, 1);
        renderPosts();
    }
}

loginForm.addEventListener("submit", loginSubmit);
writePostBtn.addEventListener("click", showPostForm);
postForm.addEventListener("submit", addPost);
