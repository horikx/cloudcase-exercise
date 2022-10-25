import { describe, expect, test } from "@jest/globals";
import {
  calculateAnnualSuper,
  calculateAnnualTax,
} from "./financialAlgorithms";

describe("calculate annual tax", () => {
  test("calculate annual tax for income < 18200", () => {
    expect(calculateAnnualTax(18199)).toBe(0);
  });
  test("calculate annual tax for income < 37000", () => {
    expect(calculateAnnualTax(18200)).toBe(0);
    expect(calculateAnnualTax(18201)).toBe(0.19);
    expect(calculateAnnualTax(37000)).toBe(3572);
  });
  test("calculate annual tax for income < 90000", () => {
    expect(calculateAnnualTax(37001)).toBe(3572.325);
    expect(calculateAnnualTax(90000)).toBe(20797);
  });
  test("calculate annual tax for income < 180000", () => {
    expect(calculateAnnualTax(90001)).toBe(20797.37);
    expect(calculateAnnualTax(180000)).toBe(54097);
  });
  test("calculate annual tax for income > 180000", () => {
    expect(calculateAnnualTax(180001)).toBe(54097.45);
  });
});

describe("calculate annual super", () => {
  test("calculate annual tax for income < 50000 in 2022", () => {
    expect(calculateAnnualSuper(50000, 2022)).toBe(5000);
  });
  test("calculate annual tax for income < 50000 in 2023", () => {
    expect(calculateAnnualSuper(50000, 2023)).toBe(5250);
  });
  test("calculate annual tax for income < 50000 in 2024", () => {
    expect(calculateAnnualSuper(50000, 2024)).toBe(5500);
  });
  test("calculate annual tax for income < 50000 in 2025", () => {
    expect(calculateAnnualSuper(50000, 2025)).toBe(5750);
  });
  test("calculate annual tax for income < 50000 in 2026", () => {
    expect(calculateAnnualSuper(50000, 2026)).toBe(6000);
  });
  test("calculate annual tax for income < 50000 in 2027", () => {
    expect(calculateAnnualSuper(50000, 2027)).toBe(6000);
  });
});
