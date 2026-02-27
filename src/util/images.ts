const images = import.meta.glob('../assets/portfolio/*.{jpeg,jpg,png,gif}', { eager: true });

export const getImage = (filename: string) => {
    const key = Object.keys(images).find(key => key.includes(filename));
    if (!key) {
        console.error(`Image not found: ${filename}`);
        return null;
    }
    // @ts-ignore
    return images[key].default;
}
