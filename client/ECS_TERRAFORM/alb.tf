resource "aws_alb" "prod-alb" {
  name = "prod-ecs-alb"
  load_balancer_type = "application"
  internal = false 
  subnets = module.vpc.public_subnets
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
  security_groups = [aws_security_group.lb.id]
}