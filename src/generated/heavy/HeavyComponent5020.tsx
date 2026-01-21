'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5020<T> = T extends (infer U)[]
  ? DeepReadonlyArray5020<U>
  : T extends object
  ? DeepReadonlyObject5020<T>
  : T;

interface DeepReadonlyArray5020<T> extends ReadonlyArray<DeepReadonly5020<T>> {}

type DeepReadonlyObject5020<T> = {
  readonly [P in keyof T]: DeepReadonly5020<T[P]>;
};

type UnionToIntersection5020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5020<T> = UnionToIntersection5020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5020<T extends unknown[], V> = [...T, V];

type TuplifyUnion5020<T, L = LastOf5020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5020<TuplifyUnion5020<Exclude<T, L>>, L>;

type DeepPartial5020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5020<T[P]> }
  : T;

type Paths5020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5020<K, Paths5020<T[K], Prev5020[D]>> : never }[keyof T]
  : never;

type Prev5020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5020 {
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

type ConfigPaths5020 = Paths5020<NestedConfig5020>;

interface HeavyProps5020 {
  config: DeepPartial5020<NestedConfig5020>;
  path?: ConfigPaths5020;
}

const HeavyComponent5020 = memo(function HeavyComponent5020({ config }: HeavyProps5020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5020.displayName = 'HeavyComponent5020';
export default HeavyComponent5020;
