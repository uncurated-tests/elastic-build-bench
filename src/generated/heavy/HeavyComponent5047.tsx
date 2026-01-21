'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5047<T> = T extends (infer U)[]
  ? DeepReadonlyArray5047<U>
  : T extends object
  ? DeepReadonlyObject5047<T>
  : T;

interface DeepReadonlyArray5047<T> extends ReadonlyArray<DeepReadonly5047<T>> {}

type DeepReadonlyObject5047<T> = {
  readonly [P in keyof T]: DeepReadonly5047<T[P]>;
};

type UnionToIntersection5047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5047<T> = UnionToIntersection5047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5047<T extends unknown[], V> = [...T, V];

type TuplifyUnion5047<T, L = LastOf5047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5047<TuplifyUnion5047<Exclude<T, L>>, L>;

type DeepPartial5047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5047<T[P]> }
  : T;

type Paths5047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5047<K, Paths5047<T[K], Prev5047[D]>> : never }[keyof T]
  : never;

type Prev5047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5047 {
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

type ConfigPaths5047 = Paths5047<NestedConfig5047>;

interface HeavyProps5047 {
  config: DeepPartial5047<NestedConfig5047>;
  path?: ConfigPaths5047;
}

const HeavyComponent5047 = memo(function HeavyComponent5047({ config }: HeavyProps5047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5047.displayName = 'HeavyComponent5047';
export default HeavyComponent5047;
