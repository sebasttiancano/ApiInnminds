CREATE PROCEDURE SELECT_USER_GORA

    @UserGora NVARCHAR(50) = NULL,
    @TypeUserID uniqueidentifier = NULL,
    @UserEcommerceCognito uniqueidentifier = NULL

AS

BEGIN

    SELECT 

        [USER_GORA], 
        [TYPE_USER_ID], 
        [USER_ECOMMERCE_COGNITO]

    FROM

        [USER_GORA]

    WHERE 

        (@UserGora IS NULL OR [USER_GORA] = @UserGora) 
        
        AND

        (@TypeUserID IS NULL OR [TYPE_USER_ID] = @TypeUserID) 
        
        AND

        (@UserEcommerceCognito IS NULL OR [USER_ECOMMERCE_COGNITO] = @UserEcommerceCognito);
END