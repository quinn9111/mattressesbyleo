const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const Cart = require('./Cart')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
    },
    address_2: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    // set savedMattress to be an array of data that adheres to the mattressSchema
    cart: [Cart.schema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
)

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User