'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5392<T> = T extends (infer U)[]
  ? DeepReadonlyArray5392<U>
  : T extends object
  ? DeepReadonlyObject5392<T>
  : T;

interface DeepReadonlyArray5392<T> extends ReadonlyArray<DeepReadonly5392<T>> {}

type DeepReadonlyObject5392<T> = {
  readonly [P in keyof T]: DeepReadonly5392<T[P]>;
};

type UnionToIntersection5392<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5392<T> = UnionToIntersection5392<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5392<T extends unknown[], V> = [...T, V];

type TuplifyUnion5392<T, L = LastOf5392<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5392<TuplifyUnion5392<Exclude<T, L>>, L>;

type DeepPartial5392<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5392<T[P]> }
  : T;

type Paths5392<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5392<K, Paths5392<T[K], Prev5392[D]>> : never }[keyof T]
  : never;

type Prev5392 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5392<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5392 {
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

type ConfigPaths5392 = Paths5392<NestedConfig5392>;

interface HeavyProps5392 {
  config: DeepPartial5392<NestedConfig5392>;
  path?: ConfigPaths5392;
}

const HeavyComponent5392 = memo(function HeavyComponent5392({ config }: HeavyProps5392) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5392) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5392 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5392: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5392.displayName = 'HeavyComponent5392';
export default HeavyComponent5392;
