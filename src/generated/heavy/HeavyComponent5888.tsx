'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5888<T> = T extends (infer U)[]
  ? DeepReadonlyArray5888<U>
  : T extends object
  ? DeepReadonlyObject5888<T>
  : T;

interface DeepReadonlyArray5888<T> extends ReadonlyArray<DeepReadonly5888<T>> {}

type DeepReadonlyObject5888<T> = {
  readonly [P in keyof T]: DeepReadonly5888<T[P]>;
};

type UnionToIntersection5888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5888<T> = UnionToIntersection5888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5888<T extends unknown[], V> = [...T, V];

type TuplifyUnion5888<T, L = LastOf5888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5888<TuplifyUnion5888<Exclude<T, L>>, L>;

type DeepPartial5888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5888<T[P]> }
  : T;

type Paths5888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5888<K, Paths5888<T[K], Prev5888[D]>> : never }[keyof T]
  : never;

type Prev5888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5888 {
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

type ConfigPaths5888 = Paths5888<NestedConfig5888>;

interface HeavyProps5888 {
  config: DeepPartial5888<NestedConfig5888>;
  path?: ConfigPaths5888;
}

const HeavyComponent5888 = memo(function HeavyComponent5888({ config }: HeavyProps5888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5888.displayName = 'HeavyComponent5888';
export default HeavyComponent5888;
