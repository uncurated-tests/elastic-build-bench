'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5127<T> = T extends (infer U)[]
  ? DeepReadonlyArray5127<U>
  : T extends object
  ? DeepReadonlyObject5127<T>
  : T;

interface DeepReadonlyArray5127<T> extends ReadonlyArray<DeepReadonly5127<T>> {}

type DeepReadonlyObject5127<T> = {
  readonly [P in keyof T]: DeepReadonly5127<T[P]>;
};

type UnionToIntersection5127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5127<T> = UnionToIntersection5127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5127<T extends unknown[], V> = [...T, V];

type TuplifyUnion5127<T, L = LastOf5127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5127<TuplifyUnion5127<Exclude<T, L>>, L>;

type DeepPartial5127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5127<T[P]> }
  : T;

type Paths5127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5127<K, Paths5127<T[K], Prev5127[D]>> : never }[keyof T]
  : never;

type Prev5127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5127 {
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

type ConfigPaths5127 = Paths5127<NestedConfig5127>;

interface HeavyProps5127 {
  config: DeepPartial5127<NestedConfig5127>;
  path?: ConfigPaths5127;
}

const HeavyComponent5127 = memo(function HeavyComponent5127({ config }: HeavyProps5127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5127.displayName = 'HeavyComponent5127';
export default HeavyComponent5127;
