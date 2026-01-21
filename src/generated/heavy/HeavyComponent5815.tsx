'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5815<T> = T extends (infer U)[]
  ? DeepReadonlyArray5815<U>
  : T extends object
  ? DeepReadonlyObject5815<T>
  : T;

interface DeepReadonlyArray5815<T> extends ReadonlyArray<DeepReadonly5815<T>> {}

type DeepReadonlyObject5815<T> = {
  readonly [P in keyof T]: DeepReadonly5815<T[P]>;
};

type UnionToIntersection5815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5815<T> = UnionToIntersection5815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5815<T extends unknown[], V> = [...T, V];

type TuplifyUnion5815<T, L = LastOf5815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5815<TuplifyUnion5815<Exclude<T, L>>, L>;

type DeepPartial5815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5815<T[P]> }
  : T;

type Paths5815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5815<K, Paths5815<T[K], Prev5815[D]>> : never }[keyof T]
  : never;

type Prev5815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5815 {
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

type ConfigPaths5815 = Paths5815<NestedConfig5815>;

interface HeavyProps5815 {
  config: DeepPartial5815<NestedConfig5815>;
  path?: ConfigPaths5815;
}

const HeavyComponent5815 = memo(function HeavyComponent5815({ config }: HeavyProps5815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5815.displayName = 'HeavyComponent5815';
export default HeavyComponent5815;
