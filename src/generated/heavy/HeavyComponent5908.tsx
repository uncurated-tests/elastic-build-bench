'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5908<T> = T extends (infer U)[]
  ? DeepReadonlyArray5908<U>
  : T extends object
  ? DeepReadonlyObject5908<T>
  : T;

interface DeepReadonlyArray5908<T> extends ReadonlyArray<DeepReadonly5908<T>> {}

type DeepReadonlyObject5908<T> = {
  readonly [P in keyof T]: DeepReadonly5908<T[P]>;
};

type UnionToIntersection5908<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5908<T> = UnionToIntersection5908<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5908<T extends unknown[], V> = [...T, V];

type TuplifyUnion5908<T, L = LastOf5908<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5908<TuplifyUnion5908<Exclude<T, L>>, L>;

type DeepPartial5908<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5908<T[P]> }
  : T;

type Paths5908<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5908<K, Paths5908<T[K], Prev5908[D]>> : never }[keyof T]
  : never;

type Prev5908 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5908<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5908 {
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

type ConfigPaths5908 = Paths5908<NestedConfig5908>;

interface HeavyProps5908 {
  config: DeepPartial5908<NestedConfig5908>;
  path?: ConfigPaths5908;
}

const HeavyComponent5908 = memo(function HeavyComponent5908({ config }: HeavyProps5908) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5908) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5908 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5908: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5908.displayName = 'HeavyComponent5908';
export default HeavyComponent5908;
