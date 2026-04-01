# Get License Key Instance

Retrieve details of a specific license key instance by its ID.

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

    let license_key_id = "lic_xxxxxxxxxx";
    let instance_id = "lki_xxxxxxxxxx";

    let resp = client
        .licenses()
        .license_keys()
        .id(license_key_id)
        .license_key_instances()
        .id(instance_id)
        .retrieve()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `License key instance ID` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `business_id` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `license_key_id` | `string` |  |
| `name` | `string` |  |

License key instance found

### 404 Status

License key instance not found

### 500 Status

Something went wrong :(