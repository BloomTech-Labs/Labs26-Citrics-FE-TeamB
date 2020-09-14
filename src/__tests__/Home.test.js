// import React from 'react';
// import { render, cleanup, wait, waitFor } from '@testing-library/react';
// import { HomePage } from '../components/pages/Home';
// import { LoadingComponent } from '../components/common';
// import { BrowserRouter as Router } from 'react-router-dom';
// import {Provider} from "react-redux";
// import {store} from "../state";

// afterEach(cleanup);

// jest.mock('@okta/okta-react', () => ({
//   useOktaAuth: () => {
//     return {
//       authState: {
//         isAuthenticated: true,
//       },
//       authService: {
//         getUser: () => Promise.resolve({ name: 'sara' }),
//       },
//     };
//   },
// }));

describe("<HomeContainer /> testing suite", () => {
  test("Isn't implemented", () => {
    expect(true).toBe(true);
  });
  // test('mounts a page', async () => {
  //   const { findByText, getByText, queryByText } = render(
  //     <Router>
  //       <Provider store={store}>
  //       <HomePage
  //         LoadingComponent={() => (
  //           <LoadingComponent message="...fetching profile" />
  //         )}
  //       />
  //       </Provider>
  //     </Router>
  //   );
  //   let loader = getByText(/...fetching profile/i);
  //   expect(loader).toBeInTheDocument();

  //   await waitFor(async () => {
  //     await findByText(/hi sara/i);
  //   });
  //   loader = queryByText(/...fetching profile/i);
  //   expect(loader).toBeNull();
  // });
});
