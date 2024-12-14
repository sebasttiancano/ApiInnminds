CREATE TABLE PRODUCTS (
  PRODUCTS_ID INT IDENTITY(1,1) PRIMARY KEY, 
  PRODUCTS_NAME NVARCHAR(100) NOT NULL,
  PRODUCTS_DESCRIPTION NVARCHAR(150),
  PRODUCTS_WORTH FLOAT NOT NULL,
  PRODUCTS_STOCK INT NOT NULL,
  PRODUCTS_ENABLE BIT, 
  CATEGORY_ID INT NOT NULL,
  PRODUCTS_USER NVARCHAR(100),
  PRODUCTS_LAST_USER NVARCHAR(100),
  PRODUCTS_DATE DATETIME DEFAULT GETDATE(),
  PRODUCTS_LAST_DATE DATETIME DEFAULT GETDATE(),
  FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(CATEGORY_ID) ON DELETE CASCADE
);
