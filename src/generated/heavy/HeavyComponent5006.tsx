'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5006<T> = T extends (infer U)[]
  ? DeepReadonlyArray5006<U>
  : T extends object
  ? DeepReadonlyObject5006<T>
  : T;

interface DeepReadonlyArray5006<T> extends ReadonlyArray<DeepReadonly5006<T>> {}

type DeepReadonlyObject5006<T> = {
  readonly [P in keyof T]: DeepReadonly5006<T[P]>;
};

type UnionToIntersection5006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5006<T> = UnionToIntersection5006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5006<T extends unknown[], V> = [...T, V];

type TuplifyUnion5006<T, L = LastOf5006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5006<TuplifyUnion5006<Exclude<T, L>>, L>;

type DeepPartial5006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5006<T[P]> }
  : T;

type Paths5006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5006<K, Paths5006<T[K], Prev5006[D]>> : never }[keyof T]
  : never;

type Prev5006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5006 {
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

type ConfigPaths5006 = Paths5006<NestedConfig5006>;

interface HeavyProps5006 {
  config: DeepPartial5006<NestedConfig5006>;
  path?: ConfigPaths5006;
}

const HeavyComponent5006 = memo(function HeavyComponent5006({ config }: HeavyProps5006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5006.displayName = 'HeavyComponent5006';
export default HeavyComponent5006;
