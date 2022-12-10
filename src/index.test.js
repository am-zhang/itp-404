import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
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
import Bookmarks from "./routes/Bookmarks";
import Artwork from "./routes/Artwork";
import Artists from "./routes/Artists";
import EditComment from "./routes/EditComment";
import LeaveComment from "./routes/LeaveComment";
import Admin from "./routes/Admin";
import { toast } from "react-toastify";
import { render } from "@testing-library/react";

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
        path: "/admin",
        loader() {
          return fetchComments();
        },
        element: <Admin />,
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
                    toast.success("Your comment was successfully posted.");
                    return redirect(`/artists/comments`);
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
              toast.success("Your comment was deleted.");
              return redirect(`/artists/comments`);
            });
          });
        },
      },
      {
        path: "/comments/:commentId/edit",
        element: <EditComment />,
        loader({ params }) {
          return fetchComment(params.commentId);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            return updateComment(params.commentId, formData.get("body")).then(
              () => {
                return redirect(`/artists/comments`);
              }
            );
          });
        },
      },
    ],
  },
]);

test("loads main app", async () => {
  const { getByTestId } = render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
