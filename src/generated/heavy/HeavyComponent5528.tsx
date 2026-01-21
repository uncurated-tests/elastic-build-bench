'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5528<T> = T extends (infer U)[]
  ? DeepReadonlyArray5528<U>
  : T extends object
  ? DeepReadonlyObject5528<T>
  : T;

interface DeepReadonlyArray5528<T> extends ReadonlyArray<DeepReadonly5528<T>> {}

type DeepReadonlyObject5528<T> = {
  readonly [P in keyof T]: DeepReadonly5528<T[P]>;
};

type UnionToIntersection5528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5528<T> = UnionToIntersection5528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5528<T extends unknown[], V> = [...T, V];

type TuplifyUnion5528<T, L = LastOf5528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5528<TuplifyUnion5528<Exclude<T, L>>, L>;

type DeepPartial5528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5528<T[P]> }
  : T;

type Paths5528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5528<K, Paths5528<T[K], Prev5528[D]>> : never }[keyof T]
  : never;

type Prev5528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5528 {
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

type ConfigPaths5528 = Paths5528<NestedConfig5528>;

interface HeavyProps5528 {
  config: DeepPartial5528<NestedConfig5528>;
  path?: ConfigPaths5528;
}

const HeavyComponent5528 = memo(function HeavyComponent5528({ config }: HeavyProps5528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5528.displayName = 'HeavyComponent5528';
export default HeavyComponent5528;
