import { Component , ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  services = [
    { image: 'Physical Therapy.jpeg', title: 'Physical Therapy', description: 'Physical therapy (PT) is a healthcare discipline focused on improving movement, restoring function, and relieving pain through specialized exercises, manual therapy, and patient education. It plays a crucial role in rehabilitation, injury prevention, and overall wellness.' },
    { image: 'Physical Fitness.jpeg', title: 'Physical Fitness', description: 'Physical fitness refers to the overall well-being and efficiency of the body in performing daily activities with ease and energy. It involves a combination of cardiovascular endurance, muscular strength, flexibility, and body composition. Regular physical activity, such as strength training .' },
    { image: 'Healthy Food.jpeg', title: 'Healthy Food', description: 'Healthy food consists of nutrient-rich, natural, and balanced meals that provide essential vitamins, minerals, and energy for the body. It includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats, which help support overall well-being. Eating a well-balanced diet improves digestion.' },
    { image: 'Physical Recovery.jpeg', title: 'Physical Recovery', description: 'Physical recovery is the process of healing and restoring the body after an injury, surgery, or intense physical activity. It involves rest, rehabilitation exercises, proper nutrition, and hydration to promote muscle repair and reduce inflammation. Techniques such as physical therapy, massage, stretching.' },
    { image: '19.png', title: 'Live Chat with Experts', description: 'Live Chat with Experts provides instant access to professional guidance from health and wellness specialists. Whether you have questions about fitness, nutrition, recovery, or overall well-being, our experts are available in real time to offer personalized advice and solutions. This service ensures quick and reliable support.' },
    { image: '20.png', title: 'Supplements', description: 'Supplements are nutritional products designed to enhance your diet and fill in any nutritional gaps. They provide essential vitamins, minerals, protein, and other nutrients that may be lacking in your regular meals. Whether you’re aiming to boost energy, improve muscle recovery, or support immune health.' },
    { image: '21.png', title: 'Periodic Reports', description: 'Periodic reports are regular health progress updates that help you track and monitor your journey toward better health. These reports provide insights into your fitness levels, nutritional habits, and any other health metrics youre focusing on. By receiving these updates, you can identify trends, make necessary adjustments to your routine.' },
    { image: '22.png', title: 'Articles', description: 'Our articles are curated pieces of content written by health and wellness experts, covering a wide range of topics such as fitness, nutrition, mental well-being, and lifestyle improvements. These articles are designed to keep you informed with the latest trends, tips, and evidence-based advice to help you maintain a healthy lifestyle.' }
  ];

  nextSlide() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prevSlide() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  
}
