'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5736<T> = T extends (infer U)[]
  ? DeepReadonlyArray5736<U>
  : T extends object
  ? DeepReadonlyObject5736<T>
  : T;

interface DeepReadonlyArray5736<T> extends ReadonlyArray<DeepReadonly5736<T>> {}

type DeepReadonlyObject5736<T> = {
  readonly [P in keyof T]: DeepReadonly5736<T[P]>;
};

type UnionToIntersection5736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5736<T> = UnionToIntersection5736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5736<T extends unknown[], V> = [...T, V];

type TuplifyUnion5736<T, L = LastOf5736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5736<TuplifyUnion5736<Exclude<T, L>>, L>;

type DeepPartial5736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5736<T[P]> }
  : T;

type Paths5736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5736<K, Paths5736<T[K], Prev5736[D]>> : never }[keyof T]
  : never;

type Prev5736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5736 {
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

type ConfigPaths5736 = Paths5736<NestedConfig5736>;

interface HeavyProps5736 {
  config: DeepPartial5736<NestedConfig5736>;
  path?: ConfigPaths5736;
}

const HeavyComponent5736 = memo(function HeavyComponent5736({ config }: HeavyProps5736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5736.displayName = 'HeavyComponent5736';
export default HeavyComponent5736;
