'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5602<T> = T extends (infer U)[]
  ? DeepReadonlyArray5602<U>
  : T extends object
  ? DeepReadonlyObject5602<T>
  : T;

interface DeepReadonlyArray5602<T> extends ReadonlyArray<DeepReadonly5602<T>> {}

type DeepReadonlyObject5602<T> = {
  readonly [P in keyof T]: DeepReadonly5602<T[P]>;
};

type UnionToIntersection5602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5602<T> = UnionToIntersection5602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5602<T extends unknown[], V> = [...T, V];

type TuplifyUnion5602<T, L = LastOf5602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5602<TuplifyUnion5602<Exclude<T, L>>, L>;

type DeepPartial5602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5602<T[P]> }
  : T;

type Paths5602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5602<K, Paths5602<T[K], Prev5602[D]>> : never }[keyof T]
  : never;

type Prev5602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5602 {
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

type ConfigPaths5602 = Paths5602<NestedConfig5602>;

interface HeavyProps5602 {
  config: DeepPartial5602<NestedConfig5602>;
  path?: ConfigPaths5602;
}

const HeavyComponent5602 = memo(function HeavyComponent5602({ config }: HeavyProps5602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5602.displayName = 'HeavyComponent5602';
export default HeavyComponent5602;
