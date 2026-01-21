'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2141<T> = T extends (infer U)[]
  ? DeepReadonlyArray2141<U>
  : T extends object
  ? DeepReadonlyObject2141<T>
  : T;

interface DeepReadonlyArray2141<T> extends ReadonlyArray<DeepReadonly2141<T>> {}

type DeepReadonlyObject2141<T> = {
  readonly [P in keyof T]: DeepReadonly2141<T[P]>;
};

type UnionToIntersection2141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2141<T> = UnionToIntersection2141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2141<T extends unknown[], V> = [...T, V];

type TuplifyUnion2141<T, L = LastOf2141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2141<TuplifyUnion2141<Exclude<T, L>>, L>;

type DeepPartial2141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2141<T[P]> }
  : T;

type Paths2141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2141<K, Paths2141<T[K], Prev2141[D]>> : never }[keyof T]
  : never;

type Prev2141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2141 {
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

type ConfigPaths2141 = Paths2141<NestedConfig2141>;

interface HeavyProps2141 {
  config: DeepPartial2141<NestedConfig2141>;
  path?: ConfigPaths2141;
}

const HeavyComponent2141 = memo(function HeavyComponent2141({ config }: HeavyProps2141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2141.displayName = 'HeavyComponent2141';
export default HeavyComponent2141;
