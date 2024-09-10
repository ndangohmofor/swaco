resource "aws_route53_zone" "swaco-us" {
  name = "swaco.us"
  tags = {
    "env"     = "prod"
    "project" = "swaco"
  }
}

resource "aws_route53_record" "swaco-us-root" {
  zone_id = aws_route53_zone.swaco-us.zone_id
  name    = "swaco.us"
  type    = "A"
  alias {
    name                   = aws_alb.prod-alb.dns_name
    zone_id                = aws_alb.prod-alb.zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www-swaco-us" {
  zone_id = aws_route53_zone.swaco-us.zone_id
  name    = "www.swaco.us"
  type    = "A"
  alias {
    name                   = aws_alb.prod-alb.dns_name
    zone_id                = aws_alb.prod-alb.zone_id
    evaluate_target_health = true
  }
}
