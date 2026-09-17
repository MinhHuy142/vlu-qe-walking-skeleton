const { login } = require("./login");

test("Login thành công với admin và 123", () => {
    expect(login("admin", "123")).toBe(true);
});
