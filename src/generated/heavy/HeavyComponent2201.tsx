'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2201<T> = T extends (infer U)[]
  ? DeepReadonlyArray2201<U>
  : T extends object
  ? DeepReadonlyObject2201<T>
  : T;

interface DeepReadonlyArray2201<T> extends ReadonlyArray<DeepReadonly2201<T>> {}

type DeepReadonlyObject2201<T> = {
  readonly [P in keyof T]: DeepReadonly2201<T[P]>;
};

type UnionToIntersection2201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2201<T> = UnionToIntersection2201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2201<T extends unknown[], V> = [...T, V];

type TuplifyUnion2201<T, L = LastOf2201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2201<TuplifyUnion2201<Exclude<T, L>>, L>;

type DeepPartial2201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2201<T[P]> }
  : T;

type Paths2201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2201<K, Paths2201<T[K], Prev2201[D]>> : never }[keyof T]
  : never;

type Prev2201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2201 {
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

type ConfigPaths2201 = Paths2201<NestedConfig2201>;

interface HeavyProps2201 {
  config: DeepPartial2201<NestedConfig2201>;
  path?: ConfigPaths2201;
}

const HeavyComponent2201 = memo(function HeavyComponent2201({ config }: HeavyProps2201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2201.displayName = 'HeavyComponent2201';
export default HeavyComponent2201;
