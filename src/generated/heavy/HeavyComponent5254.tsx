'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5254<T> = T extends (infer U)[]
  ? DeepReadonlyArray5254<U>
  : T extends object
  ? DeepReadonlyObject5254<T>
  : T;

interface DeepReadonlyArray5254<T> extends ReadonlyArray<DeepReadonly5254<T>> {}

type DeepReadonlyObject5254<T> = {
  readonly [P in keyof T]: DeepReadonly5254<T[P]>;
};

type UnionToIntersection5254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5254<T> = UnionToIntersection5254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5254<T extends unknown[], V> = [...T, V];

type TuplifyUnion5254<T, L = LastOf5254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5254<TuplifyUnion5254<Exclude<T, L>>, L>;

type DeepPartial5254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5254<T[P]> }
  : T;

type Paths5254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5254<K, Paths5254<T[K], Prev5254[D]>> : never }[keyof T]
  : never;

type Prev5254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5254 {
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

type ConfigPaths5254 = Paths5254<NestedConfig5254>;

interface HeavyProps5254 {
  config: DeepPartial5254<NestedConfig5254>;
  path?: ConfigPaths5254;
}

const HeavyComponent5254 = memo(function HeavyComponent5254({ config }: HeavyProps5254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5254.displayName = 'HeavyComponent5254';
export default HeavyComponent5254;
