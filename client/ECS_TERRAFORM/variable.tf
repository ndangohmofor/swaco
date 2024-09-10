variable "key_name" {
  type = string
  description = "the name for the ssh key used for aws_launch_configuration"
  default = "swaco-ssh-key"
}

variable "cluster_name" {
  type = string
  description = "the name for the ECS cluster"
  default = "swaco-cluster"
}

variable "domain_name" {
  type = string
  description = "the domain name for the ECS cluster"
  default = "swaco.us"
}