import Post from '../post/Post';

// const posts = [
//     {
//       id: '9357e9f9-bfa1-4088-b180-07079a4f475d',
//       text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
//       created_at: '2021-06-22T14:50:41.201Z',
//       am_like: false,
//       category: {
//         id: '9357e9f9-bfa1-4088-b180-070792345t467',
//         name: 'artist',
//       },
//       profile: {
//         id: 'c5c96575-6413-4d77-b00b-cb3c68d3a425',
//         first_name: 'youjin',
//         last_name: 'phitsharbet',
//         caption: 'artist',
//         profile_picture: {
//           id: '770e17de-3dbb-4768-b47e-e2f489879d7f',
//           link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU',
//         },
//         user: {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           username: 'youjin',
//           email: 'tamara@yahoo.com',
//           last_login: null,
//         },
//       },
//       likes: 35,
//       images: [
//         {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           link: 'https://s34506.pcdn.co/wp-content/uploads/2021/06/fathersdaypinecone.done1b.690.jpg',
//         },
//       ],
//     },
//     {
//       id: '51e01ca6-430c-43ba-b0b8-a879d94f67eb',
//       text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
//       created_at: '2021-06-22T14:50:40.839Z',
//       am_like: true,
//       category: {
//         id: '9357e9f9-bfa1-4088-b180-865478dg446564',
//         name: 'artist',
//       },
//       profile: {
//         id: 'b22f4e3f-e059-4765-9a80-ad2e4b9fc78c',
//         first_name: 'youjin',
//         last_name: 'phitsharbet',
//         caption: 'engneer',
//         profile_picture: {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU',
//         },
//         user: {
//           id: '799c203d-93ac-4c0b-8827-b3613dc84916',
//           username: 'youjin',
//           email: 'emran@yahoo.com',
//           last_login: null,
//         },
//       },
//       likes: 1,
//       images: [
//         {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           link: 'https://t1.thpservices.com/previewimage/gallil/b772287f406aa8a7caf466a75c2d6436/esy-009014594.jpg',
//         },
//       ],
//     },
//     {
//       id: '51e01ca6-430c-43ba-b0b8-a879d9123453',
//       text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
//       created_at: '2021-06-22T14:50:40.839Z',
//       am_like: true,
//       category: {
//         id: '9357e9f9-bfa1-4088-b180-865478dg446564',
//         name: 'artist',
//       },
//       profile: {
//         id: 'b22f4e3f-e059-4765-9a80-ad2e4b9fc78c',
//         first_name: 'youjin',
//         last_name: 'phitsharbet',
//         caption: 'engneer',
//         profile_picture: {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU',
//         },
//         user: {
//           id: '799c203d-93ac-4c0b-8827-b3613dc84916',
//           username: 'youjin',
//           email: 'emran@yahoo.com',
//           last_login: null,
//         },
//       },
//       likes: 1,
//       images: [
//         {
//           id: '2fa53b27-a3d7-406f-9f91-c7f3950e9078',
//           link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20ieyLx4H_EsV2gtZ3bCVjVqRYxT1905mpQ&usqp=CAU',
//         },
//       ],
//     },
//   ];
  
const PostsList = ({posts}) => {

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    )
}

export default PostsList;