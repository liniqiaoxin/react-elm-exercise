/*
 * @Descripttion: 
 * @version: 
 * @Author: linqiaoxin
 * @Date: 2020-11-20 11:49:01
 * @LastEditors: linqiaoxin
 * @LastEditTime: 2020-11-20 11:54:09
 */
import React from 'react';
import { List } from 'antd';

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myList: [
                {
                    title: '为何做前端开发',
                    context: '高中毕业，在填写志愿时，我没有了解过我所选的这个专业到底是做什么的，进入大学后也依旧不明白我所学的课程有什么用处，拿来干什么。就这样浑浑噩噩的过了一年。大二大三时想要开始学习专业课，却总是跟不上老师的进度，在课堂上自我练习时总要比其他同学晚完成任务。在大三下时，我意识到了再这样下去不行，然后我开始找相关实习，跟着网上各种教程及视频学习，然后开始自己搭建环境做项目，学习vue。一起共事的同事给我提供了很多帮助，他一个学硬件的人帮我找前端项目和教程。也是因为他的帮助和支持 我现在才得以做着我喜欢的事情'
                },
                {
                    title: '实习',
                    context: '在大三快结束 准备进入暑假时，我还在找实习，面试了许多家都没有得到回复，因为没有任何项目经验、也没有学到一丁半点的开发技能，在找实习时总是被拒，正当我在苦恼是该买票回家还是继续留在福州找实习、租房子时，我在qq空间看到了小吴发的锐捷实习生招聘信息，'
                },
                { title: 'React服务端渲染框架Next.js入门(共12集)', context: '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。' },
                { title: 'React Hooks 免费视频教程(共11集)', context: '50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。' },

            ]
        }
    }
    render() {
        const { myList } = this.state;
        return (
            <List
                itemLayout="vertical"
                dataSource={myList}
                className='list'
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta

                            title={<a href="https://ant.design" style={{ color: ' #1e90ff', fontSize: '26px' }}>{item.title}</a>}
                            description='发表日期：2020-11-19 观看人数：1000+'

                        />
                        {item.context}
                    </List.Item>
                )}

            />

        );
    }
}
export default Lists;
