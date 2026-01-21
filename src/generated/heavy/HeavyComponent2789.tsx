'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2789<T> = T extends (infer U)[]
  ? DeepReadonlyArray2789<U>
  : T extends object
  ? DeepReadonlyObject2789<T>
  : T;

interface DeepReadonlyArray2789<T> extends ReadonlyArray<DeepReadonly2789<T>> {}

type DeepReadonlyObject2789<T> = {
  readonly [P in keyof T]: DeepReadonly2789<T[P]>;
};

type UnionToIntersection2789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2789<T> = UnionToIntersection2789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2789<T extends unknown[], V> = [...T, V];

type TuplifyUnion2789<T, L = LastOf2789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2789<TuplifyUnion2789<Exclude<T, L>>, L>;

type DeepPartial2789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2789<T[P]> }
  : T;

type Paths2789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2789<K, Paths2789<T[K], Prev2789[D]>> : never }[keyof T]
  : never;

type Prev2789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2789 {
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

type ConfigPaths2789 = Paths2789<NestedConfig2789>;

interface HeavyProps2789 {
  config: DeepPartial2789<NestedConfig2789>;
  path?: ConfigPaths2789;
}

const HeavyComponent2789 = memo(function HeavyComponent2789({ config }: HeavyProps2789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2789.displayName = 'HeavyComponent2789';
export default HeavyComponent2789;
