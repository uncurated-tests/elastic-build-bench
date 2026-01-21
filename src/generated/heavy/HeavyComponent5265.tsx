'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5265<T> = T extends (infer U)[]
  ? DeepReadonlyArray5265<U>
  : T extends object
  ? DeepReadonlyObject5265<T>
  : T;

interface DeepReadonlyArray5265<T> extends ReadonlyArray<DeepReadonly5265<T>> {}

type DeepReadonlyObject5265<T> = {
  readonly [P in keyof T]: DeepReadonly5265<T[P]>;
};

type UnionToIntersection5265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5265<T> = UnionToIntersection5265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5265<T extends unknown[], V> = [...T, V];

type TuplifyUnion5265<T, L = LastOf5265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5265<TuplifyUnion5265<Exclude<T, L>>, L>;

type DeepPartial5265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5265<T[P]> }
  : T;

type Paths5265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5265<K, Paths5265<T[K], Prev5265[D]>> : never }[keyof T]
  : never;

type Prev5265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5265 {
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

type ConfigPaths5265 = Paths5265<NestedConfig5265>;

interface HeavyProps5265 {
  config: DeepPartial5265<NestedConfig5265>;
  path?: ConfigPaths5265;
}

const HeavyComponent5265 = memo(function HeavyComponent5265({ config }: HeavyProps5265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5265.displayName = 'HeavyComponent5265';
export default HeavyComponent5265;
