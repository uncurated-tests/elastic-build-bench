'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1078<T> = T extends (infer U)[]
  ? DeepReadonlyArray1078<U>
  : T extends object
  ? DeepReadonlyObject1078<T>
  : T;

interface DeepReadonlyArray1078<T> extends ReadonlyArray<DeepReadonly1078<T>> {}

type DeepReadonlyObject1078<T> = {
  readonly [P in keyof T]: DeepReadonly1078<T[P]>;
};

type UnionToIntersection1078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1078<T> = UnionToIntersection1078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1078<T extends unknown[], V> = [...T, V];

type TuplifyUnion1078<T, L = LastOf1078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1078<TuplifyUnion1078<Exclude<T, L>>, L>;

type DeepPartial1078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1078<T[P]> }
  : T;

type Paths1078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1078<K, Paths1078<T[K], Prev1078[D]>> : never }[keyof T]
  : never;

type Prev1078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1078 {
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

type ConfigPaths1078 = Paths1078<NestedConfig1078>;

interface HeavyProps1078 {
  config: DeepPartial1078<NestedConfig1078>;
  path?: ConfigPaths1078;
}

const HeavyComponent1078 = memo(function HeavyComponent1078({ config }: HeavyProps1078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1078.displayName = 'HeavyComponent1078';
export default HeavyComponent1078;
