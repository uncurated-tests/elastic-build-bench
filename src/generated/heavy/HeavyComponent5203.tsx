'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5203<T> = T extends (infer U)[]
  ? DeepReadonlyArray5203<U>
  : T extends object
  ? DeepReadonlyObject5203<T>
  : T;

interface DeepReadonlyArray5203<T> extends ReadonlyArray<DeepReadonly5203<T>> {}

type DeepReadonlyObject5203<T> = {
  readonly [P in keyof T]: DeepReadonly5203<T[P]>;
};

type UnionToIntersection5203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5203<T> = UnionToIntersection5203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5203<T extends unknown[], V> = [...T, V];

type TuplifyUnion5203<T, L = LastOf5203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5203<TuplifyUnion5203<Exclude<T, L>>, L>;

type DeepPartial5203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5203<T[P]> }
  : T;

type Paths5203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5203<K, Paths5203<T[K], Prev5203[D]>> : never }[keyof T]
  : never;

type Prev5203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5203 {
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

type ConfigPaths5203 = Paths5203<NestedConfig5203>;

interface HeavyProps5203 {
  config: DeepPartial5203<NestedConfig5203>;
  path?: ConfigPaths5203;
}

const HeavyComponent5203 = memo(function HeavyComponent5203({ config }: HeavyProps5203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5203.displayName = 'HeavyComponent5203';
export default HeavyComponent5203;
