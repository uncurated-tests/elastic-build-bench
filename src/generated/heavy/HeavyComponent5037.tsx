'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5037<T> = T extends (infer U)[]
  ? DeepReadonlyArray5037<U>
  : T extends object
  ? DeepReadonlyObject5037<T>
  : T;

interface DeepReadonlyArray5037<T> extends ReadonlyArray<DeepReadonly5037<T>> {}

type DeepReadonlyObject5037<T> = {
  readonly [P in keyof T]: DeepReadonly5037<T[P]>;
};

type UnionToIntersection5037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5037<T> = UnionToIntersection5037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5037<T extends unknown[], V> = [...T, V];

type TuplifyUnion5037<T, L = LastOf5037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5037<TuplifyUnion5037<Exclude<T, L>>, L>;

type DeepPartial5037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5037<T[P]> }
  : T;

type Paths5037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5037<K, Paths5037<T[K], Prev5037[D]>> : never }[keyof T]
  : never;

type Prev5037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5037 {
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

type ConfigPaths5037 = Paths5037<NestedConfig5037>;

interface HeavyProps5037 {
  config: DeepPartial5037<NestedConfig5037>;
  path?: ConfigPaths5037;
}

const HeavyComponent5037 = memo(function HeavyComponent5037({ config }: HeavyProps5037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5037.displayName = 'HeavyComponent5037';
export default HeavyComponent5037;
