'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5333<T> = T extends (infer U)[]
  ? DeepReadonlyArray5333<U>
  : T extends object
  ? DeepReadonlyObject5333<T>
  : T;

interface DeepReadonlyArray5333<T> extends ReadonlyArray<DeepReadonly5333<T>> {}

type DeepReadonlyObject5333<T> = {
  readonly [P in keyof T]: DeepReadonly5333<T[P]>;
};

type UnionToIntersection5333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5333<T> = UnionToIntersection5333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5333<T extends unknown[], V> = [...T, V];

type TuplifyUnion5333<T, L = LastOf5333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5333<TuplifyUnion5333<Exclude<T, L>>, L>;

type DeepPartial5333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5333<T[P]> }
  : T;

type Paths5333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5333<K, Paths5333<T[K], Prev5333[D]>> : never }[keyof T]
  : never;

type Prev5333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5333 {
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

type ConfigPaths5333 = Paths5333<NestedConfig5333>;

interface HeavyProps5333 {
  config: DeepPartial5333<NestedConfig5333>;
  path?: ConfigPaths5333;
}

const HeavyComponent5333 = memo(function HeavyComponent5333({ config }: HeavyProps5333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5333.displayName = 'HeavyComponent5333';
export default HeavyComponent5333;
