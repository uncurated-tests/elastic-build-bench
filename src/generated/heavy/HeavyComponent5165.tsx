'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5165<T> = T extends (infer U)[]
  ? DeepReadonlyArray5165<U>
  : T extends object
  ? DeepReadonlyObject5165<T>
  : T;

interface DeepReadonlyArray5165<T> extends ReadonlyArray<DeepReadonly5165<T>> {}

type DeepReadonlyObject5165<T> = {
  readonly [P in keyof T]: DeepReadonly5165<T[P]>;
};

type UnionToIntersection5165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5165<T> = UnionToIntersection5165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5165<T extends unknown[], V> = [...T, V];

type TuplifyUnion5165<T, L = LastOf5165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5165<TuplifyUnion5165<Exclude<T, L>>, L>;

type DeepPartial5165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5165<T[P]> }
  : T;

type Paths5165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5165<K, Paths5165<T[K], Prev5165[D]>> : never }[keyof T]
  : never;

type Prev5165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5165 {
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

type ConfigPaths5165 = Paths5165<NestedConfig5165>;

interface HeavyProps5165 {
  config: DeepPartial5165<NestedConfig5165>;
  path?: ConfigPaths5165;
}

const HeavyComponent5165 = memo(function HeavyComponent5165({ config }: HeavyProps5165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5165.displayName = 'HeavyComponent5165';
export default HeavyComponent5165;
