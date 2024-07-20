import pandas as pd
import json
import os


def parse_tags(tag):
    return {
        "chattanooga": "C" in tag,
        "knoxville": "K" in tag,
        "memphis": "M" in tag,
        "nashville": "N" in tag,
        "broad_market": "X" not in tag,
    }


def parse_data(input_file, output_file):
    # Read the input file (XLSX)
    df = pd.read_excel(input_file)

    # Replace NaN values with "" or another placeholder
    df = df.fillna("")

    # Initialize the data structure
    data = {"countries": [], "producers": [], "products": []}

    # Track unique countries and producers
    country_id_map = {}
    producer_id_map = {}
    next_country_id = 1
    next_producer_id = 1

    for _, row in df.iterrows():
        country_name = row["Country"]
        producer_name = row["Producer Name"]
        product_name = row["Product Name"]
        vintage = row["Vintage"]
        case_size = row["Case Size"]
        bottle_size = row["Bottle Size"]
        default_price = row["Default"]
        best_price = row["Best Price"]
        closeout = row["CLOSEOUT"]
        region = row["Region"]
        appellation = row["Appellation"]
        varietal = row["Varietal"]
        importer = row["Importer"]
        wine_upc = row["Wine UPC"]
        quantity_on_hand = row["Quantity On Hand"]
        available = row["Available"]
        tag = row["Tag"]

        # Handle country
        if country_name not in country_id_map:
            country_id_map[country_name] = next_country_id
            data["countries"].append({"id": next_country_id, "name": country_name})
            next_country_id += 1

        country_id = country_id_map[country_name]

        # Handle producer
        if producer_name not in producer_id_map:
            producer_id_map[producer_name] = next_producer_id
            data["producers"].append(
                {
                    "id": next_producer_id,
                    "name": producer_name,
                    "country_id": country_id,
                }
            )
            next_producer_id += 1

        producer_id = producer_id_map[producer_name]

        # Handle product
        product_entry = {
            "name": product_name,
            "producer_id": producer_id,
            "vintage": vintage,
            "case_size": case_size,
            "bottle_size": bottle_size,
            "default_price": default_price,
            "best_price": best_price,
            "closeout": closeout,
            "region": region,
            "appellation": appellation,
            "varietal": varietal,
            "importer": importer,
            "wine_upc": wine_upc,
            "quantity_on_hand": quantity_on_hand,
            "available": available,
        }
        product_entry.update(parse_tags(tag))
        data["products"].append(product_entry)

    # Write to JSON file
    with open(output_file, "w") as f:
        json.dump(data, f, indent=4)


if __name__ == "__main__":
    # Adjust the paths to the input and output files
    input_file = os.path.join("data", "sevenfifty-wines.xlsx")
    output_file = os.path.join("data", "data.json")

    # Check if the input file exists before attempting to read it
    if not os.path.exists(input_file):
        raise FileNotFoundError(f"Input file not found: {input_file}")

    parse_data(input_file, output_file)
