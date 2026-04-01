# Update Addon Image

Update images for an existing addon.

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

    let resp = client.addons().id(addon_id).update_image().send().await?;

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
| `image_id` | `string` |  |
| `url` | `string` |  |

Generate presigned upload URL for addon image

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(