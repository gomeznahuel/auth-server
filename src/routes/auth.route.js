const { Router } = require("express");
const { check } = require("express-validator");
const { login, register, tokenValidation } = require("../controllers/auth.controller");
const { isValidJWTToken } = require("../middlewares/isValidJWTToken");
const { validateFields } = require("../middlewares/validate-fields");
const router = Router();

// Login route.
router.post("/login", [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ], login
);

// Register a new user.
router.post("/register", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ], register
);

// Validate JWT token.
router.get("/validate", [isValidJWTToken], tokenValidation);

module.exports = router;
