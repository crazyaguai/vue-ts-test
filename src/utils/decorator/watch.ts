import { WatchOptions } from 'vue';
import { createDecorator } from 'vue-class-component';

export default function Watch(path: string, watchOptions: WatchOptions = {}): any {
  return createDecorator((options: any, handler) => {
    options.watch ||= Object.create(null); // 初始watch配置
    const { watch } = options;
    // watch[path]当前数据watch配置
    if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
      watch[path] = [watch[path]];
    } else if (typeof watch[path] === 'undefined') {
      watch[path] = [];
    } else if (typeof watch[path] === 'function') { // 使用Component 装饰器watch配置时处理
      watch[path] = [{
        handler: watch[path],
      }];
    }
    watch[path].push({ handler, ...watchOptions });
  });
}
