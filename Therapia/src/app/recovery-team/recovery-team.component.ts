import { Component , ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recovery-team',
  templateUrl: './recovery-team.component.html',
  styleUrl: './recovery-team.component.scss'
})
export class RecoveryTeamComponent {

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  
  doctors = [
    
    { image: 'recoveryDoctors/doctor1.jpg', name: 'Dr. Ahmed Ali', description: 'Affiliation: Washington University in St. Louis Contributions:Dr. Shirley Sahrmann is a pioneer in movement science and rehabilitation. She developed the Movement System Impairment (MSI) syndromes, which help diagnose and treat musculoskeletal disorders based on movement patterns ' },
    { image: 'recoveryDoctors/doctor2.jpg', name: 'Dr. Mohmed Hassan', description: 'Expertise: Neuromuscular & Postural RehabilitationAffiliation: Charles University, PragueContributions:Dr. Janda was a neurologist and physiotherapist who introduced muscle imbalance syndromes and their impact on posture and movement dysfunctions. His work led to the development of corrective exercises for conditions like lower back pain and sports injuries, influencing rehabilitation worldwide.'},

 
    { image: 'recoveryDoctors/doctor3.jpg', name: 'Dr. Osama Ahmed', description: 'althcare discipline focused on improving movement ' },
    { image: 'recoveryDoctors/doctor1.jpg', name: 'Dr. Ahmed Ali', description: 'Affiliation: Washington University in St. Louis Contributions:Dr. Shirley Sahrmann is a pioneer in movement science and rehabilitation. She developed the Movement System Impairment (MSI) syndromes, which help diagnose and treat musculoskeletal disorders based on movement patterns ' }, 
    { image: 'recoveryDoctors/doctor1.jpg', name: 'Dr. Ahmed Ali', description: 'Affiliation: Washington University in St. Louis Contributions:Dr. Shirley Sahrmann is a pioneer in movement science and rehabilitation. She developed the Movement System Impairment (MSI) syndromes, which help diagnose and treat musculoskeletal disorders based on movement patterns ' }, 

    { image: 'recoveryDoctors/doctor6.jpg', name: 'Dr. Shirley Sahrmann', description: 'Expertise: Movement System Impairment (MSI) SyndromesAffiliation: Washington University in St. LouisContributions:Dr. Shirley Sahrmann is a pioneer in movement science, known for her work in Movement System Impairment (MSI) Syndromes. Her research focuses on diagnosing and treating musculoskeletal disorders by identifying faulty movement patterns.' },
    { image: 'recoveryDoctors/doctor3.jpg', name: 'Dr. Osama Ahmed', description: 'Expertise: Orthopedic & Manual TherapyAffiliation: University of St. Augustine for Health Sciences Contributions:Dr. Catherine Patla is a respected leader in manual therapy and orthopedic physical therapy. She has played a major role in developing advanced treatment techniques for spinal dysfunction, joint mobilization, and soft tissue therapy.' },
    { image: 'recoveryDoctors/doctor5.jpg', name: 'Dr. Jennifer Bottomley', description: ' Expertise: Geriatric Physical Therapy & Rehabilitation Affiliation: American Physical Therapy Association (APTA)Contributions:Dr. Jennifer Bottomley is a leading expert in geriatric physical therapy, focusing on rehabilitation for older adults. She has helped develop treatment strategies for fall prevention, mobility training, and chronic pain management in elderly populations.' },
    { image: 'recoveryDoctors/doctor1.jpg', name: 'Dr. Ahmed Ali', description: 'Expertise: Pain Science & NeurodynamicsAffiliation: Neuro Orthopedic Institute (NOI), AustraliaContributions:Dr. David Butler is a key figure in pain neuroscience education. He introduced concepts like Explain Pain, which helps patients understand and manage chronic pain through education and movement strategies. His work on neurodynamics has improved rehabilitation techniques for nerve-related injuries and conditions.' },
    { image: 'recoveryDoctors/doctor2.jpg', name: 'Dr. Mohmed Hassan', description: 'Expertise: Neuromuscular & Postural RehabilitationAffiliation: Charles University, PragueContributions:Dr. Janda was a neurologist and physiotherapist who introduced muscle imbalance syndromes and their impact on posture and movement dysfunctions. His work led to the development of corrective exercises for conditions like lower back pain and sports injuries, influencing rehabilitation worldwide.' },
   
      ];

  // دالة للانتقال إلى الشريحة التالية
  nextSlide() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  // دالة للانتقال إلى الشريحة السابقة
  prevSlide() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  
}
