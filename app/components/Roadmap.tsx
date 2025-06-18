'use client'

interface RoadmapStage {
  id: number
  title: string
  description: string
  status: 'completed' | 'active' | 'upcoming'
}

const roadmapStages: RoadmapStage[] = [
  {
    id: 1,
    title: 'Alpha Live',
    description: 'Initial release with core screensaver functionality',
    status: 'active'
  },
  {
    id: 2,
    title: 'Custom Backgrounds & Fonts',
    description: 'Personalize your screensaver with custom backgrounds and typography',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'More Widgets',
    description: 'Extended widget library with customizable information displays',
    status: 'upcoming'
  }
]

export default function Roadmap() {
  const roadmapItems = [
    { 
      title: "Alpha Live", 
      description: "Initial release with core features",
      isActive: true
    },
    { 
      title: "Custom Backgrounds & Fonts", 
      description: "Personalize your screensaver appearance",
      isActive: false
    },
    { 
      title: "More Widgets", 
      description: "Weather, calendar, and custom modules",
      isActive: false
    }
  ]

  return (
    <div className="w-full">
      <div className="relative">
        {/* Background line - positioned to go through the center of dots */}
        <div 
          className="absolute left-0 h-0.5 bg-gray-300 dark:bg-gray-500 w-full"
          style={{ top: '0.375rem' }}
        ></div>
        
        {/* Roadmap items */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Dot */}
              <div 
                className={`w-3 h-3 rounded-full border-2 ${
                  item.isActive 
                    ? 'bg-blue-600 border-blue-600' 
                    : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-500'
                } shadow-sm`}
              ></div>
              
              {/* Content */}
              <div className="mt-4 md:mt-6">
                <h3 className={`font-semibold text-xs md:text-base mb-1 md:mb-2 ${
                  item.isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-800 dark:text-gray-100'
                }`}>
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed px-1 md:px-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 