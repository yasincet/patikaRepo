const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title);
    });
};

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        const error = false;
        if (!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    });
    return promise;
};

async function init() {
    try {
        await addPost({ title: 'Post Three', body: 'This is post three' });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}
