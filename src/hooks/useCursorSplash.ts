@@ .. @@
     const handleTouch = (e: TouchEvent) => {
-      e.preventDefault();
       const touch = e.touches[0] || e.changedTouches[0];
       if (touch) {
         addSplash(touch.clientX, touch.clientY);
@@ .. @@
     document.addEventListener('click', handleClick);
-    document.addEventListener('touchstart', handleTouch, { passive: false });
+    document.addEventListener('touchstart', handleTouch, { passive: true });
 
     return () => {
       document.removeEventListener('click', handleClick);