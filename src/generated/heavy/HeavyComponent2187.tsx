'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2187<T> = T extends (infer U)[]
  ? DeepReadonlyArray2187<U>
  : T extends object
  ? DeepReadonlyObject2187<T>
  : T;

interface DeepReadonlyArray2187<T> extends ReadonlyArray<DeepReadonly2187<T>> {}

type DeepReadonlyObject2187<T> = {
  readonly [P in keyof T]: DeepReadonly2187<T[P]>;
};

type UnionToIntersection2187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2187<T> = UnionToIntersection2187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2187<T extends unknown[], V> = [...T, V];

type TuplifyUnion2187<T, L = LastOf2187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2187<TuplifyUnion2187<Exclude<T, L>>, L>;

type DeepPartial2187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2187<T[P]> }
  : T;

type Paths2187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2187<K, Paths2187<T[K], Prev2187[D]>> : never }[keyof T]
  : never;

type Prev2187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2187 {
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

type ConfigPaths2187 = Paths2187<NestedConfig2187>;

interface HeavyProps2187 {
  config: DeepPartial2187<NestedConfig2187>;
  path?: ConfigPaths2187;
}

const HeavyComponent2187 = memo(function HeavyComponent2187({ config }: HeavyProps2187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2187.displayName = 'HeavyComponent2187';
export default HeavyComponent2187;
