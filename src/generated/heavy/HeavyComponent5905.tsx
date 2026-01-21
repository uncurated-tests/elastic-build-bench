'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5905<T> = T extends (infer U)[]
  ? DeepReadonlyArray5905<U>
  : T extends object
  ? DeepReadonlyObject5905<T>
  : T;

interface DeepReadonlyArray5905<T> extends ReadonlyArray<DeepReadonly5905<T>> {}

type DeepReadonlyObject5905<T> = {
  readonly [P in keyof T]: DeepReadonly5905<T[P]>;
};

type UnionToIntersection5905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5905<T> = UnionToIntersection5905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5905<T extends unknown[], V> = [...T, V];

type TuplifyUnion5905<T, L = LastOf5905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5905<TuplifyUnion5905<Exclude<T, L>>, L>;

type DeepPartial5905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5905<T[P]> }
  : T;

type Paths5905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5905<K, Paths5905<T[K], Prev5905[D]>> : never }[keyof T]
  : never;

type Prev5905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5905 {
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

type ConfigPaths5905 = Paths5905<NestedConfig5905>;

interface HeavyProps5905 {
  config: DeepPartial5905<NestedConfig5905>;
  path?: ConfigPaths5905;
}

const HeavyComponent5905 = memo(function HeavyComponent5905({ config }: HeavyProps5905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5905.displayName = 'HeavyComponent5905';
export default HeavyComponent5905;
