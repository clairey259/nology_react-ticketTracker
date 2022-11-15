import { buildUrl, filterBeersByAcidity } from "./beer.service";
import { beers } from "../data/beers";

describe("getBeers tests", () => {
  test("adding all parameters builds onto the url", () => {
    expect(buildUrl(true, true, "a")).toBe(
      "https://api.punkapi.com/v2/beers?abv_gt=6&brewed_before=12-2009&beer_name=a"
    );
  });

  test("having no parameters doesn't change url", () => {
    expect(buildUrl(false, false, "")).toBe("https://api.punkapi.com/v2/beers");
  });

  test("adding only filterByAbv builds onto url", () => {
    expect(buildUrl(true, false, " ")).toBe(
      "https://api.punkapi.com/v2/beers?abv_gt=6"
    );
  });

  test("aadding only filterByClassicRange builds onto url", () => {
    expect(buildUrl(false, true, "")).toBe(
      "https://api.punkapi.com/v2/beers?brewed_before=12-2009"
    );
  });

  test("adding only searchTerm builds onto url", () => {
    expect(buildUrl(false, false, "test")).toBe(
      "https://api.punkapi.com/v2/beers?beer_name=test"
    );
  });

  test("filterBeersByAcidity alters array when filterByAcidity is true", () => {
    expect(filterBeersByAcidity(beers, true)).not.toBe(beers);
  });

  test("filterBeersByAcidity returns same array when  filterByAcidity is false", () => {
    expect(filterBeersByAcidity(beers, false)).toBe(beers);
  });
});
