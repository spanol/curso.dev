test("Post to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const responseBody2 = await response2.json();

  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);
  // const responseBody2 = await response2.json()
});
