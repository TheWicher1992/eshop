const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

function fileFilter(req, file, cb) {
  const fileTypeRegex = /jpg|jpeg|png/
  console.log(file)
  const fileExtTest = fileTypeRegex.test(path.extname(file.originalname))
  const fileMimeTest = fileTypeRegex.test(file.mimetype)
  if (fileExtTest && fileMimeTest) {
    console.log('test passed')
    cb(null, true)
  }
  else {
    console.log('test not passed')
    cb(new Error("FILE_TYPE_ERROR"))
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('image')

const uploadImage = (req, res) => new Promise((resolve, reject) => {
  upload(req, res, (err) => {
    if (err) {
      reject(err)
    }
    else resolve()
  })
})


router.post('/product-image', async (req, res) => {
  try {
    await uploadImage(req, res)
    res.send(`/${req.file.path}`)
  } catch (err) {
    if (err.message === 'FILE_TYPE_ERROR') return res.status(400).json({
      error: 'FILE_TYPE_ERROR'
    })
    return res.status(500).json({
      error: 'SERVER_ERROR'
    })
  }
})



module.exports = router
