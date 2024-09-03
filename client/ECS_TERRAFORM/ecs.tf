resource "aws_ecs_cluster" "web-cluster" {
  name = var.cluster_name
  capacity_providers = [aws_ecs_capacity_provider.test.name]
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
  container_definitions = file("container-definition.json")
  network_mode = "bridge"
  tags = {
    "env" = "prod"
    "project" = "swaco"
  }
}

