import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

const renderWithRouter = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe("App routing", () => {
  test("Home表示", () => {
    renderWithRouter("/");
    expect(
      screen.getByRole("heading", { name: /home/i })
    ).toBeInTheDocument();
  });

  test("Users表示", () => {
    renderWithRouter("/users");
    expect(
      screen.getByRole("heading", { name: /users/i })
    ).toBeInTheDocument();
  });
});
