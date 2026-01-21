'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1054<T> = T extends (infer U)[]
  ? DeepReadonlyArray1054<U>
  : T extends object
  ? DeepReadonlyObject1054<T>
  : T;

interface DeepReadonlyArray1054<T> extends ReadonlyArray<DeepReadonly1054<T>> {}

type DeepReadonlyObject1054<T> = {
  readonly [P in keyof T]: DeepReadonly1054<T[P]>;
};

type UnionToIntersection1054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1054<T> = UnionToIntersection1054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1054<T extends unknown[], V> = [...T, V];

type TuplifyUnion1054<T, L = LastOf1054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1054<TuplifyUnion1054<Exclude<T, L>>, L>;

type DeepPartial1054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1054<T[P]> }
  : T;

type Paths1054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1054<K, Paths1054<T[K], Prev1054[D]>> : never }[keyof T]
  : never;

type Prev1054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1054 {
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

type ConfigPaths1054 = Paths1054<NestedConfig1054>;

interface HeavyProps1054 {
  config: DeepPartial1054<NestedConfig1054>;
  path?: ConfigPaths1054;
}

const HeavyComponent1054 = memo(function HeavyComponent1054({ config }: HeavyProps1054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1054.displayName = 'HeavyComponent1054';
export default HeavyComponent1054;
