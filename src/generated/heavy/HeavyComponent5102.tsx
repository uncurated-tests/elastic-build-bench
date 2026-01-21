'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5102<T> = T extends (infer U)[]
  ? DeepReadonlyArray5102<U>
  : T extends object
  ? DeepReadonlyObject5102<T>
  : T;

interface DeepReadonlyArray5102<T> extends ReadonlyArray<DeepReadonly5102<T>> {}

type DeepReadonlyObject5102<T> = {
  readonly [P in keyof T]: DeepReadonly5102<T[P]>;
};

type UnionToIntersection5102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5102<T> = UnionToIntersection5102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5102<T extends unknown[], V> = [...T, V];

type TuplifyUnion5102<T, L = LastOf5102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5102<TuplifyUnion5102<Exclude<T, L>>, L>;

type DeepPartial5102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5102<T[P]> }
  : T;

type Paths5102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5102<K, Paths5102<T[K], Prev5102[D]>> : never }[keyof T]
  : never;

type Prev5102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5102 {
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

type ConfigPaths5102 = Paths5102<NestedConfig5102>;

interface HeavyProps5102 {
  config: DeepPartial5102<NestedConfig5102>;
  path?: ConfigPaths5102;
}

const HeavyComponent5102 = memo(function HeavyComponent5102({ config }: HeavyProps5102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5102.displayName = 'HeavyComponent5102';
export default HeavyComponent5102;
