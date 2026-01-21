'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5210<T> = T extends (infer U)[]
  ? DeepReadonlyArray5210<U>
  : T extends object
  ? DeepReadonlyObject5210<T>
  : T;

interface DeepReadonlyArray5210<T> extends ReadonlyArray<DeepReadonly5210<T>> {}

type DeepReadonlyObject5210<T> = {
  readonly [P in keyof T]: DeepReadonly5210<T[P]>;
};

type UnionToIntersection5210<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5210<T> = UnionToIntersection5210<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5210<T extends unknown[], V> = [...T, V];

type TuplifyUnion5210<T, L = LastOf5210<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5210<TuplifyUnion5210<Exclude<T, L>>, L>;

type DeepPartial5210<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5210<T[P]> }
  : T;

type Paths5210<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5210<K, Paths5210<T[K], Prev5210[D]>> : never }[keyof T]
  : never;

type Prev5210 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5210<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5210 {
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

type ConfigPaths5210 = Paths5210<NestedConfig5210>;

interface HeavyProps5210 {
  config: DeepPartial5210<NestedConfig5210>;
  path?: ConfigPaths5210;
}

const HeavyComponent5210 = memo(function HeavyComponent5210({ config }: HeavyProps5210) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5210) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5210 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5210: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5210.displayName = 'HeavyComponent5210';
export default HeavyComponent5210;
