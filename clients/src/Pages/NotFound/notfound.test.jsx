import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NotFound from "./NotFound";

test("renders Page not found message", () => {
  const { getByText } = render(<NotFound />);
  const notFoundMessage = getByText("Page not found...");
  expect(notFoundMessage).toBeInTheDocument();
});
