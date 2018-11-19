import * as request from "supertest";

describe("Flightstats API", () => {
    test("has to get the flights location from the api directly", async () => {

        const response = await request("https://api.flightstats.com")
            .get("/flex/flightstatus/rest/v2/json/flightsNear/52.54598/13.42691/25")
            .set("appId", "b647ce20")
            .set("appKey", "d58bd3b41786cec9e8ff91536f6cacb6")
            .set("Accept", "application/json");

        console.log(response.body);

        expect(response.body.flightPositions).toBeDefined();
    });

    test("has to get the flights location from flight-map-api", async () => {
        const response = await request("http://localhost:8000")
            .get("/flightnear/52.54598/13.42691/25");

        console.log(response.body);
        expect(response.body.flightPositions).toBeDefined();
    });
});
