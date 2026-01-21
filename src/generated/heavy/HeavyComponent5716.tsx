'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5716<T> = T extends (infer U)[]
  ? DeepReadonlyArray5716<U>
  : T extends object
  ? DeepReadonlyObject5716<T>
  : T;

interface DeepReadonlyArray5716<T> extends ReadonlyArray<DeepReadonly5716<T>> {}

type DeepReadonlyObject5716<T> = {
  readonly [P in keyof T]: DeepReadonly5716<T[P]>;
};

type UnionToIntersection5716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5716<T> = UnionToIntersection5716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5716<T extends unknown[], V> = [...T, V];

type TuplifyUnion5716<T, L = LastOf5716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5716<TuplifyUnion5716<Exclude<T, L>>, L>;

type DeepPartial5716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5716<T[P]> }
  : T;

type Paths5716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5716<K, Paths5716<T[K], Prev5716[D]>> : never }[keyof T]
  : never;

type Prev5716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5716 {
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

type ConfigPaths5716 = Paths5716<NestedConfig5716>;

interface HeavyProps5716 {
  config: DeepPartial5716<NestedConfig5716>;
  path?: ConfigPaths5716;
}

const HeavyComponent5716 = memo(function HeavyComponent5716({ config }: HeavyProps5716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5716.displayName = 'HeavyComponent5716';
export default HeavyComponent5716;
