describe('example-test-files/test-2.js', function() {
  it('should pass', function() {
    // NOOP
  });

  it('should fail', function() {
    return Promise.reject('This should cause the test to fail.');
  });
});
