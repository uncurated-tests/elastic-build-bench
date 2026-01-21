'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1962<T> = T extends (infer U)[]
  ? DeepReadonlyArray1962<U>
  : T extends object
  ? DeepReadonlyObject1962<T>
  : T;

interface DeepReadonlyArray1962<T> extends ReadonlyArray<DeepReadonly1962<T>> {}

type DeepReadonlyObject1962<T> = {
  readonly [P in keyof T]: DeepReadonly1962<T[P]>;
};

type UnionToIntersection1962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1962<T> = UnionToIntersection1962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1962<T extends unknown[], V> = [...T, V];

type TuplifyUnion1962<T, L = LastOf1962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1962<TuplifyUnion1962<Exclude<T, L>>, L>;

type DeepPartial1962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1962<T[P]> }
  : T;

type Paths1962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1962<K, Paths1962<T[K], Prev1962[D]>> : never }[keyof T]
  : never;

type Prev1962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1962 {
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

type ConfigPaths1962 = Paths1962<NestedConfig1962>;

interface HeavyProps1962 {
  config: DeepPartial1962<NestedConfig1962>;
  path?: ConfigPaths1962;
}

const HeavyComponent1962 = memo(function HeavyComponent1962({ config }: HeavyProps1962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1962.displayName = 'HeavyComponent1962';
export default HeavyComponent1962;
