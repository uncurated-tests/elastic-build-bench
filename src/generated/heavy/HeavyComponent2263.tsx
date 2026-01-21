'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2263<T> = T extends (infer U)[]
  ? DeepReadonlyArray2263<U>
  : T extends object
  ? DeepReadonlyObject2263<T>
  : T;

interface DeepReadonlyArray2263<T> extends ReadonlyArray<DeepReadonly2263<T>> {}

type DeepReadonlyObject2263<T> = {
  readonly [P in keyof T]: DeepReadonly2263<T[P]>;
};

type UnionToIntersection2263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2263<T> = UnionToIntersection2263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2263<T extends unknown[], V> = [...T, V];

type TuplifyUnion2263<T, L = LastOf2263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2263<TuplifyUnion2263<Exclude<T, L>>, L>;

type DeepPartial2263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2263<T[P]> }
  : T;

type Paths2263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2263<K, Paths2263<T[K], Prev2263[D]>> : never }[keyof T]
  : never;

type Prev2263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2263 {
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

type ConfigPaths2263 = Paths2263<NestedConfig2263>;

interface HeavyProps2263 {
  config: DeepPartial2263<NestedConfig2263>;
  path?: ConfigPaths2263;
}

const HeavyComponent2263 = memo(function HeavyComponent2263({ config }: HeavyProps2263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2263.displayName = 'HeavyComponent2263';
export default HeavyComponent2263;
