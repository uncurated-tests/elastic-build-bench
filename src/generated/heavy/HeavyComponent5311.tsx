'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5311<T> = T extends (infer U)[]
  ? DeepReadonlyArray5311<U>
  : T extends object
  ? DeepReadonlyObject5311<T>
  : T;

interface DeepReadonlyArray5311<T> extends ReadonlyArray<DeepReadonly5311<T>> {}

type DeepReadonlyObject5311<T> = {
  readonly [P in keyof T]: DeepReadonly5311<T[P]>;
};

type UnionToIntersection5311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5311<T> = UnionToIntersection5311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5311<T extends unknown[], V> = [...T, V];

type TuplifyUnion5311<T, L = LastOf5311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5311<TuplifyUnion5311<Exclude<T, L>>, L>;

type DeepPartial5311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5311<T[P]> }
  : T;

type Paths5311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5311<K, Paths5311<T[K], Prev5311[D]>> : never }[keyof T]
  : never;

type Prev5311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5311 {
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

type ConfigPaths5311 = Paths5311<NestedConfig5311>;

interface HeavyProps5311 {
  config: DeepPartial5311<NestedConfig5311>;
  path?: ConfigPaths5311;
}

const HeavyComponent5311 = memo(function HeavyComponent5311({ config }: HeavyProps5311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5311.displayName = 'HeavyComponent5311';
export default HeavyComponent5311;
