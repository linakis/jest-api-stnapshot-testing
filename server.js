const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/success', (req, res) => {
  res.json({ title: 'Success', description: 'Response is always the same' });
})

app.get('/fail', (req, res) => {
  res.json({ title: 'Fail', description: 'Response is always different', timestamp: Date.now() });
})

app.get('/currency', (req, res) => {
  res.json(currency(req.query.countryCode));
})

app.listen(port, () => {
  console.log(`jest demo app running on port ${port}`);
})


function currency(countryCode) {
  switch (countryCode) {
    case "au":
      return { country: "Australia", currency: "Australian Dollar", code: "AUD" };
    case "us":
      return { country: "United States", currency: "United States Dollar", code: "USD" };
    case "de":
      return { country: "Germany", currency: "Euro", code: "EUR" };
    case "fr":
      return { country: "France", currency: "Euro", code: "EUR" };
    case "gr":
      return { country: "Greece", currency: "Euro", code: "EUR" };
    case "gb":
      return { country: "United Kingdom", currency: "Sterling", code: "GBP" };
    default:
      return { error: "Uknown country code " + code };

  }
}