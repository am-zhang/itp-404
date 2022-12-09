import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Index from "./routes/Index";
import Root from "./routes/Root";
import {
  // fetchCommentsForPost,
  // fetchPost,
  fetchArtworks,
  fetchArtwork,
  fetchFavorites,
} from "./api";
import Post from "./routes/Post";
import Comments from "./routes/Comments";
import LeaveComment from "./routes/LeaveComment";
import Bookmarks from "./routes/Bookmarks";
import Artwork from "./routes/Artwork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchArtworks();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bookmarks",
        loader() {
          return fetchFavorites();
        },
        element: <Bookmarks />,
      },
      {
        path: "/artworks",
        loader() {
          return fetchArtworks();
        },
        children: [
          {
            path: "/artworks/:id",
            loader({ params }) {
              return fetchArtwork(params.id);
            },
            element: <Artwork />,
          },
        ],
        // element: <Artwork />,
        // path: "/artworks/:id",
        // loader({ params }) {
        //   return fetchArtwork(params.id);
        // },
        // element: <Artwork />,
        // children: [
        //   {
        //     path: "/posts/:id",
        //     element: <p>Make some new friends 💬</p>,
        //   },
        //   {
        //     path: "/posts/:id/comments",
        //     loader({ params }) {
        //       return fetchCommentsForPost(params.id);
        //     },
        //     element: <Comments />,
        //   },
        //   {
        //     path: "/posts/:id/comments/new",
        //     element: <LeaveComment />,
        //   },
        // ],
      },
      // {
      //   path: "/posts/:id", // :id is dynamic segment
      //   loader({ params }) {
      //     return fetchPost(params.id);
      //   },
      //   element: <Post />,
      //   children: [
      //     {
      //       path: "/posts/:id",
      //       element: <p>Make some new friends 💬</p>,
      //     },
      //     {
      //       path: "/posts/:id/comments",
      //       loader({ params }) {
      //         return fetchCommentsForPost(params.id);
      //       },
      //       element: <Comments />,
      //     },
      //     {
      //       path: "/posts/:id/comments/new",
      //       element: <LeaveComment />,
      //     },
      //   ],
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
