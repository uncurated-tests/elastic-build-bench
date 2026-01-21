'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5048<T> = T extends (infer U)[]
  ? DeepReadonlyArray5048<U>
  : T extends object
  ? DeepReadonlyObject5048<T>
  : T;

interface DeepReadonlyArray5048<T> extends ReadonlyArray<DeepReadonly5048<T>> {}

type DeepReadonlyObject5048<T> = {
  readonly [P in keyof T]: DeepReadonly5048<T[P]>;
};

type UnionToIntersection5048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5048<T> = UnionToIntersection5048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5048<T extends unknown[], V> = [...T, V];

type TuplifyUnion5048<T, L = LastOf5048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5048<TuplifyUnion5048<Exclude<T, L>>, L>;

type DeepPartial5048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5048<T[P]> }
  : T;

type Paths5048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5048<K, Paths5048<T[K], Prev5048[D]>> : never }[keyof T]
  : never;

type Prev5048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5048 {
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

type ConfigPaths5048 = Paths5048<NestedConfig5048>;

interface HeavyProps5048 {
  config: DeepPartial5048<NestedConfig5048>;
  path?: ConfigPaths5048;
}

const HeavyComponent5048 = memo(function HeavyComponent5048({ config }: HeavyProps5048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5048.displayName = 'HeavyComponent5048';
export default HeavyComponent5048;
