ALTER TABLE blogful_articles
  ADD COLUMN
    author INTEGER REFERENCES blogful_users(id)
    ON DELETE SET NULL;