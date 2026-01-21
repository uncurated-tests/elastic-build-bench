'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5793<T> = T extends (infer U)[]
  ? DeepReadonlyArray5793<U>
  : T extends object
  ? DeepReadonlyObject5793<T>
  : T;

interface DeepReadonlyArray5793<T> extends ReadonlyArray<DeepReadonly5793<T>> {}

type DeepReadonlyObject5793<T> = {
  readonly [P in keyof T]: DeepReadonly5793<T[P]>;
};

type UnionToIntersection5793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5793<T> = UnionToIntersection5793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5793<T extends unknown[], V> = [...T, V];

type TuplifyUnion5793<T, L = LastOf5793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5793<TuplifyUnion5793<Exclude<T, L>>, L>;

type DeepPartial5793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5793<T[P]> }
  : T;

type Paths5793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5793<K, Paths5793<T[K], Prev5793[D]>> : never }[keyof T]
  : never;

type Prev5793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5793 {
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

type ConfigPaths5793 = Paths5793<NestedConfig5793>;

interface HeavyProps5793 {
  config: DeepPartial5793<NestedConfig5793>;
  path?: ConfigPaths5793;
}

const HeavyComponent5793 = memo(function HeavyComponent5793({ config }: HeavyProps5793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5793.displayName = 'HeavyComponent5793';
export default HeavyComponent5793;
