resource "aws_route53_zone" "swaco-us" {
  name = "swaco.us"
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
}