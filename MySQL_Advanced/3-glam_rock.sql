-- lists all bands with Glam rock as their main style
-- ranked by longevity
-- year - the current date
SELECT band_name, IFNULL(split, YEAR(CURDATE())) - formed  AS lifespan
FROM metal_bands
WHERE style LIKE "%Glam Rock%"
ORDER BY lifespan DESC
