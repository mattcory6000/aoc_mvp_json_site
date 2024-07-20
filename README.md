This is an MVP for a public-and-trade facing website for AOC, a wine distributors in Tennessee.

The initial version relies on a large, single JSON file containing their portfolio data, which provides the content for the various pages.

A python script parsers an XLSX file exported from Vinosmith, the distributor's ERP. The name of that file, "sevenfifty-wines", refers to the aggregated SevenFifty marketplace, the file format for which contains all the information needed for such a site. (This is AOC's data exported from Vinosmith for delivery to SevenFifty; the data does not come from SevenFifty.) Vinosmith is the synchronous source of truth for the AOC portfolio data, and this file is easily exported, parsed, and pushed to this repo, allowing information on the site to remain accurate.

A more versatile Django version, with portfolio data stored in a Postgres server, will follow. 
