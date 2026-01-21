'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2936<T> = T extends (infer U)[]
  ? DeepReadonlyArray2936<U>
  : T extends object
  ? DeepReadonlyObject2936<T>
  : T;

interface DeepReadonlyArray2936<T> extends ReadonlyArray<DeepReadonly2936<T>> {}

type DeepReadonlyObject2936<T> = {
  readonly [P in keyof T]: DeepReadonly2936<T[P]>;
};

type UnionToIntersection2936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2936<T> = UnionToIntersection2936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2936<T extends unknown[], V> = [...T, V];

type TuplifyUnion2936<T, L = LastOf2936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2936<TuplifyUnion2936<Exclude<T, L>>, L>;

type DeepPartial2936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2936<T[P]> }
  : T;

type Paths2936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2936<K, Paths2936<T[K], Prev2936[D]>> : never }[keyof T]
  : never;

type Prev2936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2936 {
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

type ConfigPaths2936 = Paths2936<NestedConfig2936>;

interface HeavyProps2936 {
  config: DeepPartial2936<NestedConfig2936>;
  path?: ConfigPaths2936;
}

const HeavyComponent2936 = memo(function HeavyComponent2936({ config }: HeavyProps2936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2936.displayName = 'HeavyComponent2936';
export default HeavyComponent2936;
