'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1134<T> = T extends (infer U)[]
  ? DeepReadonlyArray1134<U>
  : T extends object
  ? DeepReadonlyObject1134<T>
  : T;

interface DeepReadonlyArray1134<T> extends ReadonlyArray<DeepReadonly1134<T>> {}

type DeepReadonlyObject1134<T> = {
  readonly [P in keyof T]: DeepReadonly1134<T[P]>;
};

type UnionToIntersection1134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1134<T> = UnionToIntersection1134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1134<T extends unknown[], V> = [...T, V];

type TuplifyUnion1134<T, L = LastOf1134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1134<TuplifyUnion1134<Exclude<T, L>>, L>;

type DeepPartial1134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1134<T[P]> }
  : T;

type Paths1134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1134<K, Paths1134<T[K], Prev1134[D]>> : never }[keyof T]
  : never;

type Prev1134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1134 {
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

type ConfigPaths1134 = Paths1134<NestedConfig1134>;

interface HeavyProps1134 {
  config: DeepPartial1134<NestedConfig1134>;
  path?: ConfigPaths1134;
}

const HeavyComponent1134 = memo(function HeavyComponent1134({ config }: HeavyProps1134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1134.displayName = 'HeavyComponent1134';
export default HeavyComponent1134;
