module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body)
    // We'll create our note here.
    res.send('Hello')
  });
};