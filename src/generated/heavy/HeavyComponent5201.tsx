'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5201<T> = T extends (infer U)[]
  ? DeepReadonlyArray5201<U>
  : T extends object
  ? DeepReadonlyObject5201<T>
  : T;

interface DeepReadonlyArray5201<T> extends ReadonlyArray<DeepReadonly5201<T>> {}

type DeepReadonlyObject5201<T> = {
  readonly [P in keyof T]: DeepReadonly5201<T[P]>;
};

type UnionToIntersection5201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5201<T> = UnionToIntersection5201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5201<T extends unknown[], V> = [...T, V];

type TuplifyUnion5201<T, L = LastOf5201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5201<TuplifyUnion5201<Exclude<T, L>>, L>;

type DeepPartial5201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5201<T[P]> }
  : T;

type Paths5201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5201<K, Paths5201<T[K], Prev5201[D]>> : never }[keyof T]
  : never;

type Prev5201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5201 {
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

type ConfigPaths5201 = Paths5201<NestedConfig5201>;

interface HeavyProps5201 {
  config: DeepPartial5201<NestedConfig5201>;
  path?: ConfigPaths5201;
}

const HeavyComponent5201 = memo(function HeavyComponent5201({ config }: HeavyProps5201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5201.displayName = 'HeavyComponent5201';
export default HeavyComponent5201;
