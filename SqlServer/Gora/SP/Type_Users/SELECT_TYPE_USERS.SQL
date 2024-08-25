CREATE PROCEDURE SELECT_TYPE_USERS

    @TypeUserID uniqueidentifier = NULL,
    @Description NVARCHAR(150) = NULL,
    @Register NVARCHAR(50) = NULL
AS
BEGIN
    SELECT 

        [TYPE_USER_ID], 
        [TYPE_USER_DESCRIPTION], 
        [TYPE_USER_REGISTER], 
        [TYPE_USER_DATE]
        
    FROM 

        [TYPE_USER]
    WHERE

        (@TypeUserID IS NULL OR [TYPE_USER_ID] = @TypeUserID) 
        
        AND

        (@Register IS NULL OR [TYPE_USER_REGISTER] = @Register);
END
