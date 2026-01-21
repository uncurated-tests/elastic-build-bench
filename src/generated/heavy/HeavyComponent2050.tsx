'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2050<T> = T extends (infer U)[]
  ? DeepReadonlyArray2050<U>
  : T extends object
  ? DeepReadonlyObject2050<T>
  : T;

interface DeepReadonlyArray2050<T> extends ReadonlyArray<DeepReadonly2050<T>> {}

type DeepReadonlyObject2050<T> = {
  readonly [P in keyof T]: DeepReadonly2050<T[P]>;
};

type UnionToIntersection2050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2050<T> = UnionToIntersection2050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2050<T extends unknown[], V> = [...T, V];

type TuplifyUnion2050<T, L = LastOf2050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2050<TuplifyUnion2050<Exclude<T, L>>, L>;

type DeepPartial2050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2050<T[P]> }
  : T;

type Paths2050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2050<K, Paths2050<T[K], Prev2050[D]>> : never }[keyof T]
  : never;

type Prev2050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2050 {
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

type ConfigPaths2050 = Paths2050<NestedConfig2050>;

interface HeavyProps2050 {
  config: DeepPartial2050<NestedConfig2050>;
  path?: ConfigPaths2050;
}

const HeavyComponent2050 = memo(function HeavyComponent2050({ config }: HeavyProps2050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2050.displayName = 'HeavyComponent2050';
export default HeavyComponent2050;
