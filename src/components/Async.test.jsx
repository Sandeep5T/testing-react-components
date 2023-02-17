import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //Test 1

  test("renders posts if request succeeds", async () => {
    render(<Async />);
    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });

  //Test 2

  test("renders posts if request succeeds through mock", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, titles: "First Post" }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 5000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });

  //Test 3

  test("component renders if request fails", () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => null,
    });
    render(<Async />);
    const listItemElements = screen.queryAllByRole("listitem");
    expect(listItemElements).toHaveLength(0);
  });
});
