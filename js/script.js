// console.log('another js file');

// const headTag = document.getElementsByTagName('h3');
// // console.log(document.getElementsByTagName('h3'));
// console.log(headTag);
// for (let i = 0; i < headTag.length; i++) {
//     console.log(headTag[i]);
// }


const titleHead = document.getElementById('head-title');
console.log(titleHead);
titleHead.style.backgroundColor = 'cyan';
titleHead.style.padding = '20px';


// Article
const blogs = document.getElementsByClassName('blog');
console.log(blogs);
for (let i = 0; i < blogs.length; i++) {
    // console.log(blogs[i]);
    blogs[i].style.border = '1px solid orange';
    blogs[i].style.borderRadius = '20px';
}
