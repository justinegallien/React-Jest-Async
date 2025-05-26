import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { beforeEach, describe, test } from "vitest";
import CatFacts from "./CatFacts";

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
});
