'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5145<T> = T extends (infer U)[]
  ? DeepReadonlyArray5145<U>
  : T extends object
  ? DeepReadonlyObject5145<T>
  : T;

interface DeepReadonlyArray5145<T> extends ReadonlyArray<DeepReadonly5145<T>> {}

type DeepReadonlyObject5145<T> = {
  readonly [P in keyof T]: DeepReadonly5145<T[P]>;
};

type UnionToIntersection5145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5145<T> = UnionToIntersection5145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5145<T extends unknown[], V> = [...T, V];

type TuplifyUnion5145<T, L = LastOf5145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5145<TuplifyUnion5145<Exclude<T, L>>, L>;

type DeepPartial5145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5145<T[P]> }
  : T;

type Paths5145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5145<K, Paths5145<T[K], Prev5145[D]>> : never }[keyof T]
  : never;

type Prev5145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5145 {
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

type ConfigPaths5145 = Paths5145<NestedConfig5145>;

interface HeavyProps5145 {
  config: DeepPartial5145<NestedConfig5145>;
  path?: ConfigPaths5145;
}

const HeavyComponent5145 = memo(function HeavyComponent5145({ config }: HeavyProps5145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5145.displayName = 'HeavyComponent5145';
export default HeavyComponent5145;
