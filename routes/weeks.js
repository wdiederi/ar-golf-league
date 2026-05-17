var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    // just some sample data
    const score = {
        player_name: "Will Diederich",
        quota: 9,
        scores: [5,5,5,4,3,7,6,4,9],
        total_points: 9
    }

  res.render('weeks', { score });
});

module.exports = router;