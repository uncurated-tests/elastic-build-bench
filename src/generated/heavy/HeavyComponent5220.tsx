'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5220<T> = T extends (infer U)[]
  ? DeepReadonlyArray5220<U>
  : T extends object
  ? DeepReadonlyObject5220<T>
  : T;

interface DeepReadonlyArray5220<T> extends ReadonlyArray<DeepReadonly5220<T>> {}

type DeepReadonlyObject5220<T> = {
  readonly [P in keyof T]: DeepReadonly5220<T[P]>;
};

type UnionToIntersection5220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5220<T> = UnionToIntersection5220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5220<T extends unknown[], V> = [...T, V];

type TuplifyUnion5220<T, L = LastOf5220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5220<TuplifyUnion5220<Exclude<T, L>>, L>;

type DeepPartial5220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5220<T[P]> }
  : T;

type Paths5220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5220<K, Paths5220<T[K], Prev5220[D]>> : never }[keyof T]
  : never;

type Prev5220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5220 {
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

type ConfigPaths5220 = Paths5220<NestedConfig5220>;

interface HeavyProps5220 {
  config: DeepPartial5220<NestedConfig5220>;
  path?: ConfigPaths5220;
}

const HeavyComponent5220 = memo(function HeavyComponent5220({ config }: HeavyProps5220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5220.displayName = 'HeavyComponent5220';
export default HeavyComponent5220;
