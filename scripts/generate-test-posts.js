import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get current file's directory (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const categories = [
  "Projects",
  "Inspiration",
  "Tips & Techniques",
  "Insights",
  "Company",
  "Community",
];

const sampleContent = `
Choosing the right paint color for your home can feel overwhelming, but it's one of the most impactful ways to refresh a space. Whether you're repainting a single room or tackling an entire home makeover, the right color sets the tone, enhances mood, and adds personality.

In this guide, we'll walk you through how to select the perfect color based on your style, lighting, and space.

### Understanding Color Psychology

Colors influence emotions and ambiance. Here's a quick guide to some popular choices:

* **Blues & Greens** – Calming, perfect for bedrooms and bathrooms. 
* **Neutrals (Beige, Gray, White)** – Versatile and timeless, great for living areas. 
* **Bold Colors (Red, Yellow, Deep Blue)** – Energetic, ideal for accent walls or creative spaces.

### Consider Your Space

The size and purpose of your room should influence your color choice:

1. **Small rooms** benefit from lighter colors to create an illusion of space
2. **Large rooms** can handle darker or bolder colors that create coziness
3. **High-traffic areas** like kitchens and hallways need durable, washable finishes
`;

// Generate 10 test posts
for (let i = 1; i <= 15; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i * 5); // Space out dates

  const category = categories[i % categories.length];
  const title = `Test Blog Post ${i}: ${category} Special`;
  const filename = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-test-post-${i}.md`;

  const frontmatter = `---
title: "${title}"
date: ${date.toISOString()}
author: James Brace
image: https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
category: "${category}"
---`;

  const content = frontmatter + sampleContent;

  fs.writeFileSync(
    path.join(__dirname, "..", "content", "blog", filename),
    content,
  );

  console.log(`Created test post: ${filename}`);
}

console.log("10 test posts created successfully!");
