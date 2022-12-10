import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import About from "./routes/About";
import Index from "./routes/Index";
import Root from "./routes/Root";
import {
  fetchComments,
  fetchComment,
  deleteComment,
  updateComment,
  saveComment,
  fetchArtists,
  fetchArtworks,
  fetchArtwork,
  fetchFavorites,
} from "./api";
import Comments from "./routes/Comments";
// import LeaveComment from "./routes/LeaveComment";
import Bookmarks from "./routes/Bookmarks";
import Artwork from "./routes/Artwork";
import Artists from "./routes/Artists";
import EditComment from "./routes/EditComment";
import LeaveComment from "./routes/LeaveComment";

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
      },
      {
        path: "/artists",
        loader({ params }) {
          return fetchArtists(params.id);
        },
        element: <Artists />,
        children: [
          {
            path: "/artists/comments",
            loader({ params }) {
              return fetchComments(params.id);
            },
            element: <Comments />,
          },
          {
            path: "/artists/comments/new",
            element: <LeaveComment />,
            action({ request, params }) {
              return request.formData().then((formData) => {
                return saveComment(formData.get("comment"), params.id).then(
                  () => {
                    // toast.success("Your comment was successfully posted.");
                    return redirect(`/comments/${params.id}`);
                  }
                );
              });
            },
          },
        ],
      },
      {
        path: "/comments/:commentId/destroy",
        action({ request, params }) {
          return request.formData().then((formData) => {
            return deleteComment(params.commentId).then(() => {
              // toast.success("Your comment was deleted.");

              // const postId = formData.get("postId");
              return redirect(`/comments/${params.commentId}`);
            });
          });
        },
      },
      {
        path: "/comments/:commentId/edit",
        element: <EditComment />,
        loader({ params }) {
          return fetchComment(params.id);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            return updateComment(
              params.postId,
              formData.get("title"),
              formData.get("body")
            )
              .then
              // () => {
              //   toast.success("You successfully updated the post.");
              // },
              // () => {
              //   toast.error("Uh oh!");
              // }
              ();
          });
        },
      },
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
