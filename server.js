const http = require('http');

// هذه هي لوحة التحكم الخاصة بك
const config = {
    password: "START_PASSWORD", // غير كلمة المرور هذه
    update: "false"             // غيرها إلى "true" لفرض التحديث
};

const server = http.createServer((req, res) => {
    // منع التخزين المؤقت (caching)
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
            
    res.writeHead(200, { 'Content-Type': 'text/plain' });
            
    if (config.update === "true") {
        res.end('UPDATE_NOW');
    } else {
        res.end(config.password);
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
