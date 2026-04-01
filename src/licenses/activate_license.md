# Activate License

Activate a license for the user.

## Request

```rust
use dodopayments_rust::{
    models::ActivateLicenseKeyRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .licenses()
        .activate()
        .body(ActivateLicenseKeyRequest {
            license_key: "lic_xxxxxxxxxx".to_string(),
            name: "My Device".to_string(),
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
| `license_key` | `string` |  |
| `name` | `string` |  |
## Responses

### 201 Status

License key instance created

| Field            | Type     | Description                                                            |
| :--------------- | :------- | :--------------------------------------------------------------------- |
| `business_id`    | `string` | Business ID                                                            |
| `created_at`     | `string` | Creation timestamp                                                     |
| `customer`       | `object` | Limited customer details associated with the license key.              |
| `id`             | `string` | License key instance ID                                                |
| `license_key_id` | `string` | Associated license key ID                                              |
| `name`           | `string` | Instance name                                                          |
| `product`        | `object` | Related product info. Present if the license key is tied to a product. |

### 403 Status

License key cannot be activated (inactive)

### 404 Status

License key not found

### 422 Status

License key activation limit reached

### 500 Status

Something went wrong :(