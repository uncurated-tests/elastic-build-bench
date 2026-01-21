'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5586<T> = T extends (infer U)[]
  ? DeepReadonlyArray5586<U>
  : T extends object
  ? DeepReadonlyObject5586<T>
  : T;

interface DeepReadonlyArray5586<T> extends ReadonlyArray<DeepReadonly5586<T>> {}

type DeepReadonlyObject5586<T> = {
  readonly [P in keyof T]: DeepReadonly5586<T[P]>;
};

type UnionToIntersection5586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5586<T> = UnionToIntersection5586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5586<T extends unknown[], V> = [...T, V];

type TuplifyUnion5586<T, L = LastOf5586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5586<TuplifyUnion5586<Exclude<T, L>>, L>;

type DeepPartial5586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5586<T[P]> }
  : T;

type Paths5586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5586<K, Paths5586<T[K], Prev5586[D]>> : never }[keyof T]
  : never;

type Prev5586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5586 {
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

type ConfigPaths5586 = Paths5586<NestedConfig5586>;

interface HeavyProps5586 {
  config: DeepPartial5586<NestedConfig5586>;
  path?: ConfigPaths5586;
}

const HeavyComponent5586 = memo(function HeavyComponent5586({ config }: HeavyProps5586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5586.displayName = 'HeavyComponent5586';
export default HeavyComponent5586;
