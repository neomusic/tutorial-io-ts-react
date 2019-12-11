test('check if config is loaded', () => {
  expect(process.env.apiEndpoint).toBe('http://localhost');
});
