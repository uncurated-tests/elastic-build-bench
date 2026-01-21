'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2663<T> = T extends (infer U)[]
  ? DeepReadonlyArray2663<U>
  : T extends object
  ? DeepReadonlyObject2663<T>
  : T;

interface DeepReadonlyArray2663<T> extends ReadonlyArray<DeepReadonly2663<T>> {}

type DeepReadonlyObject2663<T> = {
  readonly [P in keyof T]: DeepReadonly2663<T[P]>;
};

type UnionToIntersection2663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2663<T> = UnionToIntersection2663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2663<T extends unknown[], V> = [...T, V];

type TuplifyUnion2663<T, L = LastOf2663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2663<TuplifyUnion2663<Exclude<T, L>>, L>;

type DeepPartial2663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2663<T[P]> }
  : T;

type Paths2663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2663<K, Paths2663<T[K], Prev2663[D]>> : never }[keyof T]
  : never;

type Prev2663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2663 {
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

type ConfigPaths2663 = Paths2663<NestedConfig2663>;

interface HeavyProps2663 {
  config: DeepPartial2663<NestedConfig2663>;
  path?: ConfigPaths2663;
}

const HeavyComponent2663 = memo(function HeavyComponent2663({ config }: HeavyProps2663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2663.displayName = 'HeavyComponent2663';
export default HeavyComponent2663;
