import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, test } from "vitest";
import CatFacts from "./CatFacts";
import App from "./App";

describe("CatFact", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  test("displays Cat fact when loaded", () => {
    const mockData = {
      data: "fact",
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    render(CatFacts);
  });

  test("renders Cat Fact Header", () => {
    render(<App/>);
    expect(screen.getByText(/cat fact/i)).toBeInTheDocument();
  });

});
