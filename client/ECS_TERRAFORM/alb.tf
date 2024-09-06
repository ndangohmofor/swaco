resource "aws_alb" "prod-alb" {
  name = "swaco-us-alb"
  load_balancer_type = "application"
  internal = false 
  subnets = module.vpc.public_subnets
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
  security_groups = [aws_security_group.lb.id]
}

resource "aws_security_group" "lb" {
  name = "allow-all-lb"
  vpc_id = data.aws_vpc.main.id
  ingress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

    tags = {
      "env" = "prod"
      "project" = "swaco"
    }
}

resource "aws_lb_target_group" "alb-lb-target-group" {
  name = "alb-lb-target-group"
  port = 80
  protocol = "HTTP"
  target_type = "instance"
  vpc_id = data.aws_vpc.main.id
  health_check {
    path = "/"
    healthy_threshold = 2
    unhealthy_threshold = 10
    timeout = 60
    interval = 300
    matcher = "200,301,302"
  }
}

resource "aws_lb_listener" "web-listener-http" {
  load_balancer_arn = aws_alb.prod-alb.arn
  port = 80
  protocol = "HTTP"
  default_action {
    type = "redirect"
    # target_group_arn = aws_lb_target_group.alb-lb-target-group.arn
    redirect {
      status_code = "HTTP_301"
      protocol = "HTTPS"
      port = "443"
    }
  }
}

resource "aws_lb_listener" "web-listener-https" {
  load_balancer_arn = aws_alb.prod-alb.arn
  port = 443
  protocol = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-TLS13-1-2-2021-06" 
  certificate_arn = "arn:aws:acm:us-east-1:727646489632:certificate/c6a4aaf0-8957-4485-81f7-4b72226abd1a"
  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.alb-lb-target-group.arn
  } 
}