import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getData } from "./CallApi";

describe("getData()", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("resolves with JSON when response is 200", async () => {
    const fakeData = {
      data: "fact",
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    });
    await expect(getData("https://testexample.com/data")).resolves.toEqual(
      fakeData
    );
  });
});
