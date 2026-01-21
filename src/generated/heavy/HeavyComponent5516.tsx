'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5516<T> = T extends (infer U)[]
  ? DeepReadonlyArray5516<U>
  : T extends object
  ? DeepReadonlyObject5516<T>
  : T;

interface DeepReadonlyArray5516<T> extends ReadonlyArray<DeepReadonly5516<T>> {}

type DeepReadonlyObject5516<T> = {
  readonly [P in keyof T]: DeepReadonly5516<T[P]>;
};

type UnionToIntersection5516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5516<T> = UnionToIntersection5516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5516<T extends unknown[], V> = [...T, V];

type TuplifyUnion5516<T, L = LastOf5516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5516<TuplifyUnion5516<Exclude<T, L>>, L>;

type DeepPartial5516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5516<T[P]> }
  : T;

type Paths5516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5516<K, Paths5516<T[K], Prev5516[D]>> : never }[keyof T]
  : never;

type Prev5516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5516 {
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

type ConfigPaths5516 = Paths5516<NestedConfig5516>;

interface HeavyProps5516 {
  config: DeepPartial5516<NestedConfig5516>;
  path?: ConfigPaths5516;
}

const HeavyComponent5516 = memo(function HeavyComponent5516({ config }: HeavyProps5516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5516.displayName = 'HeavyComponent5516';
export default HeavyComponent5516;
