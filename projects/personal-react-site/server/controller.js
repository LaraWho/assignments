module.exports = {
  saveItem: (req, res) => {
    const dbInstance = req.app.get('db')
    const { imgURL, scheme } = req.body;

    console.log(req.body)

    dbInstance.add_item([imgURL, scheme]).then(item => {
      res.status(200).send(item)
    }).catch(err => {
      res.status(401).send({errorMessage: "Oops, couldn't add it!"})
      console.log(err)
    })
  },

  getImg: (req, res) => {
    const dbInstance = req.app.get('db')
    const { imgURL } = req.params;

    console.log(req.params)

    dbInstance.get_img([imgURL]).then(img => {
      res.status(200).sent(img)
    }).catch(err => {
      res.status(500).send({errorMessage: "Can't see the thing"})
      console.log(err)
    })
  }

  // getColor: (req, res) => {
  //   const dbInstance = req.app.get('db')
  //   const { savedScheme } = req.params;

  //   dbInstance.get_img(savedScheme).then(color => {
  //     res.status(200).sent(color)
  //   }).catch(err => {
  //     res.status(500).send({errorMessage: "Can't see the thing"})
  //     console.log(err)
  //   })
  // }
}