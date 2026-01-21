'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5631<T> = T extends (infer U)[]
  ? DeepReadonlyArray5631<U>
  : T extends object
  ? DeepReadonlyObject5631<T>
  : T;

interface DeepReadonlyArray5631<T> extends ReadonlyArray<DeepReadonly5631<T>> {}

type DeepReadonlyObject5631<T> = {
  readonly [P in keyof T]: DeepReadonly5631<T[P]>;
};

type UnionToIntersection5631<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5631<T> = UnionToIntersection5631<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5631<T extends unknown[], V> = [...T, V];

type TuplifyUnion5631<T, L = LastOf5631<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5631<TuplifyUnion5631<Exclude<T, L>>, L>;

type DeepPartial5631<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5631<T[P]> }
  : T;

type Paths5631<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5631<K, Paths5631<T[K], Prev5631[D]>> : never }[keyof T]
  : never;

type Prev5631 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5631<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5631 {
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

type ConfigPaths5631 = Paths5631<NestedConfig5631>;

interface HeavyProps5631 {
  config: DeepPartial5631<NestedConfig5631>;
  path?: ConfigPaths5631;
}

const HeavyComponent5631 = memo(function HeavyComponent5631({ config }: HeavyProps5631) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5631) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5631 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5631: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5631.displayName = 'HeavyComponent5631';
export default HeavyComponent5631;
