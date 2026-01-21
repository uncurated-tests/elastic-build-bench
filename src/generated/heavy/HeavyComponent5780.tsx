'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5780<T> = T extends (infer U)[]
  ? DeepReadonlyArray5780<U>
  : T extends object
  ? DeepReadonlyObject5780<T>
  : T;

interface DeepReadonlyArray5780<T> extends ReadonlyArray<DeepReadonly5780<T>> {}

type DeepReadonlyObject5780<T> = {
  readonly [P in keyof T]: DeepReadonly5780<T[P]>;
};

type UnionToIntersection5780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5780<T> = UnionToIntersection5780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5780<T extends unknown[], V> = [...T, V];

type TuplifyUnion5780<T, L = LastOf5780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5780<TuplifyUnion5780<Exclude<T, L>>, L>;

type DeepPartial5780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5780<T[P]> }
  : T;

type Paths5780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5780<K, Paths5780<T[K], Prev5780[D]>> : never }[keyof T]
  : never;

type Prev5780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5780 {
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

type ConfigPaths5780 = Paths5780<NestedConfig5780>;

interface HeavyProps5780 {
  config: DeepPartial5780<NestedConfig5780>;
  path?: ConfigPaths5780;
}

const HeavyComponent5780 = memo(function HeavyComponent5780({ config }: HeavyProps5780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5780.displayName = 'HeavyComponent5780';
export default HeavyComponent5780;
