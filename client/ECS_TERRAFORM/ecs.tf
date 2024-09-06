resource "aws_ecs_cluster" "web-cluster" {
  name = var.cluster_name
#   capacity_providers = [aws_ecs_capacity_provider.prod.name]
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
}

resource "aws_ecs_capacity_provider" "prod" {
  name = "capacity-provider-prod"
  auto_scaling_group_provider {
    auto_scaling_group_arn = aws_autoscaling_group.asg.arn
    managed_termination_protection = "ENABLED"

    managed_scaling {
      status = "ENABLED"
      target_capacity = 85
    }
  }
}

# Update the file container-def so taht it's pulling images from ecr
resource "aws_ecs_task_definition" "task_definition_prod" {
  family = "web-family"
  container_definitions = file("container-definitions/container-def.json")
  network_mode = "bridge"
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
}

resource "aws_ecs_service" "service" {
  name = "web-service"
  cluster = aws_ecs_cluster.web-cluster.id
  task_definition = aws_ecs_task_definition.task_definition_prod.arn
  desired_count = 1
  ordered_placement_strategy {
    type = "binpack"
    field = "cpu"
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.alb-lb-target-group.arn
    container_name = "pink-slon"
    container_port = 80
  }
  #Optional: Allow external changes without Terraform plan difference(for example, ASG)
  lifecycle {
    ignore_changes = [ desired_count ]
  }
  launch_type = "EC2"
  depends_on = [ aws_lb_listener.web-listener-https, aws_lb_listener.web-listener-http ]
}

resource "aws_cloudwatch_log_group" "log_group" {
    name = "/ecs/frontend-container"
    tags = {
        "env" = "prod"
    }
}