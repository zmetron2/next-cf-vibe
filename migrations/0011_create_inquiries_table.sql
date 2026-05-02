DROP TABLE IF EXISTS vibe_inquiries;
CREATE TABLE vibe_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, in_progress, completed
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
