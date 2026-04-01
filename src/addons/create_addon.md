# Create Addon

Create a new addon product that can be attached to subscription products.

## Request

```rust
use dodopayments_rust::{models::CreateAddonRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .addons()
        .create()
        .body(CreateAddonRequest {
            name: "Premium Support".to_string(),
            price: 99,
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `currency` | `Currency` | The currency of the Addon |
| `description` | `object` | Optional description of the Addon |
| `name` | `string` | Name of the Addon |
| `price` | `integer` | Amount of the addon |
| `tax_category` | `TaxCategory` | Tax category applied to this Addon |
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

Create a new addon

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(