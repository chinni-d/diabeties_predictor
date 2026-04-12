import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Brain,
  Shield,
  User,
  Award,
  Mail,
  ExternalLink,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-blue-900">
              About DiabetesAI
            </h1>
          </div>
          <p className="text-base text-blue-700 max-w-3xl mx-auto">
            Empowering individuals with AI-driven diabetes risk assessment and
            personalized health insights for better preventive care.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="border-blue-200 shadow-lg mb-8">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-blue-700 text-base leading-relaxed mb-6">
              DiabetesAI is dedicated to making diabetes risk assessment
              accessible, accurate, and actionable for everyone. We believe that
              early detection and prevention are key to reducing the global
              burden of diabetes and improving quality of life for millions of
              people worldwide.
            </p>
            <p className="text-blue-700 leading-relaxed">
              Our platform combines cutting-edge machine learning algorithms
              with evidence-based medical knowledge to provide personalized
              health insights that empower users to make informed decisions
              about their health and lifestyle.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Brain className="w-6 h-6 text-blue-600" />
                Advanced AI Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Our machine learning models are trained on comprehensive medical
                datasets and continuously updated to provide the most accurate
                risk assessments possible.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Shield className="w-6 h-6 text-blue-600" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Your health data is processed securely and stored locally. We
                prioritize your privacy and never share personal information
                with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <User className="w-6 h-6 text-blue-600" />
                Evidence-Based Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                All health recommendations are based on current medical
                guidelines and research from leading healthcare organizations
                and diabetes associations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Award className="w-6 h-6 text-blue-600" />
                Continuous Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                We regularly update our algorithms and recommendations based on
                the latest medical research and user feedback to ensure the
                highest quality service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Developer Section */}
        <Card className="border-blue-200 shadow-lg mb-8 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="w-6 h-6" />
              Meet the Developer
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Developer Photo */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 rounded-full shadow-lg">
                  <img
                    src="/me.png"
                    alt="Manikanta Darapureddy"
                    className="w-full h-full rounded-full shadow-md object-cover"
                  />
                </div>
              </div>

              {/* Developer Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">
                    Manikanta Darapureddy
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      AI/ML Engineer
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      Healthcare Technology
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Full Stack Development
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  I'm passionate about creating intelligent applications that
                  are useful, user-friendly, and impactful. With experience in
                  web development, AI and machine learning, I enjoy building
                  smart systems that make life easier. This project reflects my
                  commitment to combining cutting-edge tech with seamless
                  design.
                </p>

                {/* Social Links */}
                <div className="flex gap-3 justify-center lg:justify-start">
                  {/* GitHub */}
                  <a
                    href="https://github.com/chinni-d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    title="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/manikanta-darapureddy-6a1125314/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    title="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:darapureddymanikanta8@gmail.com"
                    className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 text-green-600" />
                  </a>

                  {/* Portfolio */}
                  <a
                    href="https://www.manikantadarapureddy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    title="Portfolio"
                  >
                    <Globe className="w-5 h-5 text-purple-600" />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card className="border-blue-200 shadow-lg mb-8">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription className="text-blue-100">
              The technology powering DiabetesAI's predictions
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">
                  Machine Learning Model
                </h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Random Forest Classifier</li>
                  <li>• Trained on Pima Indian Diabetes Dataset</li>
                  <li>• 95%+ accuracy on validation data</li>
                  <li>• Regular model updates and retraining</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">
                  Technology Stack
                </h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Next.js & React for frontend</li>
                  <li>• Python & scikit-learn for ML</li>
                  <li>• Secure API endpoints</li>
                  <li>• Responsive design with Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-900 mb-3">
              Important Medical Disclaimer
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              DiabetesAI is designed for educational and informational purposes
              only. The predictions and recommendations provided by this
              application should not be considered as medical advice, diagnosis,
              or treatment. Always consult with qualified healthcare
              professionals for proper medical evaluation, diagnosis, and
              treatment of any health conditions. Do not disregard professional
              medical advice or delay seeking treatment based on information
              from this application.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
