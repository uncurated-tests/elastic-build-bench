'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5511<T> = T extends (infer U)[]
  ? DeepReadonlyArray5511<U>
  : T extends object
  ? DeepReadonlyObject5511<T>
  : T;

interface DeepReadonlyArray5511<T> extends ReadonlyArray<DeepReadonly5511<T>> {}

type DeepReadonlyObject5511<T> = {
  readonly [P in keyof T]: DeepReadonly5511<T[P]>;
};

type UnionToIntersection5511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5511<T> = UnionToIntersection5511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5511<T extends unknown[], V> = [...T, V];

type TuplifyUnion5511<T, L = LastOf5511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5511<TuplifyUnion5511<Exclude<T, L>>, L>;

type DeepPartial5511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5511<T[P]> }
  : T;

type Paths5511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5511<K, Paths5511<T[K], Prev5511[D]>> : never }[keyof T]
  : never;

type Prev5511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5511 {
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

type ConfigPaths5511 = Paths5511<NestedConfig5511>;

interface HeavyProps5511 {
  config: DeepPartial5511<NestedConfig5511>;
  path?: ConfigPaths5511;
}

const HeavyComponent5511 = memo(function HeavyComponent5511({ config }: HeavyProps5511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5511.displayName = 'HeavyComponent5511';
export default HeavyComponent5511;
