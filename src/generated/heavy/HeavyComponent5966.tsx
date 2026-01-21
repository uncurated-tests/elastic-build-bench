'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5966<T> = T extends (infer U)[]
  ? DeepReadonlyArray5966<U>
  : T extends object
  ? DeepReadonlyObject5966<T>
  : T;

interface DeepReadonlyArray5966<T> extends ReadonlyArray<DeepReadonly5966<T>> {}

type DeepReadonlyObject5966<T> = {
  readonly [P in keyof T]: DeepReadonly5966<T[P]>;
};

type UnionToIntersection5966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5966<T> = UnionToIntersection5966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5966<T extends unknown[], V> = [...T, V];

type TuplifyUnion5966<T, L = LastOf5966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5966<TuplifyUnion5966<Exclude<T, L>>, L>;

type DeepPartial5966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5966<T[P]> }
  : T;

type Paths5966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5966<K, Paths5966<T[K], Prev5966[D]>> : never }[keyof T]
  : never;

type Prev5966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5966 {
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

type ConfigPaths5966 = Paths5966<NestedConfig5966>;

interface HeavyProps5966 {
  config: DeepPartial5966<NestedConfig5966>;
  path?: ConfigPaths5966;
}

const HeavyComponent5966 = memo(function HeavyComponent5966({ config }: HeavyProps5966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5966.displayName = 'HeavyComponent5966';
export default HeavyComponent5966;
