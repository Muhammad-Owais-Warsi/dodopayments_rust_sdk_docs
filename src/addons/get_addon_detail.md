# Get Addon Detail

Retrieve detailed information about a specific addon.

## Request

```rust
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let addon_id = "addon_xxxxxxxxxx";

    let resp = client.addons().id(addon_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Addon Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `business_id` | `string` | Unique identifier for the business to which the addon belongs. |
| `created_at` | `string` | Created time |
| `currency` | `Currency` | Currency of the Addon |
| `description` | `object` | Optional description of the Addon |
| `id` | `string` | id of the Addon |
| `image` | `object` | Image of the Addon |
| `name` | `string` | Name of the Addon |
| `price` | `integer` | Amount of the addon |
| `tax_category` | `TaxCategory` | Tax category applied to this Addon |
| `updated_at` | `string` | Updated time |

Retrieve a specific addon

### 500 Status

Something went wrong :(