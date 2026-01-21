'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2983<T> = T extends (infer U)[]
  ? DeepReadonlyArray2983<U>
  : T extends object
  ? DeepReadonlyObject2983<T>
  : T;

interface DeepReadonlyArray2983<T> extends ReadonlyArray<DeepReadonly2983<T>> {}

type DeepReadonlyObject2983<T> = {
  readonly [P in keyof T]: DeepReadonly2983<T[P]>;
};

type UnionToIntersection2983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2983<T> = UnionToIntersection2983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2983<T extends unknown[], V> = [...T, V];

type TuplifyUnion2983<T, L = LastOf2983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2983<TuplifyUnion2983<Exclude<T, L>>, L>;

type DeepPartial2983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2983<T[P]> }
  : T;

type Paths2983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2983<K, Paths2983<T[K], Prev2983[D]>> : never }[keyof T]
  : never;

type Prev2983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2983 {
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

type ConfigPaths2983 = Paths2983<NestedConfig2983>;

interface HeavyProps2983 {
  config: DeepPartial2983<NestedConfig2983>;
  path?: ConfigPaths2983;
}

const HeavyComponent2983 = memo(function HeavyComponent2983({ config }: HeavyProps2983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2983.displayName = 'HeavyComponent2983';
export default HeavyComponent2983;
