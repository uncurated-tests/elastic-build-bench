'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5405<T> = T extends (infer U)[]
  ? DeepReadonlyArray5405<U>
  : T extends object
  ? DeepReadonlyObject5405<T>
  : T;

interface DeepReadonlyArray5405<T> extends ReadonlyArray<DeepReadonly5405<T>> {}

type DeepReadonlyObject5405<T> = {
  readonly [P in keyof T]: DeepReadonly5405<T[P]>;
};

type UnionToIntersection5405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5405<T> = UnionToIntersection5405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5405<T extends unknown[], V> = [...T, V];

type TuplifyUnion5405<T, L = LastOf5405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5405<TuplifyUnion5405<Exclude<T, L>>, L>;

type DeepPartial5405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5405<T[P]> }
  : T;

type Paths5405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5405<K, Paths5405<T[K], Prev5405[D]>> : never }[keyof T]
  : never;

type Prev5405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5405 {
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

type ConfigPaths5405 = Paths5405<NestedConfig5405>;

interface HeavyProps5405 {
  config: DeepPartial5405<NestedConfig5405>;
  path?: ConfigPaths5405;
}

const HeavyComponent5405 = memo(function HeavyComponent5405({ config }: HeavyProps5405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5405.displayName = 'HeavyComponent5405';
export default HeavyComponent5405;
