'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5133<T> = T extends (infer U)[]
  ? DeepReadonlyArray5133<U>
  : T extends object
  ? DeepReadonlyObject5133<T>
  : T;

interface DeepReadonlyArray5133<T> extends ReadonlyArray<DeepReadonly5133<T>> {}

type DeepReadonlyObject5133<T> = {
  readonly [P in keyof T]: DeepReadonly5133<T[P]>;
};

type UnionToIntersection5133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5133<T> = UnionToIntersection5133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5133<T extends unknown[], V> = [...T, V];

type TuplifyUnion5133<T, L = LastOf5133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5133<TuplifyUnion5133<Exclude<T, L>>, L>;

type DeepPartial5133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5133<T[P]> }
  : T;

type Paths5133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5133<K, Paths5133<T[K], Prev5133[D]>> : never }[keyof T]
  : never;

type Prev5133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5133 {
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

type ConfigPaths5133 = Paths5133<NestedConfig5133>;

interface HeavyProps5133 {
  config: DeepPartial5133<NestedConfig5133>;
  path?: ConfigPaths5133;
}

const HeavyComponent5133 = memo(function HeavyComponent5133({ config }: HeavyProps5133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5133.displayName = 'HeavyComponent5133';
export default HeavyComponent5133;
