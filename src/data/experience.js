export const EXPERIENCE = [
    {
        id: 8,
        company: "Amazon",
        designation: "Senior Software Engineer | Languages & Runtime",
        duration: "2022 - present",
        location: "Dublin, Ireland",
        desc: "Optimized JVM internals including Custom ModuleLoader (96.8% latency reduction) and Reflection API bottlenecks (40% improvement). Validated Pyroscope V2 horizontal scalability on a 74-node cluster. Built end-to-end benchmarking automation on AWS EC2, reducing manual toil by 80%. Prototyped zero-overhead code coverage tool leveraging JVM profiling data.",
    },
    {
        id: 7,
        company: "AMD",
        designation: "Senior Software System Designer | Java Runtime & Performance",
        duration: "2020 - 2022",
        location: "Bengaluru, India",
        desc: "Contributed Configurable Card Size feature to OpenJDK-18 G1 GC (JDK-8272773), improving SpecJBB2015 score by 2%. Led characterization and tuning of enterprise benchmarks for EPYC processor roadmap. Designed AutoTuner, an intelligent benchmark optimization framework reducing manual tuning from 14 days to 3 days.",
    },
    {
        id: 6,
        company: "Experitest",
        designation: "Software Engineer | Seetest Android",
        duration: "2018 - 2019",
        location: "Delhi, India",
        desc: "Engineered core subsystems for Seetest Manual, a leading mobile automation platform. Conducted POCs and competitive analysis for cloud-based mobile testing infrastructure.",
    },
    {
        id: 5,
        company: "Soccer.ai",
        designation: "Co-Founder",
        duration: "2017 - 2018",
        location: "India",
        desc: "Developed a CNN-based image annotation tool to detect players, ball and pitch areas for quantitative football analytics. Extended the classifier for video processing.",
    },
    {
        id: 4,
        company: "Qualcomm",
        designation: "Software Engineer | Android Performance",
        duration: "2015 - 2017",
        location: "Hyderabad, India",
        desc: "Spearheaded performance tasks for Snapdragon Wear product line. Developed a Boot Analyzer driving 10% reduction in Android boot-up time. Designed an ML-based CPU Workload Classifier using Scikit-learn. Implemented Suspend to Disk (Hibernation) POC for wearable devices.",
    },
    {
        id: 3,
        company: "Qualcomm",
        designation: "Software Engineering Intern",
        duration: "May 2014 - July 2014",
        location: "Hyderabad, India",
        desc: "Developed static and dynamic memory analysis tools in Android to generate workloads, collect critical memory info, and create real-time graphs and visual reports for memory performance analysis.",
    },
    {
        id: 2,
        company: "Qualcomm",
        designation: "Software Engineering Intern",
        duration: "May 2013 - July 2013",
        location: "Hyderabad, India",
        desc: "Designed and developed a PCM data logging system for Linux audio driver using Relayfs to dump data from kernel to user-space. Integrated this system in an Android app.",
    },
    {
        id: 1,
        company: "IronCode Gaming",
        designation: "Game Development Intern",
        duration: "May 2012 - July 2012",
        location: "Delhi, India",
        desc: "Studied IronCode's game development framework based on DirectX-9 and developed two games, AirHawks and SmashOut.",
    },
]

export const EDUCATION = [
    {
        id: 0,
        institution: "Indian Institute of Technology Roorkee",
        degree: "Integrated Dual Degree (B.Tech + M.Tech) in Computer Science",
        duration: "2010 - 2015",
        percentage: "8.677 / 10.0",
    },
]

export const SKILLS = {
    "jvm & runtime": ["OpenJDK", "JVM Internals", "Hotspot VM", "GC Design", "Module Systems", "Bytecode (ASM)"],
    "performance": ["Benchmarking (JMH, SpecJBB)", "Profiling (JFR, async-profiler, perf)", "Performance Modeling", "Bottleneck Analysis"],
    "cloud & infra": ["AWS (EC2, S3, EKS)", "Distributed Systems", "Kubernetes", "Load Testing", "Capacity Planning", "FinOps"],
    "languages": ["Java", "C++", "Python", "C", "Go", "JavaScript"],
    "tools": ["perf", "Systrace", "GDB", "Git", "AMD uProf", "Scikit-learn", "Grafana Pyroscope"],
}
