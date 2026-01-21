'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5248<T> = T extends (infer U)[]
  ? DeepReadonlyArray5248<U>
  : T extends object
  ? DeepReadonlyObject5248<T>
  : T;

interface DeepReadonlyArray5248<T> extends ReadonlyArray<DeepReadonly5248<T>> {}

type DeepReadonlyObject5248<T> = {
  readonly [P in keyof T]: DeepReadonly5248<T[P]>;
};

type UnionToIntersection5248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5248<T> = UnionToIntersection5248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5248<T extends unknown[], V> = [...T, V];

type TuplifyUnion5248<T, L = LastOf5248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5248<TuplifyUnion5248<Exclude<T, L>>, L>;

type DeepPartial5248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5248<T[P]> }
  : T;

type Paths5248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5248<K, Paths5248<T[K], Prev5248[D]>> : never }[keyof T]
  : never;

type Prev5248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5248 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths5248 = Paths5248<NestedConfig5248>;

interface HeavyProps5248 {
  config: DeepPartial5248<NestedConfig5248>;
  path?: ConfigPaths5248;
}

const HeavyComponent5248 = memo(function HeavyComponent5248({ config }: HeavyProps5248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5248.displayName = 'HeavyComponent5248';
export default HeavyComponent5248;
