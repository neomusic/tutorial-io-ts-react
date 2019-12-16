// import axios from 'axios';
// import { search } from '../src/API';
// jest.mock('axios');
// jest.mock(
//   './../config',
//   () => ({
//     apiEndpoint: process.env.apiEndpoint,
//     token: process.env.token
//   }),
//   { virtual: true }
// );
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe('Models -> searchRestaurant', () => {
//   it('can return array of restaurant model', async () => {
//     const mockResponse = {
//       businesses: [
//         {
//           id: '1',
//           alias: '18-milano',
//           name: '18',
//           image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/Yoc_1xNT3attRsJMjsF1Kg/o.jpg',
//           is_closed: false,
//           url: 'https://www.yelp.com/foo/bar',
//           review_count: 285,
//           categories: [
//             { alias: 'italian', title: 'Italian' },
//             { alias: 'seafood', title: 'Seafood' }
//           ]
//         }
//       ]
//     };
//     mockedAxios.get.mockResolvedValue({ data: mockResponse });
//     const response = await search('restaurants', '10000', 'Milan').run();
//     expect(response).toEqual([
//       {
//         name: '18',
//         image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/Yoc_1xNT3attRsJMjsF1Kg/o.jpg',
//         url: 'https://www.yelp.com/foo/bar'
//       }
//     ]);
//   });
// });
