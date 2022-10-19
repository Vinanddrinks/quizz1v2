var express = require("express");
var router = express.Router();
var drinks = JSON.parse(require("fs").readFileSync("mokData/coffees.json"));
// GET drinks listing.
router.get("/", function (req, res) {
  res.json(drinks);
});
// GET Hot drinks listing.
router.get("/hot", function (req, res) {
  res.json(drinks.filter((drink) => drink.is_hot));
});
// GET Cold drinks listing.
router.get("/cold", function (req, res) {
  res.json(drinks.filter((drink) => !drink.is_hot));
});
module.exports = router;
// GET best drinks listing.
router.get("/best", function (req, res) {
  res.json(
    drinks
      .filter((drink) => drink.average_rating >= 4)
      .sort((a, b) => b.average_rating - a.average_rating)
  );
});
// GET popular drinks listing.
router.get("/popular", function (req, res) {
  res.json(
    drinks
      .filter((drink) => drink.average_rating >= 3.5)
      .sort((a, b) => b.count_orders - a.count_orders)
  );
});
// GET drink by id.
router.get("/:id", function (req, res) {
  res.json(drinks.find((drink) => drink.id === req.params.id));
});
// GET drink by name.
router.get("/name/:name", function (req, res) {
  res.json(
    drinks.filter((drink) =>
      drink.name.toLowerCase().includes(req.params.name.toLowerCase())
    )
  );
});
// GET picture of drink by path.
router.get("/picture/:image", function (req, res) {
    res.sendFile(req.params.image, { root: "mokData" });
});
