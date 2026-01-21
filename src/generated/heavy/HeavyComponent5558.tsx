'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5558<T> = T extends (infer U)[]
  ? DeepReadonlyArray5558<U>
  : T extends object
  ? DeepReadonlyObject5558<T>
  : T;

interface DeepReadonlyArray5558<T> extends ReadonlyArray<DeepReadonly5558<T>> {}

type DeepReadonlyObject5558<T> = {
  readonly [P in keyof T]: DeepReadonly5558<T[P]>;
};

type UnionToIntersection5558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5558<T> = UnionToIntersection5558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5558<T extends unknown[], V> = [...T, V];

type TuplifyUnion5558<T, L = LastOf5558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5558<TuplifyUnion5558<Exclude<T, L>>, L>;

type DeepPartial5558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5558<T[P]> }
  : T;

type Paths5558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5558<K, Paths5558<T[K], Prev5558[D]>> : never }[keyof T]
  : never;

type Prev5558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5558 {
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

type ConfigPaths5558 = Paths5558<NestedConfig5558>;

interface HeavyProps5558 {
  config: DeepPartial5558<NestedConfig5558>;
  path?: ConfigPaths5558;
}

const HeavyComponent5558 = memo(function HeavyComponent5558({ config }: HeavyProps5558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5558.displayName = 'HeavyComponent5558';
export default HeavyComponent5558;
