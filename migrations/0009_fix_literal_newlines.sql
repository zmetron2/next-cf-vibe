UPDATE vibe_resources
SET description = REPLACE(description, '\n', CHAR(10))
WHERE id = 3;
