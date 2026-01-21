'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5841<T> = T extends (infer U)[]
  ? DeepReadonlyArray5841<U>
  : T extends object
  ? DeepReadonlyObject5841<T>
  : T;

interface DeepReadonlyArray5841<T> extends ReadonlyArray<DeepReadonly5841<T>> {}

type DeepReadonlyObject5841<T> = {
  readonly [P in keyof T]: DeepReadonly5841<T[P]>;
};

type UnionToIntersection5841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5841<T> = UnionToIntersection5841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5841<T extends unknown[], V> = [...T, V];

type TuplifyUnion5841<T, L = LastOf5841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5841<TuplifyUnion5841<Exclude<T, L>>, L>;

type DeepPartial5841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5841<T[P]> }
  : T;

type Paths5841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5841<K, Paths5841<T[K], Prev5841[D]>> : never }[keyof T]
  : never;

type Prev5841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5841 {
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

type ConfigPaths5841 = Paths5841<NestedConfig5841>;

interface HeavyProps5841 {
  config: DeepPartial5841<NestedConfig5841>;
  path?: ConfigPaths5841;
}

const HeavyComponent5841 = memo(function HeavyComponent5841({ config }: HeavyProps5841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5841.displayName = 'HeavyComponent5841';
export default HeavyComponent5841;
