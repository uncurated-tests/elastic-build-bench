'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5889<T> = T extends (infer U)[]
  ? DeepReadonlyArray5889<U>
  : T extends object
  ? DeepReadonlyObject5889<T>
  : T;

interface DeepReadonlyArray5889<T> extends ReadonlyArray<DeepReadonly5889<T>> {}

type DeepReadonlyObject5889<T> = {
  readonly [P in keyof T]: DeepReadonly5889<T[P]>;
};

type UnionToIntersection5889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5889<T> = UnionToIntersection5889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5889<T extends unknown[], V> = [...T, V];

type TuplifyUnion5889<T, L = LastOf5889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5889<TuplifyUnion5889<Exclude<T, L>>, L>;

type DeepPartial5889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5889<T[P]> }
  : T;

type Paths5889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5889<K, Paths5889<T[K], Prev5889[D]>> : never }[keyof T]
  : never;

type Prev5889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5889 {
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

type ConfigPaths5889 = Paths5889<NestedConfig5889>;

interface HeavyProps5889 {
  config: DeepPartial5889<NestedConfig5889>;
  path?: ConfigPaths5889;
}

const HeavyComponent5889 = memo(function HeavyComponent5889({ config }: HeavyProps5889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5889.displayName = 'HeavyComponent5889';
export default HeavyComponent5889;
