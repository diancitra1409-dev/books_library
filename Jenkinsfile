pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/diancitra1409-dev/books_library.git', branch: 'main'
            }
        }

        stage('Inject ENV') {
            steps {
                withCredentials([file(credentialsId: 'env-file', variable: 'ENVFILE')]) {
                    bat '''
                    rm -f .env
                    cp "$ENVFILE" .env
                    chmod 600 .env
                    '''
                }
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker compose down || true
                docker compose up -d --build
                docker ps
                '''
            }
        }

    }
}