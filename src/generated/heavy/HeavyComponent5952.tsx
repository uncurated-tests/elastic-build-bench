'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5952<T> = T extends (infer U)[]
  ? DeepReadonlyArray5952<U>
  : T extends object
  ? DeepReadonlyObject5952<T>
  : T;

interface DeepReadonlyArray5952<T> extends ReadonlyArray<DeepReadonly5952<T>> {}

type DeepReadonlyObject5952<T> = {
  readonly [P in keyof T]: DeepReadonly5952<T[P]>;
};

type UnionToIntersection5952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5952<T> = UnionToIntersection5952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5952<T extends unknown[], V> = [...T, V];

type TuplifyUnion5952<T, L = LastOf5952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5952<TuplifyUnion5952<Exclude<T, L>>, L>;

type DeepPartial5952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5952<T[P]> }
  : T;

type Paths5952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5952<K, Paths5952<T[K], Prev5952[D]>> : never }[keyof T]
  : never;

type Prev5952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5952 {
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

type ConfigPaths5952 = Paths5952<NestedConfig5952>;

interface HeavyProps5952 {
  config: DeepPartial5952<NestedConfig5952>;
  path?: ConfigPaths5952;
}

const HeavyComponent5952 = memo(function HeavyComponent5952({ config }: HeavyProps5952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5952.displayName = 'HeavyComponent5952';
export default HeavyComponent5952;
