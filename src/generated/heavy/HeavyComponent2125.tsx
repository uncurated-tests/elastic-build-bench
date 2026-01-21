'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2125<T> = T extends (infer U)[]
  ? DeepReadonlyArray2125<U>
  : T extends object
  ? DeepReadonlyObject2125<T>
  : T;

interface DeepReadonlyArray2125<T> extends ReadonlyArray<DeepReadonly2125<T>> {}

type DeepReadonlyObject2125<T> = {
  readonly [P in keyof T]: DeepReadonly2125<T[P]>;
};

type UnionToIntersection2125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2125<T> = UnionToIntersection2125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2125<T extends unknown[], V> = [...T, V];

type TuplifyUnion2125<T, L = LastOf2125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2125<TuplifyUnion2125<Exclude<T, L>>, L>;

type DeepPartial2125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2125<T[P]> }
  : T;

type Paths2125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2125<K, Paths2125<T[K], Prev2125[D]>> : never }[keyof T]
  : never;

type Prev2125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2125 {
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

type ConfigPaths2125 = Paths2125<NestedConfig2125>;

interface HeavyProps2125 {
  config: DeepPartial2125<NestedConfig2125>;
  path?: ConfigPaths2125;
}

const HeavyComponent2125 = memo(function HeavyComponent2125({ config }: HeavyProps2125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2125.displayName = 'HeavyComponent2125';
export default HeavyComponent2125;
