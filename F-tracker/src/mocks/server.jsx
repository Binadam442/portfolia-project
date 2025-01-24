const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "your_secret_key";
const expiresIn = "1h";

server.use(middlewares);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Mock login endpoint

// Mock login endpoint
server.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
  
    // Check if user exists in db.json
    const user = router.db.get("users").find({ username, password }).value();
  
    if (user) {
      // Generate a token
      const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn });
      res.status(200).json({ token, userId: user.id });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  });
  
  // Middleware to verify tokens for protected routes
  server.use("/fitnessData", (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  });
  
  // Fitness data routes (filtered by userId)
  server.get("/fitnessData", (req, res) => {
    const userId = req.userId;
    const data = router.db.get("fitnessData").filter({ userId }).value();
    res.status(200).json(data);
  });
  
  // Add fitness data for the logged-in user
  server.post("/fitnessData", (req, res) => {
    const userId = req.userId;
    const newEntry = { ...req.body, userId };
    const data = router.db.get("fitnessData").insert(newEntry).write();
    res.status(201).json(data);
  });
  
  // Use default JSON Server router
  server.use(router);
  
  // Start server
  const PORT = 5000;
  server.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
  });