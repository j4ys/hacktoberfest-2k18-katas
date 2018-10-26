import { validateEmail } from "./validateEmail";

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(validateEmail()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(validateEmail()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(validateEmail()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(validateEmail()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { validateEmail(); }).toThrow();
 */

describe("validateEmail", () => {
  it("return true if the provided emailid is in format", () => {
    const isvalid = validateEmail("newtest@test.com");
    expect(isvalid).toBeTruthy();
  });

  it("return false if the provided email id is not valid", () => {
    const isvalid = validateEmail("thisiswrongemail.com");
    expect(isvalid).toBeFalsy();
  });
});
