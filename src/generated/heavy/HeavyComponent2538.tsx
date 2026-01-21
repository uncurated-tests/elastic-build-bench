'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2538<T> = T extends (infer U)[]
  ? DeepReadonlyArray2538<U>
  : T extends object
  ? DeepReadonlyObject2538<T>
  : T;

interface DeepReadonlyArray2538<T> extends ReadonlyArray<DeepReadonly2538<T>> {}

type DeepReadonlyObject2538<T> = {
  readonly [P in keyof T]: DeepReadonly2538<T[P]>;
};

type UnionToIntersection2538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2538<T> = UnionToIntersection2538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2538<T extends unknown[], V> = [...T, V];

type TuplifyUnion2538<T, L = LastOf2538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2538<TuplifyUnion2538<Exclude<T, L>>, L>;

type DeepPartial2538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2538<T[P]> }
  : T;

type Paths2538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2538<K, Paths2538<T[K], Prev2538[D]>> : never }[keyof T]
  : never;

type Prev2538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2538 {
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

type ConfigPaths2538 = Paths2538<NestedConfig2538>;

interface HeavyProps2538 {
  config: DeepPartial2538<NestedConfig2538>;
  path?: ConfigPaths2538;
}

const HeavyComponent2538 = memo(function HeavyComponent2538({ config }: HeavyProps2538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2538.displayName = 'HeavyComponent2538';
export default HeavyComponent2538;
