'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5263<T> = T extends (infer U)[]
  ? DeepReadonlyArray5263<U>
  : T extends object
  ? DeepReadonlyObject5263<T>
  : T;

interface DeepReadonlyArray5263<T> extends ReadonlyArray<DeepReadonly5263<T>> {}

type DeepReadonlyObject5263<T> = {
  readonly [P in keyof T]: DeepReadonly5263<T[P]>;
};

type UnionToIntersection5263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5263<T> = UnionToIntersection5263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5263<T extends unknown[], V> = [...T, V];

type TuplifyUnion5263<T, L = LastOf5263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5263<TuplifyUnion5263<Exclude<T, L>>, L>;

type DeepPartial5263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5263<T[P]> }
  : T;

type Paths5263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5263<K, Paths5263<T[K], Prev5263[D]>> : never }[keyof T]
  : never;

type Prev5263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5263 {
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

type ConfigPaths5263 = Paths5263<NestedConfig5263>;

interface HeavyProps5263 {
  config: DeepPartial5263<NestedConfig5263>;
  path?: ConfigPaths5263;
}

const HeavyComponent5263 = memo(function HeavyComponent5263({ config }: HeavyProps5263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5263.displayName = 'HeavyComponent5263';
export default HeavyComponent5263;
