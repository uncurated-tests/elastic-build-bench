'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2696<T> = T extends (infer U)[]
  ? DeepReadonlyArray2696<U>
  : T extends object
  ? DeepReadonlyObject2696<T>
  : T;

interface DeepReadonlyArray2696<T> extends ReadonlyArray<DeepReadonly2696<T>> {}

type DeepReadonlyObject2696<T> = {
  readonly [P in keyof T]: DeepReadonly2696<T[P]>;
};

type UnionToIntersection2696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2696<T> = UnionToIntersection2696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2696<T extends unknown[], V> = [...T, V];

type TuplifyUnion2696<T, L = LastOf2696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2696<TuplifyUnion2696<Exclude<T, L>>, L>;

type DeepPartial2696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2696<T[P]> }
  : T;

type Paths2696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2696<K, Paths2696<T[K], Prev2696[D]>> : never }[keyof T]
  : never;

type Prev2696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2696 {
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

type ConfigPaths2696 = Paths2696<NestedConfig2696>;

interface HeavyProps2696 {
  config: DeepPartial2696<NestedConfig2696>;
  path?: ConfigPaths2696;
}

const HeavyComponent2696 = memo(function HeavyComponent2696({ config }: HeavyProps2696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2696.displayName = 'HeavyComponent2696';
export default HeavyComponent2696;
