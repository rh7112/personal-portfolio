import { describe, expect, it } from "vitest";
import {
  formatDateRange,
  formatMonthYear,
  normalizeCertificationRow,
  normalizeDate,
  normalizeEducationRow,
  normalizeEmployerRow,
  normalizeImagePath,
  normalizeProjectRows,
  pickRandom,
} from "./portfolio-data.js";

describe("normalizeDate", () => {
  it("passes through date-only strings unchanged", () => {
    expect(normalizeDate("2021-09-24")).toBe("2021-09-24");
  });

  it("converts Date objects to YYYY-MM-DD", () => {
    expect(normalizeDate(new Date("2021-09-24T00:00:00.000Z"))).toBe("2021-09-24");
  });

  it("passes through null/undefined unchanged", () => {
    expect(normalizeDate(null)).toBe(null);
    expect(normalizeDate(undefined)).toBe(undefined);
  });
});

describe("formatMonthYear", () => {
  it("returns null for falsy input", () => {
    expect(formatMonthYear(null)).toBe(null);
    expect(formatMonthYear(undefined)).toBe(null);
    expect(formatMonthYear("")).toBe(null);
  });

  it("formats a date-only string using local date components, not UTC", () => {
    // The whole point of parsing from components (not `new Date(string)`) is
    // to avoid this shifting to "Feb 2021" in timezones behind UTC.
    expect(formatMonthYear("2021-03-01")).toBe("Mar 2021");
  });

  it("formats a Date object directly", () => {
    const result = formatMonthYear(new Date(2025, 2, 20));
    expect(result).toBe("Mar 2025");
  });
});

describe("formatDateRange", () => {
  it("returns null when there's no start date", () => {
    expect(formatDateRange(null, "2021-05-01")).toBe(null);
  });

  it("says Present when there's no end date", () => {
    expect(formatDateRange("2021-05-01", null)).toBe("May 2021 – Present");
  });

  it("formats both ends when both dates are present", () => {
    expect(formatDateRange("2021-05-01", "2025-08-01")).toBe("May 2021 – Aug 2025");
  });
});

describe("normalizeImagePath", () => {
  it("returns null for falsy input", () => {
    expect(normalizeImagePath(null)).toBe(null);
    expect(normalizeImagePath("")).toBe(null);
  });

  it("leaves an already-rooted path alone", () => {
    expect(normalizeImagePath("/images/foo.png")).toBe("/images/foo.png");
  });

  it("adds a leading slash when missing", () => {
    expect(normalizeImagePath("images/foo.png")).toBe("/images/foo.png");
  });
});

describe("normalizeProjectRows", () => {
  it("accepts both snake_case (DB) and camelCase (API) field names", () => {
    const [fromDb] = normalizeProjectRows([
      { id: 1, title: "A", summary: "s", image: null, company: "C", company_slug: "c", color: "sky", tech_stack: "Go", featured: 1, published: 1 },
    ]);
    const [fromApi] = normalizeProjectRows([
      { id: 1, title: "A", summary: "s", image: null, company: "C", companySlug: "c", color: "sky", techStack: "Go", featured: true, published: true },
    ]);
    expect(fromDb).toEqual(fromApi);
  });

  it("defaults link to null when absent, and passes it through when present", () => {
    const [withoutLink] = normalizeProjectRows([
      { id: 1, title: "A", summary: "s", company: "C", companySlug: "c", featured: 0, published: 1 },
    ]);
    expect(withoutLink.link).toBe(null);

    const [withLink] = normalizeProjectRows([
      { id: 1, title: "A", summary: "s", company: "C", companySlug: "c", link: "https://example.com", featured: 0, published: 1 },
    ]);
    expect(withLink.link).toBe("https://example.com");
  });

  it("coerces featured/published to real booleans", () => {
    const [row] = normalizeProjectRows([
      { id: 1, title: "A", summary: "s", company: "C", companySlug: "c", featured: 1, published: 0 },
    ]);
    expect(row.featured).toBe(true);
    expect(row.published).toBe(false);
  });
});

describe("normalizeEmployerRow", () => {
  it("builds a dateRange and defaults highlights to an empty array", () => {
    const row = normalizeEmployerRow({
      slug: "acme",
      name: "Acme",
      title: "Engineer",
      start_date: "2021-05-01",
      end_date: null,
      location: "Remote",
      summary: "s",
      description: "d",
      sort_order: 1,
      color: "red",
    });
    expect(row.dateRange).toBe("May 2021 – Present");
    expect(row.highlights).toEqual([]);
  });

  it("passes through highlights when the row has them", () => {
    const row = normalizeEmployerRow({
      slug: "acme",
      name: "Acme",
      title: "Engineer",
      start_date: "2021-05-01",
      end_date: null,
      summary: "s",
      description: "d",
      highlights: ["Did a thing"],
    });
    expect(row.highlights).toEqual(["Did a thing"]);
  });
});

describe("normalizeEducationRow", () => {
  it("builds a dateRange from start/end dates", () => {
    const row = normalizeEducationRow({
      slug: "school",
      institution: "Some School",
      start_date: "2017-01-01",
      end_date: "2019-05-01",
      sort_order: 1,
    });
    expect(row.dateRange).toBe("Jan 2017 – May 2019");
  });
});

describe("normalizeCertificationRow", () => {
  it("formats dateEarnedDisplay and defaults expired to false", () => {
    const row = normalizeCertificationRow({
      slug: "cert",
      name: "Some Cert",
      issuer: "Issuer",
      date_earned: "2021-09-24",
      sort_order: 1,
    });
    expect(row.dateEarnedDisplay).toBe("Sep 2021");
    expect(row.expired).toBe(false);
  });

  it("coerces expired to a real boolean", () => {
    const row = normalizeCertificationRow({ slug: "c", name: "C", expired: 1 });
    expect(row.expired).toBe(true);
  });
});

describe("pickRandom", () => {
  it("returns the requested count without mutating the input", () => {
    const items = [1, 2, 3, 4, 5];
    const result = pickRandom(items, 3);
    expect(result).toHaveLength(3);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("only returns items that were in the original array", () => {
    const items = ["a", "b", "c"];
    const result = pickRandom(items, 2);
    result.forEach((item) => expect(items).toContain(item));
  });

  it("never returns duplicates within a single pick", () => {
    const items = [1, 2, 3, 4, 5];
    const result = pickRandom(items, 5);
    expect(new Set(result).size).toBe(5);
  });
});
