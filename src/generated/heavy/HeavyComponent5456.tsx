'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5456<T> = T extends (infer U)[]
  ? DeepReadonlyArray5456<U>
  : T extends object
  ? DeepReadonlyObject5456<T>
  : T;

interface DeepReadonlyArray5456<T> extends ReadonlyArray<DeepReadonly5456<T>> {}

type DeepReadonlyObject5456<T> = {
  readonly [P in keyof T]: DeepReadonly5456<T[P]>;
};

type UnionToIntersection5456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5456<T> = UnionToIntersection5456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5456<T extends unknown[], V> = [...T, V];

type TuplifyUnion5456<T, L = LastOf5456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5456<TuplifyUnion5456<Exclude<T, L>>, L>;

type DeepPartial5456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5456<T[P]> }
  : T;

type Paths5456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5456<K, Paths5456<T[K], Prev5456[D]>> : never }[keyof T]
  : never;

type Prev5456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5456 {
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

type ConfigPaths5456 = Paths5456<NestedConfig5456>;

interface HeavyProps5456 {
  config: DeepPartial5456<NestedConfig5456>;
  path?: ConfigPaths5456;
}

const HeavyComponent5456 = memo(function HeavyComponent5456({ config }: HeavyProps5456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5456.displayName = 'HeavyComponent5456';
export default HeavyComponent5456;
