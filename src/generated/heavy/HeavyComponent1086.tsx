'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1086<T> = T extends (infer U)[]
  ? DeepReadonlyArray1086<U>
  : T extends object
  ? DeepReadonlyObject1086<T>
  : T;

interface DeepReadonlyArray1086<T> extends ReadonlyArray<DeepReadonly1086<T>> {}

type DeepReadonlyObject1086<T> = {
  readonly [P in keyof T]: DeepReadonly1086<T[P]>;
};

type UnionToIntersection1086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1086<T> = UnionToIntersection1086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1086<T extends unknown[], V> = [...T, V];

type TuplifyUnion1086<T, L = LastOf1086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1086<TuplifyUnion1086<Exclude<T, L>>, L>;

type DeepPartial1086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1086<T[P]> }
  : T;

type Paths1086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1086<K, Paths1086<T[K], Prev1086[D]>> : never }[keyof T]
  : never;

type Prev1086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1086 {
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

type ConfigPaths1086 = Paths1086<NestedConfig1086>;

interface HeavyProps1086 {
  config: DeepPartial1086<NestedConfig1086>;
  path?: ConfigPaths1086;
}

const HeavyComponent1086 = memo(function HeavyComponent1086({ config }: HeavyProps1086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1086.displayName = 'HeavyComponent1086';
export default HeavyComponent1086;
