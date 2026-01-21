'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5323<T> = T extends (infer U)[]
  ? DeepReadonlyArray5323<U>
  : T extends object
  ? DeepReadonlyObject5323<T>
  : T;

interface DeepReadonlyArray5323<T> extends ReadonlyArray<DeepReadonly5323<T>> {}

type DeepReadonlyObject5323<T> = {
  readonly [P in keyof T]: DeepReadonly5323<T[P]>;
};

type UnionToIntersection5323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5323<T> = UnionToIntersection5323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5323<T extends unknown[], V> = [...T, V];

type TuplifyUnion5323<T, L = LastOf5323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5323<TuplifyUnion5323<Exclude<T, L>>, L>;

type DeepPartial5323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5323<T[P]> }
  : T;

type Paths5323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5323<K, Paths5323<T[K], Prev5323[D]>> : never }[keyof T]
  : never;

type Prev5323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5323 {
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

type ConfigPaths5323 = Paths5323<NestedConfig5323>;

interface HeavyProps5323 {
  config: DeepPartial5323<NestedConfig5323>;
  path?: ConfigPaths5323;
}

const HeavyComponent5323 = memo(function HeavyComponent5323({ config }: HeavyProps5323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5323.displayName = 'HeavyComponent5323';
export default HeavyComponent5323;
