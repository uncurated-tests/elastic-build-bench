'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5651<T> = T extends (infer U)[]
  ? DeepReadonlyArray5651<U>
  : T extends object
  ? DeepReadonlyObject5651<T>
  : T;

interface DeepReadonlyArray5651<T> extends ReadonlyArray<DeepReadonly5651<T>> {}

type DeepReadonlyObject5651<T> = {
  readonly [P in keyof T]: DeepReadonly5651<T[P]>;
};

type UnionToIntersection5651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5651<T> = UnionToIntersection5651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5651<T extends unknown[], V> = [...T, V];

type TuplifyUnion5651<T, L = LastOf5651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5651<TuplifyUnion5651<Exclude<T, L>>, L>;

type DeepPartial5651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5651<T[P]> }
  : T;

type Paths5651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5651<K, Paths5651<T[K], Prev5651[D]>> : never }[keyof T]
  : never;

type Prev5651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5651 {
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

type ConfigPaths5651 = Paths5651<NestedConfig5651>;

interface HeavyProps5651 {
  config: DeepPartial5651<NestedConfig5651>;
  path?: ConfigPaths5651;
}

const HeavyComponent5651 = memo(function HeavyComponent5651({ config }: HeavyProps5651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5651.displayName = 'HeavyComponent5651';
export default HeavyComponent5651;
