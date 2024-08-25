
CREATE PROCEDURE SELECT_ANIMALS

    @ANIMALS_ID uniqueidentifier = NULL
    @Description NVARCHAR(100) = NULL,
    @User NVARCHAR(50) = NULL,
    @Enable BIT = NULL,
    @Name NVARCHAR(50) = NULL,
    @Type NVARCHAR(50) = NULL,
    @OldDate NVARCHAR(50) = NULL

AS
BEGIN
    SELECT 
        [ANIMALS_ID], 
        [ANIMALS_DESCRIPTION], 
        [ANIMALS_USER], 
        [ANIMALS_DATE], 
        [ANIMALS_ENABLE], 
        [ANIMALS_NAME], 
        [ANIMALS_TYPE], 
        [ANIMALS_OLDDATE]
    FROM 
        [ANIMALS];

    WHERE 
        (@ANIMALS_ID IS NULL OR [ANIMALS_ID] = @ANIMALS_ID) 
        
        AND

        (@User IS NULL OR [ANIMALS_USER] = @User) 
        
        AND
        
        (@Enable IS NULL OR [ANIMALS_ENABLE] = @Enable) 
        
        AND

        (@Type IS NULL OR [ANIMALS_TYPE] = @Type)
END