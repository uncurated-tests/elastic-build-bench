'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1050<T> = T extends (infer U)[]
  ? DeepReadonlyArray1050<U>
  : T extends object
  ? DeepReadonlyObject1050<T>
  : T;

interface DeepReadonlyArray1050<T> extends ReadonlyArray<DeepReadonly1050<T>> {}

type DeepReadonlyObject1050<T> = {
  readonly [P in keyof T]: DeepReadonly1050<T[P]>;
};

type UnionToIntersection1050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1050<T> = UnionToIntersection1050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1050<T extends unknown[], V> = [...T, V];

type TuplifyUnion1050<T, L = LastOf1050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1050<TuplifyUnion1050<Exclude<T, L>>, L>;

type DeepPartial1050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1050<T[P]> }
  : T;

type Paths1050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1050<K, Paths1050<T[K], Prev1050[D]>> : never }[keyof T]
  : never;

type Prev1050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1050 {
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

type ConfigPaths1050 = Paths1050<NestedConfig1050>;

interface HeavyProps1050 {
  config: DeepPartial1050<NestedConfig1050>;
  path?: ConfigPaths1050;
}

const HeavyComponent1050 = memo(function HeavyComponent1050({ config }: HeavyProps1050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1050.displayName = 'HeavyComponent1050';
export default HeavyComponent1050;
