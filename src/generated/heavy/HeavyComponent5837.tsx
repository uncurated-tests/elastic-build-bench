'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5837<T> = T extends (infer U)[]
  ? DeepReadonlyArray5837<U>
  : T extends object
  ? DeepReadonlyObject5837<T>
  : T;

interface DeepReadonlyArray5837<T> extends ReadonlyArray<DeepReadonly5837<T>> {}

type DeepReadonlyObject5837<T> = {
  readonly [P in keyof T]: DeepReadonly5837<T[P]>;
};

type UnionToIntersection5837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5837<T> = UnionToIntersection5837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5837<T extends unknown[], V> = [...T, V];

type TuplifyUnion5837<T, L = LastOf5837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5837<TuplifyUnion5837<Exclude<T, L>>, L>;

type DeepPartial5837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5837<T[P]> }
  : T;

type Paths5837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5837<K, Paths5837<T[K], Prev5837[D]>> : never }[keyof T]
  : never;

type Prev5837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5837 {
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

type ConfigPaths5837 = Paths5837<NestedConfig5837>;

interface HeavyProps5837 {
  config: DeepPartial5837<NestedConfig5837>;
  path?: ConfigPaths5837;
}

const HeavyComponent5837 = memo(function HeavyComponent5837({ config }: HeavyProps5837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5837.displayName = 'HeavyComponent5837';
export default HeavyComponent5837;
