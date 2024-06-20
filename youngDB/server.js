const bodyParser = require("body-parser");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./User"); // Import the User model
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

const secretKey = process.env.JWT_SECRET;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.MONGODB_ATLAS_ENDPOINT;
const connection = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await connection.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Retry logic if needed
  }
}

// API Endpoints
app.get("/api/clients", async (req, res) => {
  try {
    const database = connection.db("YoungDB");
    const collection = database.collection("clients");
    const clients = await collection.find({}).toArray();
    res.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE endpoint for clients
app.delete("/api/clients/:id", async (req, res) => {
  try {
    // Connect to MongoDB and access the "clients" collection
    const database = connection.db("YoungDB");
    const collection = database.collection("clients");

    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Client not found" });
    }

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/clients-logos"); // Set destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep original file name
  },
});

const upload = multer({ storage: storage });

// POST route for adding a new client
app.post("/api/clients", upload.single("logo"), (req, res) => {
  const { name } = req.body;
  const logoUrl = `/assets/clients-logos/${req.file.filename}`; // Use template literals for string interpolation

  // Here you can save the client data to your database with the logoUrl

  res.json({ name, logoUrl }); // Respond with the client data including the logoUrl
});

app.get("/api/teams", async (req, res) => {
  try {
    const database = connection.db("YoungDB");
    const collection = database.collection("team");
    const teams = await collection.find({}).toArray();
    res.json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/submitForm", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address, location } =
      req.body;

    const database = connection.db("YoungDB");
    const collection = database.collection("iftarForm");

    await collection.insertOne({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      location,
    });

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Error submitting form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/contactform", async (req, res) => {
  try {
    const {
      selectedType,
      selectedBudget,
      selectedDate,
      meetingDateTime,
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      description,
      hearing,
      status,
    } = req.body;

    const database = connection.db("YoungDB");
    const collection = database.collection("contactform");

    await collection.insertOne({
      selectedType,
      selectedBudget,
      selectedDate,
      meetingDateTime,
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      description,
      hearing,
      status,
    });

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Error submitting form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/contactForm", async (req, res) => {
  try {
    const database = connection.db("YoungDB");
    const collection = database.collection("contactform");
    const formData = await collection.find({}).toArray(); // Assuming you only have one document for contact form data
    res.json(formData);
  } catch (error) {
    console.error("Error fetching contact form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE endpoint for contact form
app.delete("/api/contactForm/:id", async (req, res) => {
  try {
    // Connect to MongoDB and access the "contactform" collection
    const database = connection.db("YoungDB");
    const collection = database.collection("contactform");

    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Contact form data not found" });
    }

    res.status(200).json({ message: "Contact form data deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/testimonials", async (req, res) => {
  try {
    const database = connection.db("YoungDB");
    const collection = database.collection("testimonials");
    const testimonials = await collection.find({}).toArray();
    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post testimonial endpoint
app.post("/api/testimonials", async (req, res) => {
  try {
    const { logourl, comment, name, role } = req.body;

    // Connect to MongoDB and access the "testimonials" collection
    const database = connection.db("YoungDB");
    const collection = database.collection("testimonials");

    // Insert the new testimonial into the collection
    await collection.insertOne({ logourl, comment, name, role });

    res.status(201).json({ message: "Testimonial posted successfully" });
  } catch (error) {
    console.error("Error posting testimonial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/testimonials/:id", async (req, res) => {
  try {
    // Connect to MongoDB and access the "testimonials" collection
    const database = connection.db("YoungDB");
    const collection = database.collection("testimonials");

    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/workVideos", async (req, res) => {
  try {
    const database = connection.db("YoungDB");
    const collection = database.collection("workVideos");
    const videos = await collection.find({}).toArray();
    res.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB and create collection if it doesn't exist
    const database = connection.db("YoungDB"); // Replace "YourDatabaseName" with your actual database name
    const collection = database.collection("users"); // Use the "users" collection for storing users

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login endpoint
app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Connect to MongoDB and access the "users" collection
    const database = connection.db("YoungDB"); // Replace "YourDatabaseName" with your actual database name
    const collection = database.collection("users");

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server and connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectToMongoDB(); // Connect to MongoDB when the server starts
  console.log(`Server started on port ${PORT}`);
});
