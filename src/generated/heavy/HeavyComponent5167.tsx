'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5167<T> = T extends (infer U)[]
  ? DeepReadonlyArray5167<U>
  : T extends object
  ? DeepReadonlyObject5167<T>
  : T;

interface DeepReadonlyArray5167<T> extends ReadonlyArray<DeepReadonly5167<T>> {}

type DeepReadonlyObject5167<T> = {
  readonly [P in keyof T]: DeepReadonly5167<T[P]>;
};

type UnionToIntersection5167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5167<T> = UnionToIntersection5167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5167<T extends unknown[], V> = [...T, V];

type TuplifyUnion5167<T, L = LastOf5167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5167<TuplifyUnion5167<Exclude<T, L>>, L>;

type DeepPartial5167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5167<T[P]> }
  : T;

type Paths5167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5167<K, Paths5167<T[K], Prev5167[D]>> : never }[keyof T]
  : never;

type Prev5167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5167 {
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

type ConfigPaths5167 = Paths5167<NestedConfig5167>;

interface HeavyProps5167 {
  config: DeepPartial5167<NestedConfig5167>;
  path?: ConfigPaths5167;
}

const HeavyComponent5167 = memo(function HeavyComponent5167({ config }: HeavyProps5167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5167.displayName = 'HeavyComponent5167';
export default HeavyComponent5167;
