'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1840<T> = T extends (infer U)[]
  ? DeepReadonlyArray1840<U>
  : T extends object
  ? DeepReadonlyObject1840<T>
  : T;

interface DeepReadonlyArray1840<T> extends ReadonlyArray<DeepReadonly1840<T>> {}

type DeepReadonlyObject1840<T> = {
  readonly [P in keyof T]: DeepReadonly1840<T[P]>;
};

type UnionToIntersection1840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1840<T> = UnionToIntersection1840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1840<T extends unknown[], V> = [...T, V];

type TuplifyUnion1840<T, L = LastOf1840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1840<TuplifyUnion1840<Exclude<T, L>>, L>;

type DeepPartial1840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1840<T[P]> }
  : T;

type Paths1840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1840<K, Paths1840<T[K], Prev1840[D]>> : never }[keyof T]
  : never;

type Prev1840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1840 {
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

type ConfigPaths1840 = Paths1840<NestedConfig1840>;

interface HeavyProps1840 {
  config: DeepPartial1840<NestedConfig1840>;
  path?: ConfigPaths1840;
}

const HeavyComponent1840 = memo(function HeavyComponent1840({ config }: HeavyProps1840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1840.displayName = 'HeavyComponent1840';
export default HeavyComponent1840;
