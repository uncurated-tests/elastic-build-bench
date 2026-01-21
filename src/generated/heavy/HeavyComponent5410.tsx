'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5410<T> = T extends (infer U)[]
  ? DeepReadonlyArray5410<U>
  : T extends object
  ? DeepReadonlyObject5410<T>
  : T;

interface DeepReadonlyArray5410<T> extends ReadonlyArray<DeepReadonly5410<T>> {}

type DeepReadonlyObject5410<T> = {
  readonly [P in keyof T]: DeepReadonly5410<T[P]>;
};

type UnionToIntersection5410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5410<T> = UnionToIntersection5410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5410<T extends unknown[], V> = [...T, V];

type TuplifyUnion5410<T, L = LastOf5410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5410<TuplifyUnion5410<Exclude<T, L>>, L>;

type DeepPartial5410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5410<T[P]> }
  : T;

type Paths5410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5410<K, Paths5410<T[K], Prev5410[D]>> : never }[keyof T]
  : never;

type Prev5410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5410 {
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

type ConfigPaths5410 = Paths5410<NestedConfig5410>;

interface HeavyProps5410 {
  config: DeepPartial5410<NestedConfig5410>;
  path?: ConfigPaths5410;
}

const HeavyComponent5410 = memo(function HeavyComponent5410({ config }: HeavyProps5410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5410.displayName = 'HeavyComponent5410';
export default HeavyComponent5410;
