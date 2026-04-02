import { useRoute } from 'vitepress';
import { computed } from 'vue';

export function useOutlineTitle() {
  const route = useRoute();
  const outlineTitle = computed(() => {
    const path = route.path;
    const segments = path.split('/').filter((s) => s !== '');
    const lastSegment = segments[segments.length - 1];
    const decoded = decodeURIComponent(lastSegment);
    return decoded.replace(/^\d+-/, '');
  });
  return { outlineTitle };
}
