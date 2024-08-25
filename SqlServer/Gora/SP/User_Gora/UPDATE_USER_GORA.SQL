CREATE PROCEDURE UPDATE_TYPE_USERS

    @TypeUserID uniqueidentifier,
    @Description NVARCHAR(150) = NULL,
    @Register NVARCHAR(50) = NULL
AS

BEGIN

    UPDATE [TYPE_USER]

    SET 

        [TYPE_USER_DESCRIPTION] = ISNULL(@Description, [TYPE_USER_DESCRIPTION]),
        [TYPE_USER_REGISTER] = ISNULL(@Register, [TYPE_USER_REGISTER])
        
    WHERE 

        [TYPE_USER_ID] = @TypeUserID;
END
