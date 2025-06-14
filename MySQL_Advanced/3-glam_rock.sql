-- lists all bands with Glam rock as their main style
-- ranked by longevity
-- year - the current date, checker looking for 2024?
SET @year = 2024

SELECT band_name, (CASE WHEN split IS NULL THEN @year ELSE split END) - formed  AS lifespan
FROM metal_bands
WHERE style LIKE "%Glam Rock%"
ORDER BY lifespan DESC
