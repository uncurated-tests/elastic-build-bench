'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5366<T> = T extends (infer U)[]
  ? DeepReadonlyArray5366<U>
  : T extends object
  ? DeepReadonlyObject5366<T>
  : T;

interface DeepReadonlyArray5366<T> extends ReadonlyArray<DeepReadonly5366<T>> {}

type DeepReadonlyObject5366<T> = {
  readonly [P in keyof T]: DeepReadonly5366<T[P]>;
};

type UnionToIntersection5366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5366<T> = UnionToIntersection5366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5366<T extends unknown[], V> = [...T, V];

type TuplifyUnion5366<T, L = LastOf5366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5366<TuplifyUnion5366<Exclude<T, L>>, L>;

type DeepPartial5366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5366<T[P]> }
  : T;

type Paths5366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5366<K, Paths5366<T[K], Prev5366[D]>> : never }[keyof T]
  : never;

type Prev5366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5366 {
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

type ConfigPaths5366 = Paths5366<NestedConfig5366>;

interface HeavyProps5366 {
  config: DeepPartial5366<NestedConfig5366>;
  path?: ConfigPaths5366;
}

const HeavyComponent5366 = memo(function HeavyComponent5366({ config }: HeavyProps5366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5366.displayName = 'HeavyComponent5366';
export default HeavyComponent5366;
