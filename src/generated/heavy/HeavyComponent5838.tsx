'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5838<T> = T extends (infer U)[]
  ? DeepReadonlyArray5838<U>
  : T extends object
  ? DeepReadonlyObject5838<T>
  : T;

interface DeepReadonlyArray5838<T> extends ReadonlyArray<DeepReadonly5838<T>> {}

type DeepReadonlyObject5838<T> = {
  readonly [P in keyof T]: DeepReadonly5838<T[P]>;
};

type UnionToIntersection5838<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5838<T> = UnionToIntersection5838<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5838<T extends unknown[], V> = [...T, V];

type TuplifyUnion5838<T, L = LastOf5838<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5838<TuplifyUnion5838<Exclude<T, L>>, L>;

type DeepPartial5838<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5838<T[P]> }
  : T;

type Paths5838<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5838<K, Paths5838<T[K], Prev5838[D]>> : never }[keyof T]
  : never;

type Prev5838 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5838<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5838 {
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

type ConfigPaths5838 = Paths5838<NestedConfig5838>;

interface HeavyProps5838 {
  config: DeepPartial5838<NestedConfig5838>;
  path?: ConfigPaths5838;
}

const HeavyComponent5838 = memo(function HeavyComponent5838({ config }: HeavyProps5838) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5838) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5838 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5838: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5838.displayName = 'HeavyComponent5838';
export default HeavyComponent5838;
