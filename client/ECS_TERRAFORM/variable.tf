variable "key_name" {
  type = string
  description = "the name for the ssh key used for aws_launch_configuration"
}

variable "cluster_name" {
  type = string
  description = "the name for the ECS cluster"
}