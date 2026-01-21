'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5200<T> = T extends (infer U)[]
  ? DeepReadonlyArray5200<U>
  : T extends object
  ? DeepReadonlyObject5200<T>
  : T;

interface DeepReadonlyArray5200<T> extends ReadonlyArray<DeepReadonly5200<T>> {}

type DeepReadonlyObject5200<T> = {
  readonly [P in keyof T]: DeepReadonly5200<T[P]>;
};

type UnionToIntersection5200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5200<T> = UnionToIntersection5200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5200<T extends unknown[], V> = [...T, V];

type TuplifyUnion5200<T, L = LastOf5200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5200<TuplifyUnion5200<Exclude<T, L>>, L>;

type DeepPartial5200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5200<T[P]> }
  : T;

type Paths5200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5200<K, Paths5200<T[K], Prev5200[D]>> : never }[keyof T]
  : never;

type Prev5200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5200 {
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

type ConfigPaths5200 = Paths5200<NestedConfig5200>;

interface HeavyProps5200 {
  config: DeepPartial5200<NestedConfig5200>;
  path?: ConfigPaths5200;
}

const HeavyComponent5200 = memo(function HeavyComponent5200({ config }: HeavyProps5200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5200.displayName = 'HeavyComponent5200';
export default HeavyComponent5200;
