#! /bin/bash

# variables
template_file=file://ci.yml
region=us-east-1
stack_name=diguiseppe-recipes-ci-test

# validate the stack
aws cloudformation validate-template --profile cuffney --template-body $template_file

# create or update
if ! aws cloudformation describe-stacks --region $region --stack-name $stack_name --profile cuffney ; then
  aws cloudformation create-stack --profile cuffney --stack-name $stack_name --template-body $template_file --capabilities CAPABILITY_NAMED_IAM
else
  aws cloudformation update-stack --profile cuffney --stack-name $stack_name --template-body $template_file --capabilities CAPABILITY_NAMED_IAM
fi