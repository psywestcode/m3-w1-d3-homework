/**
 * Food Blog Vue.js Application Controller
 */

// 1. Register the custom <blogtitle> component
Vue.component('blogtitle', {
    template: '<span>Food Blog</span>'
});

// 2. Initialize the Vue App Instance
const app = new Vue({
    el: '#container', // Mounts to div#container in layout.pug
    data: {
        posts: [
            {
                name: 'Brianna',
                date: 'February 17, 2024, 3:30 PM',
                reply: 'REPLY',
                message: 'Was amazing! My whole family loved it. I used organic heirloom tomatoes and the flavor was outstanding.',
                profilepic: 'images/profile.png',
                foodielevel: 'Novice',
                bio: 'Food lover, traveler, home cook. I love exploring seasonal dishes and fresh farmer market ingredients!',
                thisBox: false
            },
            {
                name: 'Lindsay',
                date: 'February 18, 2024, 12:15 PM',
                reply: 'REPLY',
                message: 'Outstanding recipe! Added some extra garlic and a squeeze of fresh lemon juice at the end. Perfection!',
                profilepic: 'images/profile.png',
                foodielevel: 'Expert',
                bio: 'Professional pastry chef, writer, and local food blogger based in sunny California.',
                thisBox: false
            },
            {
                name: 'Florence',
                date: 'February 19, 2024, 8:45 AM',
                reply: 'REPLY',
                message: 'Loved the texture, will definitely make this again! Perfect side dish for summer barbecues.',
                profilepic: 'images/profile.png',
                foodielevel: 'Intermediate',
                bio: 'Always hungry, passionate about sourdough baking, and dedicated to farm-to-table culinary experiences.',
                thisBox: false
            },
            {
                name: 'Kalyn',
                date: 'February 20, 2024, 6:00 PM',
                reply: 'REPLY',
                message: 'So fresh and flavorful! The hand-churned burrata pairing was an absolute game changer.',
                profilepic: 'images/profile.png',
                foodielevel: 'Pro',
                bio: 'Professional food stylist, clean eating advocate, and recipe developer.',
                thisBox: false
            }
        ]
    },
    methods: {
        authorinfo: function(posts, post) {
            // Close other open modals
            posts.forEach(p => {
                if (p !== post) {
                    p.thisBox = false;
                }
            });
            // Toggle clicked modal state
            post.thisBox = !post.thisBox;
        }
    }
});