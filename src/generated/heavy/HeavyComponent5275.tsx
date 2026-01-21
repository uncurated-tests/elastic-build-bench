'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5275<T> = T extends (infer U)[]
  ? DeepReadonlyArray5275<U>
  : T extends object
  ? DeepReadonlyObject5275<T>
  : T;

interface DeepReadonlyArray5275<T> extends ReadonlyArray<DeepReadonly5275<T>> {}

type DeepReadonlyObject5275<T> = {
  readonly [P in keyof T]: DeepReadonly5275<T[P]>;
};

type UnionToIntersection5275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5275<T> = UnionToIntersection5275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5275<T extends unknown[], V> = [...T, V];

type TuplifyUnion5275<T, L = LastOf5275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5275<TuplifyUnion5275<Exclude<T, L>>, L>;

type DeepPartial5275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5275<T[P]> }
  : T;

type Paths5275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5275<K, Paths5275<T[K], Prev5275[D]>> : never }[keyof T]
  : never;

type Prev5275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5275 {
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

type ConfigPaths5275 = Paths5275<NestedConfig5275>;

interface HeavyProps5275 {
  config: DeepPartial5275<NestedConfig5275>;
  path?: ConfigPaths5275;
}

const HeavyComponent5275 = memo(function HeavyComponent5275({ config }: HeavyProps5275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5275.displayName = 'HeavyComponent5275';
export default HeavyComponent5275;
