# Quick Start

This guide will help you get started with the DodoPayments Rust SDK and make your first API request.

By the end of this guide, you’ll have a basic setup ready and will be able to interact with DodoPayments directly from your Rust application.

## Installation

1. Install via CLI

```rust
cargo add dodopayments_rust
```

2. Manual Installation by adding in your `Cargo.toml`

```rust
dodopayments_rust = "2.0.0"
```

## Initialize client

```rust
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;
}
```

## Make your first request

```rust
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client.payments().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}
```