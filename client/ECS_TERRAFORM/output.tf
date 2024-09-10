output "alb_dns" {
  value = aws_alb.prod-alb.dns_name
}

output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnets" {
  value = module.vpc.public_subnets
}

output "igw-id" {
  value = module.vpc.igw_id
}

output "swaco-name-servers" {
  value = aws_route53_zone.swaco-us.name_servers
}
