async function downloadVideo() {
    const url = document.getElementById('tiktokUrl').value;
    if (!url) {
        alert("Masukkan URL Video TikTok terlebih dahulu!");
        return;
    }

    try {
        // Ganti dengan API atau backend server Anda untuk mengunduh video
        const response = await fetch(`https://api.exonity.my.id/api/tiktok2?url=${encodeURIComponent(url)}`);
        const data = await response.json();
const results = data.result
        if (results.success) {
            const downloadLink = document.createElement('a');
            downloadLink.href = results.no_watermark;
            downloadLink.download = 'tiktok_video.mp4';
            downloadLink.innerText = 'Klik di sini untuk mengunduh video';
            document.getElementById('result').innerHTML = '';
            document.getElementById('result').appendChild(downloadLink);
        } else {
            document.getElementById('result').innerText = 'Gagal mengunduh video. Pastikan URL yang dimasukkan benar.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = 'Terjadi kesalahan saat mengunduh video.';
    }
}
