import { Curs } from './cursos/interfaces/curs.interface';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cursos: Curs[] = [
      {
        id: 1,
        title: "Common Knowledge",
        description: "This is the 101 of the Ori Tahiti world. Some useful vocabulary, interesting facts and insiders tips to take the first step into knowing the Tahitian culture.",
        purchased: true,
        url: "commonKnowledge",
        lessons: [
          {
            lessonTitle: "Lesson 1",
            theory: [
              {
                theoryName: "Tā'iri tāmau",
                description: "The lateral movement of the hips that exists in four distinct patterns: tahiri tamau, tamau taere, tamau tahito, paoti tamau, also called haere tifene. In Tahitian language, tamau means “to tie”, or a “bond” and refers to a continuous link.",
                img: "string"
              }, {
                theoryName: "Fa'arapu / Fa'arori",
                description: "A fast movement involving a rotation of the pelvis. The main accent of the movement originates from the dancer's belly. When the accent reaches the buttocks, the step is referred to as faarori.",
                img: "string"
              }, {
                theoryName: "Varu",
                description: "A hip movement that represents the shape of the figure eight. In the Tahitian language, “varu” refers to the number eight.",
                img: "string"
              }, {
                theoryName: "Ruru",
                description: "A shaking movement of the dancer's belly and buttocks. In the Tahitian language, “ruru” refers to a shaking motion. Ruru is a step meant to be utilized by soloists and is not often seen amongst dance groups.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              }, {
                practiceName: "Tā'iri tāmau",
                description: "Repeat Tā'iri tāmaus until sweating.",
                timing: "6 minutes"
              }, {
                practiceName: "Fa'arapu",
                description: "Repeat fa'arapus until sweating",
                timing: "7 minutes"
              }, {
                practiceName: "Varu",
                description: "Repeat varus until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              }, {
                testName: "Tā'iri tāmau",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Varu",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Ruru",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 2",
            theory: [
              {
                theoryName: "'Amaha",
                description: "Make a square with your hips. Front, right, back, left.",
                img: "string"
              }, {
                theoryName: "Ope",
                description: "One foot ahead, bended knees, make a circle with your pelvis towards the outside. Now with the other foot.",
                img: "string"
              }
              , {
                theoryName: "'Ōtamu",
                description: "Hips hit twice to one side then twice to the other.",
                img: "string"
              }, {
                theoryName: "Toro",
                description: "Bending your knees, tap with one foot to the front diagonal floor, change the foot.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              }, {
                practiceName: "Ope",
                description: "Repeat Opes until sweating.",
                timing: "6 minutes"
              }, {
                practiceName: "'Ōtamu",
                description: "Repeat 'Ōtamus until sweating",
                timing: "7 minutes"
              }, {
                practiceName: "Toro",
                description: "Repeat Toros until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              }, {
                testName: "Ope",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "'Otamu'",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Toro",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 3",
            theory: [
              {
                theoryName: "Tā'iri  Te'i",
                description: "Same as tamau but on your toes.",
                img: "string"
              }, {
                theoryName: "Peipei",
                description: "S'ha de buscar",
                img: "string"
              }, {
                theoryName: "Tōtoro",
                description: "Opening and closing the legs through the knees, hips go from one side to the other.",
                img: "string"
              }, {
                theoryName: "Tua-ne'e",
                description: "S'ha de buscar",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              }, {
                practiceName: "Tā'iri  Te'i",
                description: "Repeat Tā'iri  te'is until sweating.",
                timing: "6 minutes"
              }, {
                practiceName: "Tōtoro",
                description: "Repeat Tōtoros until sweating",
                timing: "7 minutes"
              }, {
                practiceName: "Tua-ne'e",
                description: "Repeat Tua-ne'es until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              }, {
                testName: "Tā'iri Te'i",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Tōtoro",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Tua-ne'e",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 4",
            theory: [
              {
                theoryName: "Haere tīfene",
                description: "S'ha de buscar.",
                img: "string"
              }, {
                theoryName: "Fa'ahe'e",
                description: "S'ha de buscar",
                img: "string"
              }, {
                theoryName: "'Ori' ōpū",
                description: "S'ha de buscar.",
                img: "string"
              }, {
                theoryName: "Nu'u tīfene",
                description: "S'ha de buscar.",
                img: "string"
              }
            ]
            ,
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              }, {
                practiceName: "Haere tīfene",
                description: "Repeat Haere tīfenes until sweating.",
                timing: "6 minutes"
              }, {
                practiceName: "Fa'ahe'e",
                description: "Repeat Fa'ahe'es until sweating",
                timing: "7 minutes"
              }, {
                practiceName: "'Ori' ōpū",
                description: "Repeat 'Ori' ōpūs until sweating",
                timing: "8 minutes"
              }]
            ,
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              }, {
                testName: "Haere tīfene",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "Fa'ahe'e",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              }, {
                testName: "'Ori' ōpū",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          }
        ]
      }, {
        id: 2,
        title: "Ori Tahiti Beginner",
        description: "In this first level we will cover the basics so that you can start dancing as soon as possible!",
        purchased: true,
        url: "OriBeginners",
        lessons: [
          {
            lessonTitle: "Lesson 1",
            theory: [
              {
                theoryName: "Tā'iri tāmau",
                description: "The lateral movement of the hips that exists in four distinct patterns: tahiri tamau, tamau taere, tamau tahito, paoti tamau, also called haere tifene. In Tahitian language, tamau means “to tie”, or a “bond” and refers to a continuous link.",
                img: "string"
              },
              {
                theoryName: "Fa'arapu / Fa'arori",
                description: "A fast movement involving a rotation of the pelvis. The main accent of the movement originates from the dancer's belly. When the accent reaches the buttocks, the step is referred to as faarori.",
                img: "string"
              },
              {
                theoryName: "Varu",
                description: "A hip movement that represents the shape of the figure eight. In the Tahitian language, “varu” refers to the number eight.",
                img: "string"
              },
              {
                theoryName: "Ruru",
                description: "A shaking movement of the dancer's belly and buttocks. In the Tahitian language, “ruru” refers to a shaking motion. Ruru is a step meant to be utilized by soloists and is not often seen amongst dance groups.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Tā'iri tāmau",
                description: "Repeat Tā'iri tāmaus until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Fa'arapu",
                description: "Repeat fa'arapus until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Varu",
                description: "Repeat varus until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tā'iri tāmau",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Varu",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Ruru",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 2",
            theory: [
              {
                theoryName: "'Amaha",
                description: "Make a square with your hips. Front, right, back, left.",
                img: "string"
              },
              {
                theoryName: "Ope",
                description: "One foot ahead, bended knees, make a circle with your pelvis towards the outside. Now with the other foot.",
                img: "string"
              },
              {
                theoryName: "'Ōtamu",
                description: "Hips hit twice to one side then twice to the other.",
                img: "string"
              },
              {
                theoryName: "Toro",
                description: "Bending your knees, tap with one foot to the front diagonal floor, change the foot.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Ope",
                description: "Repeat Opes until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "'Ōtamu",
                description: "Repeat 'Ōtamus until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Toro",
                description: "Repeat Toros until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Ope",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "'Otamu'",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Toro",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 3",
            theory: [
              {
                theoryName: "Tā'iri  Te'i",
                description: "Same as tamau but on your toes.",
                img: "string"
              },
              {
                theoryName: "Peipei",
                description: "S'ha de buscar",
                img: "string"
              },
              {
                theoryName: "Tōtoro",
                description: "Opening and closing the legs through the knees, hips go from one side to the other.",
                img: "string"
              },
              {
                theoryName: "Tua-ne'e",
                description: "S'ha de buscar",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Tā'iri  Te'i",
                description: "Repeat Tā'iri  te'is until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Tōtoro",
                description: "Repeat Tōtoros until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Tua-ne'e",
                description: "Repeat Tua-ne'es until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tā'iri Te'i",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tōtoro",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tua-ne'e",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 4",
            theory: [
              {
                theoryName: "Haere tīfene",
                description: "S'ha de buscar.",
                img: "string"
              },
              {
                theoryName: "Fa'ahe'e",
                description: "S'ha de buscar",
                img: "string"
              },
              {
                theoryName: "'Ori' ōpū",
                description: "S'ha de buscar.",
                img: "string"
              },
              {
                theoryName: "Nu'u tīfene",
                description: "S'ha de buscar.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Haere tīfene",
                description: "Repeat Haere tīfenes until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Fa'ahe'e",
                description: "Repeat Fa'ahe'es until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "'Ori' ōpū",
                description: "Repeat 'Ori' ōpūs until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Haere tīfene",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Fa'ahe'e",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "'Ori' ōpū",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Ori Tahiti Advanced",
        description: "Now that you know your way around the dancing floor, let's improve this technique!",
        purchased: true,
        url: "OriAdvanced",
        lessons: [
          {
            lessonTitle: "Lesson 1",
            theory:
              [{
                theoryName: "Advanced pass",
                description: "The lateral movement of the hips that exists in four distinct patterns: tahiri tamau, tamau taere, tamau tahito, paoti tamau, also called haere tifene. In Tahitian language, tamau means “to tie”, or a “bond” and refers to a continuous link.",
                img: "string"
              },
              {
                theoryName: "Advanced 2",
                description: "A fast movement involving a rotation of the pelvis. The main accent of the movement originates from the dancer's belly. When the accent reaches the buttocks, the step is referred to as faarori.",
                img: "string"
              },
              {
                theoryName: "Advanced 3",
                description: "A hip movement that represents the shape of the figure eight. In the Tahitian language, “varu” refers to the number eight.",
                img: "string"
              },
              {
                theoryName: "Advanced 4",
                description: "A shaking movement of the dancer's belly and buttocks. In the Tahitian language, “ruru” refers to a shaking motion. Ruru is a step meant to be utilized by soloists and is not often seen amongst dance groups.",
                img: "string"
              }
              ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Tā'iri tāmau",
                description: "Repeat Tā'iri tāmaus until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Fa'arapu",
                description: "Repeat fa'arapus until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Varu",
                description: "Repeat varus until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tā'iri tāmau",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Varu",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Ruru",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 2",
            theory: [
              {
                theoryName: "Advanced lesson 2 theory 1",
                description: "Make a square with your hips. Front, right, back, left.",
                img: "string"
              },
              {
                theoryName: "Ope",
                description: "One foot ahead, bended knees, make a circle with your pelvis towards the outside. Now with the other foot.",
                img: "string"
              },
              {
                theoryName: "'Ōtamu",
                description: "Hips hit twice to one side then twice to the other.",
                img: "string"
              },
              {
                theoryName: "Toro",
                description: "Bending your knees, tap with one foot to the front diagonal floor, change the foot.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Ope",
                description: "Repeat Opes until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "'Ōtamu",
                description: "Repeat 'Ōtamus until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Toro",
                description: "Repeat Toros until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Ope",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "'Otamu'",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Toro",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 3",
            theory: [
              {
                theoryName: "Tā'iri Te'i",
                description: "Same as tamau but on your toes.",
                img: "string"
              },
              {
                theoryName: "Peipei",
                description: "S'ha de buscar",
                img: "string"
              },
              {
                theoryName: "Tōtoro",
                description: "Opening and closing the legs through the knees, hips go from one side to the other.",
                img: "string"
              },
              {
                theoryName: "Tua-ne'e",
                description: "S'ha de buscar",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Tā'iri  Te'i",
                description: "Repeat Tā'iri  te'is until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Tōtoro",
                description: "Repeat Tōtoros until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "Tua-ne'e",
                description: "Repeat Tua-ne'es until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tā'iri Te'i",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tōtoro",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Tua-ne'e",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          },
          {
            lessonTitle: "Lesson 4",
            theory: [
              {
                theoryName: "Haere tīfene",
                description: "S'ha de buscar.",
                img: "string"
              },
              {
                theoryName: "Fa'ahe'e",
                description: "S'ha de buscar",
                img: "string"
              },
              {
                theoryName: "'Ori' ōpū",
                description: "S'ha de buscar.",
                img: "string"
              },
              {
                theoryName: "Nu'u tīfene",
                description: "S'ha de buscar.",
                img: "string"
              }
            ],
            practice: [
              {
                practiceName: "Warm up",
                description: "Stretches, push ups, etc",
                timing: "5 minutes"
              },
              {
                practiceName: "Haere tīfene",
                description: "Repeat Haere tīfenes until sweating.",
                timing: "6 minutes"
              },
              {
                practiceName: "Fa'ahe'e",
                description: "Repeat Fa'ahe'es until sweating",
                timing: "7 minutes"
              },
              {
                practiceName: "'Ori' ōpū",
                description: "Repeat 'Ori' ōpūs until sweating",
                timing: "8 minutes"
              }
            ],
            test: [
              {
                testName: "Warm Up",
                description: "With song 'Listen to Mevina' do tamau, and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Haere tīfene",
                description: "With song 'Pate Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "Fa'ahe'e",
                description: "With song 'Logo Te Pate' do tamau and varu.",
                timing: "5 minutes"
              },
              {
                testName: "'Ori' ōpū",
                description: "With song 'Tutuki' do tamau and varu.",
                timing: "5 minutes"
              }
            ]
          }
        ]
      }
    ];
    return { cursos };
  }
}