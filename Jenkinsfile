pipeline {
    agent any

    environment {
        IMAGE_NAME = "yourdockerhub/node-app"
        IMAGE_TAG = "v${BUILD_NUMBER}"
    }

    stages {

        stage('Git Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', 
                usernameVariable: 'DOCKER_USER', 
                passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                kubectl set image deployment/node-app node-app=$IMAGE_NAME:$IMAGE_TAG
                """
            }
        }
    }
}
