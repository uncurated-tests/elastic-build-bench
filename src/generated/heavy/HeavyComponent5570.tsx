'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5570<T> = T extends (infer U)[]
  ? DeepReadonlyArray5570<U>
  : T extends object
  ? DeepReadonlyObject5570<T>
  : T;

interface DeepReadonlyArray5570<T> extends ReadonlyArray<DeepReadonly5570<T>> {}

type DeepReadonlyObject5570<T> = {
  readonly [P in keyof T]: DeepReadonly5570<T[P]>;
};

type UnionToIntersection5570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5570<T> = UnionToIntersection5570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5570<T extends unknown[], V> = [...T, V];

type TuplifyUnion5570<T, L = LastOf5570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5570<TuplifyUnion5570<Exclude<T, L>>, L>;

type DeepPartial5570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5570<T[P]> }
  : T;

type Paths5570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5570<K, Paths5570<T[K], Prev5570[D]>> : never }[keyof T]
  : never;

type Prev5570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5570 {
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

type ConfigPaths5570 = Paths5570<NestedConfig5570>;

interface HeavyProps5570 {
  config: DeepPartial5570<NestedConfig5570>;
  path?: ConfigPaths5570;
}

const HeavyComponent5570 = memo(function HeavyComponent5570({ config }: HeavyProps5570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5570.displayName = 'HeavyComponent5570';
export default HeavyComponent5570;
