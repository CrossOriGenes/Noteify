let i = 0;
export function randomColors() {
    let colors = ['#709522', '#229bd3', '#a0851b', '#771ab6', '#ef1bef'];
    if (i > colors.length - 1) {
        i = 0;
    }
    return colors[i++];
}