'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5018<T> = T extends (infer U)[]
  ? DeepReadonlyArray5018<U>
  : T extends object
  ? DeepReadonlyObject5018<T>
  : T;

interface DeepReadonlyArray5018<T> extends ReadonlyArray<DeepReadonly5018<T>> {}

type DeepReadonlyObject5018<T> = {
  readonly [P in keyof T]: DeepReadonly5018<T[P]>;
};

type UnionToIntersection5018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5018<T> = UnionToIntersection5018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5018<T extends unknown[], V> = [...T, V];

type TuplifyUnion5018<T, L = LastOf5018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5018<TuplifyUnion5018<Exclude<T, L>>, L>;

type DeepPartial5018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5018<T[P]> }
  : T;

type Paths5018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5018<K, Paths5018<T[K], Prev5018[D]>> : never }[keyof T]
  : never;

type Prev5018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5018 {
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

type ConfigPaths5018 = Paths5018<NestedConfig5018>;

interface HeavyProps5018 {
  config: DeepPartial5018<NestedConfig5018>;
  path?: ConfigPaths5018;
}

const HeavyComponent5018 = memo(function HeavyComponent5018({ config }: HeavyProps5018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5018.displayName = 'HeavyComponent5018';
export default HeavyComponent5018;
