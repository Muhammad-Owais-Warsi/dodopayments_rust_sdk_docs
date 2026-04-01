# Update Addon

Modify the details of an existing addon.

## Request

```rust
use dodopayments_rust::{models::PatchAddonRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let addon_id = "addon_xxxxxxxxxx";

    let resp = client
        .addons()
        .id(addon_id)
        .update()
        .body(PatchAddonRequest {
            name: Some("Updated Addon".to_string()),
            price: Some(19),
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Addon Id` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `currency` | `object` |  |
| `description` | `object` | Description of the Addon, optional and must be at most 1000 characters. |
| `image_id` | `object` | Addon image id after its uploaded to S3 |
| `name` | `object` | Name of the Addon, optional and must be at most 100 characters. |
| `price` | `object` | Amount of the addon |
| `tax_category` | `object` |  |
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

Patch update an addon

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(