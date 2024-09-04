output "alb_dns" {
  value = aws_lb.prod-alb.dns_name
}

output "vpc_id" {
  value = module.vpc.vpc_id
}