CREATE PROCEDURE SELECT_CATEGORY

    @CATEGORY_NAME NVARCHAR(100)
AS
BEGIN 
    SELECT * FROM CATEGORY WHERE CATEGORY_NAME = @CATEGORY_NAME;
END
