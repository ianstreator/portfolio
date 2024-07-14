import fetchWakaTimeData from "../page";
import { describe, expect, jest, test } from "@jest/globals";

describe("existing languages array", () => {
    test("should not be empty", () => {
        expect(fetchWakaTimeData()).toBe({})
    })
})
