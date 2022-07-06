
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 50000, years: 10, rate: .055})).toEqual("$542.63");
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: .0325})).toEqual("$870.41");
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: .0325})).not.toEqual(null);
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: .0325})).toBeInstanceOf(String);
  expect(Number(calculateMonthlyPayment({amount: "chicken", years: false, rate: {} }).substring(1))).toBeNaN();

});


it("should return a result with 2 decimal places", function() {
  //regex/idea from https://stackoverflow.com/questions/69776105/how-can-you-use-jasmine-to-check-if-a-value-has-two-decimal-places
  expect(calculateMonthlyPayment({amount: 50000, years: 10, rate: .055}).substring(1)).toMatch(/^\d+\.\d\d$/);
});
