data "aws_ami" "amazon-linux-2" {
    most_recent = true

    filter {
      name = "name"
      values = ["amzn-ami*amazon-ecs-optimized"]
    }

    filter {
      name = "architecture"
      values = ["x86_64"]
    }

    filter {
      name = "virtualization-type"
      values = ["hvm"]
    }
    owners = ["amazon", "self"]
}

resource "aws_security_group" "ec2-sg" {
  name = "allow-all-ec2"
  description = "Allow all"
  vpc_id = data.aws_vpc.main.id
  ingress = {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress = {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    project = "swaco"
  }
}