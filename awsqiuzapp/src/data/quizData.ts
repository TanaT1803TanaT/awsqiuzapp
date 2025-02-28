export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "AWSで仮想サーバー（インスタンス）を作成し、自由にOSを選択できるサービスはどれですか？",
    options: [
      { id: "A", text: "Lambda" },
      { id: "B", text: "EC2" },
      { id: "C", text: "RDS" },
      { id: "D", text: "S3" }
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    question: "サーバーを管理せずにコードを実行できる、イベント駆動型のコンピューティングサービスはどれですか？",
    options: [
      { id: "A", text: "EC2" },
      { id: "B", text: "RDS" },
      { id: "C", text: "Lambda" },
      { id: "D", text: "EFS" }
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    question: "AWSでユーザーが定義できる仮想ネットワーク環境を提供するサービスはどれですか？",
    options: [
      { id: "A", text: "VPC" },
      { id: "B", text: "CloudTrail" },
      { id: "C", text: "S3" },
      { id: "D", text: "CloudWatch" }
    ],
    correctAnswer: "A"
  },
  {
    id: 4,
    question: "AWSが提供するフルマネージドなリレーショナルデータベースサービスはどれですか？",
    options: [
      { id: "A", text: "DynamoDB" },
      { id: "B", text: "RDS" },
      { id: "C", text: "S3" },
      { id: "D", text: "CloudFormation" }
    ],
    correctAnswer: "B"
  },
  {
    id: 5,
    question: "AWSが提供する、PostgreSQLとMySQLと互換性がある高性能リレーショナルデータベースサービスはどれですか？",
    options: [
      { id: "A", text: "Aurora" },
      { id: "B", text: "DynamoDB" },
      { id: "C", text: "Redshift" },
      { id: "D", text: "IAM" }
    ],
    correctAnswer: "A"
  },
  {
    id: 6,
    question: "オブジェクトストレージを提供し、静的ウェブサイトホスティングやバックアップなどにも利用されるAWSのサービスはどれですか？",
    options: [
      { id: "A", text: "EBS" },
      { id: "B", text: "S3" },
      { id: "C", text: "CloudTrail" },
      { id: "D", text: "RDS" }
    ],
    correctAnswer: "B"
  },
  {
    id: 7,
    question: "AWSリソースの監視やログの収集を行い、メトリクスを可視化できるサービスはどれですか？",
    options: [
      { id: "A", text: "CloudTrail" },
      { id: "B", text: "CloudWatch" },
      { id: "C", text: "VPC" },
      { id: "D", text: "EC2" }
    ],
    correctAnswer: "B"
  },
  {
    id: 8,
    question: "AWSのコストと使用状況を可視化し、予算管理に役立つサービスはどれですか？",
    options: [
      { id: "A", text: "Trusted Advisor" },
      { id: "B", text: "Cost Explorer" },
      { id: "C", text: "CloudFormation" },
      { id: "D", text: "EC2" }
    ],
    correctAnswer: "B"
  },
  {
    id: 9,
    question: "インフラストラクチャをコードとして管理し、テンプレートを用いてAWSリソースを作成・管理できるサービスはどれですか？",
    options: [
      { id: "A", text: "Elastic Beanstalk" },
      { id: "B", text: "CloudFormation" },
      { id: "C", text: "OpsWorks" },
      { id: "D", text: "CodePipeline" }
    ],
    correctAnswer: "B"
  },
  {
    id: 10,
    question: "AWSのユーザー管理やアクセス制御を行うサービスはどれですか？",
    options: [
      { id: "A", text: "VPC" },
      { id: "B", text: "IAM" },
      { id: "C", text: "CloudTrail" },
      { id: "D", text: "Lambda" }
    ],
    correctAnswer: "B"
  },
  {
    id: 11,
    question: "AWSのAPI呼び出しを記録し、監査やセキュリティ分析に利用できるサービスはどれですか？",
    options: [
      { id: "A", text: "CloudWatch" },
      { id: "B", text: "CloudTrail" },
      { id: "C", text: "S3" },
      { id: "D", text: "EC2" }
    ],
    correctAnswer: "B"
  },
  {
    id: 12,
    question: "複数のEC2インスタンス間で共有可能なスケーラブルなファイルストレージサービスはどれですか？",
    options: [
      { id: "A", text: "EBS" },
      { id: "B", text: "S3" },
      { id: "C", text: "EFS" },
      { id: "D", text: "DynamoDB" }
    ],
    correctAnswer: "C"
  }
];