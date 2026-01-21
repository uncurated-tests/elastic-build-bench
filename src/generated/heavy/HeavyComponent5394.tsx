'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5394<T> = T extends (infer U)[]
  ? DeepReadonlyArray5394<U>
  : T extends object
  ? DeepReadonlyObject5394<T>
  : T;

interface DeepReadonlyArray5394<T> extends ReadonlyArray<DeepReadonly5394<T>> {}

type DeepReadonlyObject5394<T> = {
  readonly [P in keyof T]: DeepReadonly5394<T[P]>;
};

type UnionToIntersection5394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5394<T> = UnionToIntersection5394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5394<T extends unknown[], V> = [...T, V];

type TuplifyUnion5394<T, L = LastOf5394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5394<TuplifyUnion5394<Exclude<T, L>>, L>;

type DeepPartial5394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5394<T[P]> }
  : T;

type Paths5394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5394<K, Paths5394<T[K], Prev5394[D]>> : never }[keyof T]
  : never;

type Prev5394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5394 {
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

type ConfigPaths5394 = Paths5394<NestedConfig5394>;

interface HeavyProps5394 {
  config: DeepPartial5394<NestedConfig5394>;
  path?: ConfigPaths5394;
}

const HeavyComponent5394 = memo(function HeavyComponent5394({ config }: HeavyProps5394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5394.displayName = 'HeavyComponent5394';
export default HeavyComponent5394;
