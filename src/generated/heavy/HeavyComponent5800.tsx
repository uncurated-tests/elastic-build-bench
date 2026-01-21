'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5800<T> = T extends (infer U)[]
  ? DeepReadonlyArray5800<U>
  : T extends object
  ? DeepReadonlyObject5800<T>
  : T;

interface DeepReadonlyArray5800<T> extends ReadonlyArray<DeepReadonly5800<T>> {}

type DeepReadonlyObject5800<T> = {
  readonly [P in keyof T]: DeepReadonly5800<T[P]>;
};

type UnionToIntersection5800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5800<T> = UnionToIntersection5800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5800<T extends unknown[], V> = [...T, V];

type TuplifyUnion5800<T, L = LastOf5800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5800<TuplifyUnion5800<Exclude<T, L>>, L>;

type DeepPartial5800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5800<T[P]> }
  : T;

type Paths5800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5800<K, Paths5800<T[K], Prev5800[D]>> : never }[keyof T]
  : never;

type Prev5800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5800 {
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

type ConfigPaths5800 = Paths5800<NestedConfig5800>;

interface HeavyProps5800 {
  config: DeepPartial5800<NestedConfig5800>;
  path?: ConfigPaths5800;
}

const HeavyComponent5800 = memo(function HeavyComponent5800({ config }: HeavyProps5800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5800.displayName = 'HeavyComponent5800';
export default HeavyComponent5800;
