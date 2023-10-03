pipeline {
    agent {
        docker {
            image 'node:18.18.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Change directory') { 
            steps {
                sh 'cd modulo11/' 
            }
        }
        stage('Install packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run cypress') {
            steps {
                sh 'NO_COLOR=1 npx cypress run --headless --browser electron'
            }
        }
    }
}