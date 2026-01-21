'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1176<T> = T extends (infer U)[]
  ? DeepReadonlyArray1176<U>
  : T extends object
  ? DeepReadonlyObject1176<T>
  : T;

interface DeepReadonlyArray1176<T> extends ReadonlyArray<DeepReadonly1176<T>> {}

type DeepReadonlyObject1176<T> = {
  readonly [P in keyof T]: DeepReadonly1176<T[P]>;
};

type UnionToIntersection1176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1176<T> = UnionToIntersection1176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1176<T extends unknown[], V> = [...T, V];

type TuplifyUnion1176<T, L = LastOf1176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1176<TuplifyUnion1176<Exclude<T, L>>, L>;

type DeepPartial1176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1176<T[P]> }
  : T;

type Paths1176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1176<K, Paths1176<T[K], Prev1176[D]>> : never }[keyof T]
  : never;

type Prev1176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1176 {
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

type ConfigPaths1176 = Paths1176<NestedConfig1176>;

interface HeavyProps1176 {
  config: DeepPartial1176<NestedConfig1176>;
  path?: ConfigPaths1176;
}

const HeavyComponent1176 = memo(function HeavyComponent1176({ config }: HeavyProps1176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1176.displayName = 'HeavyComponent1176';
export default HeavyComponent1176;
