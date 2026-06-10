class DynamicArray {
    private int[] arr;
    private int count;

    public DynamicArray(int capacity) {
        arr = new int[capacity];
        count = 0;
    }

    public int get(int i) {
        return arr[i];
    }

    public void set(int i, int n) {
        arr[i] = n;
    }

    public void pushback(int n) {
        if(count == arr.length) {
            resize();
        }
        arr[count++] = n;
    }

    public int popback() {
        int lastElement = arr[count - 1];
        arr[count - 1] = 0;
        count--;
        return lastElement;
    }

    private void resize() {
        int[] newarr = new int[arr.length * 2];
        System.arraycopy(arr, 0, newarr, 0, arr.length);
        arr = newarr;
    }

    public int getSize() {
        return count;
    }

    public int getCapacity() {
        return arr.length;
    }
}
