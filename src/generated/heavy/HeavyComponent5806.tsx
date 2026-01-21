'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5806<T> = T extends (infer U)[]
  ? DeepReadonlyArray5806<U>
  : T extends object
  ? DeepReadonlyObject5806<T>
  : T;

interface DeepReadonlyArray5806<T> extends ReadonlyArray<DeepReadonly5806<T>> {}

type DeepReadonlyObject5806<T> = {
  readonly [P in keyof T]: DeepReadonly5806<T[P]>;
};

type UnionToIntersection5806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5806<T> = UnionToIntersection5806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5806<T extends unknown[], V> = [...T, V];

type TuplifyUnion5806<T, L = LastOf5806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5806<TuplifyUnion5806<Exclude<T, L>>, L>;

type DeepPartial5806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5806<T[P]> }
  : T;

type Paths5806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5806<K, Paths5806<T[K], Prev5806[D]>> : never }[keyof T]
  : never;

type Prev5806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5806 {
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

type ConfigPaths5806 = Paths5806<NestedConfig5806>;

interface HeavyProps5806 {
  config: DeepPartial5806<NestedConfig5806>;
  path?: ConfigPaths5806;
}

const HeavyComponent5806 = memo(function HeavyComponent5806({ config }: HeavyProps5806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5806.displayName = 'HeavyComponent5806';
export default HeavyComponent5806;
