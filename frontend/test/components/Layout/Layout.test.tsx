import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";

describe("Layout", () => {
  test("ナビゲーションリンクが表示される", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  test("Outletに子コンポーネントが表示される", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});
