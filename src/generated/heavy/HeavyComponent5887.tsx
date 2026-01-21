'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5887<T> = T extends (infer U)[]
  ? DeepReadonlyArray5887<U>
  : T extends object
  ? DeepReadonlyObject5887<T>
  : T;

interface DeepReadonlyArray5887<T> extends ReadonlyArray<DeepReadonly5887<T>> {}

type DeepReadonlyObject5887<T> = {
  readonly [P in keyof T]: DeepReadonly5887<T[P]>;
};

type UnionToIntersection5887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5887<T> = UnionToIntersection5887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5887<T extends unknown[], V> = [...T, V];

type TuplifyUnion5887<T, L = LastOf5887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5887<TuplifyUnion5887<Exclude<T, L>>, L>;

type DeepPartial5887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5887<T[P]> }
  : T;

type Paths5887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5887<K, Paths5887<T[K], Prev5887[D]>> : never }[keyof T]
  : never;

type Prev5887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5887 {
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

type ConfigPaths5887 = Paths5887<NestedConfig5887>;

interface HeavyProps5887 {
  config: DeepPartial5887<NestedConfig5887>;
  path?: ConfigPaths5887;
}

const HeavyComponent5887 = memo(function HeavyComponent5887({ config }: HeavyProps5887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5887.displayName = 'HeavyComponent5887';
export default HeavyComponent5887;
