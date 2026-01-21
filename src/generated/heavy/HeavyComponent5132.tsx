'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5132<T> = T extends (infer U)[]
  ? DeepReadonlyArray5132<U>
  : T extends object
  ? DeepReadonlyObject5132<T>
  : T;

interface DeepReadonlyArray5132<T> extends ReadonlyArray<DeepReadonly5132<T>> {}

type DeepReadonlyObject5132<T> = {
  readonly [P in keyof T]: DeepReadonly5132<T[P]>;
};

type UnionToIntersection5132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5132<T> = UnionToIntersection5132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5132<T extends unknown[], V> = [...T, V];

type TuplifyUnion5132<T, L = LastOf5132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5132<TuplifyUnion5132<Exclude<T, L>>, L>;

type DeepPartial5132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5132<T[P]> }
  : T;

type Paths5132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5132<K, Paths5132<T[K], Prev5132[D]>> : never }[keyof T]
  : never;

type Prev5132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5132 {
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

type ConfigPaths5132 = Paths5132<NestedConfig5132>;

interface HeavyProps5132 {
  config: DeepPartial5132<NestedConfig5132>;
  path?: ConfigPaths5132;
}

const HeavyComponent5132 = memo(function HeavyComponent5132({ config }: HeavyProps5132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5132.displayName = 'HeavyComponent5132';
export default HeavyComponent5132;
