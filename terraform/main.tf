terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

data "cloudflare_zones" "devfestns" {
  filter {
    name = "devfestns.com"
  }
}

resource "cloudflare_record" "github_pages_apex_1" {
  zone_id = data.cloudflare_zones.devfestns.zones[0].id
  name    = "devfestns.com"
  value   = "185.199.108.153"
  type    = "A"
  proxied = true
}

resource "cloudflare_record" "github_pages_apex_2" {
  zone_id = data.cloudflare_zones.devfestns.zones[0].id
  name    = "devfestns.com"
  value   = "185.199.109.153"
  type    = "A"
  proxied = true
}

resource "cloudflare_record" "github_pages_apex_3" {
  zone_id = data.cloudflare_zones.devfestns.zones[0].id
  name    = "devfestns.com"
  value   = "185.199.110.153"
  type    = "A"
  proxied = true
}

resource "cloudflare_record" "github_pages_apex_4" {
  zone_id = data.cloudflare_zones.devfestns.zones[0].id
  name    = "devfestns.com"
  value   = "185.199.111.153"
  type    = "A"
  proxied = true
}

resource "cloudflare_record" "github_pages_www" {
  zone_id = data.cloudflare_zones.devfestns.zones[0].id
  name    = "www"
  value   = "gdghalifax.github.io"
  type    = "CNAME"
  proxied = true
}

output "cloudflare_nameservers" {
  value = data.cloudflare_zones.devfestns.zones[0].name_servers
}
