'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5848<T> = T extends (infer U)[]
  ? DeepReadonlyArray5848<U>
  : T extends object
  ? DeepReadonlyObject5848<T>
  : T;

interface DeepReadonlyArray5848<T> extends ReadonlyArray<DeepReadonly5848<T>> {}

type DeepReadonlyObject5848<T> = {
  readonly [P in keyof T]: DeepReadonly5848<T[P]>;
};

type UnionToIntersection5848<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5848<T> = UnionToIntersection5848<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5848<T extends unknown[], V> = [...T, V];

type TuplifyUnion5848<T, L = LastOf5848<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5848<TuplifyUnion5848<Exclude<T, L>>, L>;

type DeepPartial5848<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5848<T[P]> }
  : T;

type Paths5848<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5848<K, Paths5848<T[K], Prev5848[D]>> : never }[keyof T]
  : never;

type Prev5848 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5848<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5848 {
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

type ConfigPaths5848 = Paths5848<NestedConfig5848>;

interface HeavyProps5848 {
  config: DeepPartial5848<NestedConfig5848>;
  path?: ConfigPaths5848;
}

const HeavyComponent5848 = memo(function HeavyComponent5848({ config }: HeavyProps5848) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5848) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5848 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5848: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5848.displayName = 'HeavyComponent5848';
export default HeavyComponent5848;
