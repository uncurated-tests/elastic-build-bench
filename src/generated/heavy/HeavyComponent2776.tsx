'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2776<T> = T extends (infer U)[]
  ? DeepReadonlyArray2776<U>
  : T extends object
  ? DeepReadonlyObject2776<T>
  : T;

interface DeepReadonlyArray2776<T> extends ReadonlyArray<DeepReadonly2776<T>> {}

type DeepReadonlyObject2776<T> = {
  readonly [P in keyof T]: DeepReadonly2776<T[P]>;
};

type UnionToIntersection2776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2776<T> = UnionToIntersection2776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2776<T extends unknown[], V> = [...T, V];

type TuplifyUnion2776<T, L = LastOf2776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2776<TuplifyUnion2776<Exclude<T, L>>, L>;

type DeepPartial2776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2776<T[P]> }
  : T;

type Paths2776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2776<K, Paths2776<T[K], Prev2776[D]>> : never }[keyof T]
  : never;

type Prev2776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2776 {
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

type ConfigPaths2776 = Paths2776<NestedConfig2776>;

interface HeavyProps2776 {
  config: DeepPartial2776<NestedConfig2776>;
  path?: ConfigPaths2776;
}

const HeavyComponent2776 = memo(function HeavyComponent2776({ config }: HeavyProps2776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2776.displayName = 'HeavyComponent2776';
export default HeavyComponent2776;
