resource "aws_iam_role" "ecs=instance-role" {
    name = "ecs-instance-role-prod-web"
    path = "/"

    assume_role_policy = <<EOF
        {
        "Version": "2012-10-17",
        "Statement": [
            {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Effect": "Allow",
            }
        ]
    }
    EOF
}