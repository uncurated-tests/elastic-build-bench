'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5821<T> = T extends (infer U)[]
  ? DeepReadonlyArray5821<U>
  : T extends object
  ? DeepReadonlyObject5821<T>
  : T;

interface DeepReadonlyArray5821<T> extends ReadonlyArray<DeepReadonly5821<T>> {}

type DeepReadonlyObject5821<T> = {
  readonly [P in keyof T]: DeepReadonly5821<T[P]>;
};

type UnionToIntersection5821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5821<T> = UnionToIntersection5821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5821<T extends unknown[], V> = [...T, V];

type TuplifyUnion5821<T, L = LastOf5821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5821<TuplifyUnion5821<Exclude<T, L>>, L>;

type DeepPartial5821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5821<T[P]> }
  : T;

type Paths5821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5821<K, Paths5821<T[K], Prev5821[D]>> : never }[keyof T]
  : never;

type Prev5821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5821 {
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

type ConfigPaths5821 = Paths5821<NestedConfig5821>;

interface HeavyProps5821 {
  config: DeepPartial5821<NestedConfig5821>;
  path?: ConfigPaths5821;
}

const HeavyComponent5821 = memo(function HeavyComponent5821({ config }: HeavyProps5821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5821.displayName = 'HeavyComponent5821';
export default HeavyComponent5821;
