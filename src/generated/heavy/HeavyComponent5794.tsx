'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5794<T> = T extends (infer U)[]
  ? DeepReadonlyArray5794<U>
  : T extends object
  ? DeepReadonlyObject5794<T>
  : T;

interface DeepReadonlyArray5794<T> extends ReadonlyArray<DeepReadonly5794<T>> {}

type DeepReadonlyObject5794<T> = {
  readonly [P in keyof T]: DeepReadonly5794<T[P]>;
};

type UnionToIntersection5794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5794<T> = UnionToIntersection5794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5794<T extends unknown[], V> = [...T, V];

type TuplifyUnion5794<T, L = LastOf5794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5794<TuplifyUnion5794<Exclude<T, L>>, L>;

type DeepPartial5794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5794<T[P]> }
  : T;

type Paths5794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5794<K, Paths5794<T[K], Prev5794[D]>> : never }[keyof T]
  : never;

type Prev5794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5794 {
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

type ConfigPaths5794 = Paths5794<NestedConfig5794>;

interface HeavyProps5794 {
  config: DeepPartial5794<NestedConfig5794>;
  path?: ConfigPaths5794;
}

const HeavyComponent5794 = memo(function HeavyComponent5794({ config }: HeavyProps5794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5794.displayName = 'HeavyComponent5794';
export default HeavyComponent5794;
