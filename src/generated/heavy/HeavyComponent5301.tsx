'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5301<T> = T extends (infer U)[]
  ? DeepReadonlyArray5301<U>
  : T extends object
  ? DeepReadonlyObject5301<T>
  : T;

interface DeepReadonlyArray5301<T> extends ReadonlyArray<DeepReadonly5301<T>> {}

type DeepReadonlyObject5301<T> = {
  readonly [P in keyof T]: DeepReadonly5301<T[P]>;
};

type UnionToIntersection5301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5301<T> = UnionToIntersection5301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5301<T extends unknown[], V> = [...T, V];

type TuplifyUnion5301<T, L = LastOf5301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5301<TuplifyUnion5301<Exclude<T, L>>, L>;

type DeepPartial5301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5301<T[P]> }
  : T;

type Paths5301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5301<K, Paths5301<T[K], Prev5301[D]>> : never }[keyof T]
  : never;

type Prev5301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5301 {
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

type ConfigPaths5301 = Paths5301<NestedConfig5301>;

interface HeavyProps5301 {
  config: DeepPartial5301<NestedConfig5301>;
  path?: ConfigPaths5301;
}

const HeavyComponent5301 = memo(function HeavyComponent5301({ config }: HeavyProps5301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5301.displayName = 'HeavyComponent5301';
export default HeavyComponent5301;
