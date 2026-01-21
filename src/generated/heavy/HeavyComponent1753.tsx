'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1753<T> = T extends (infer U)[]
  ? DeepReadonlyArray1753<U>
  : T extends object
  ? DeepReadonlyObject1753<T>
  : T;

interface DeepReadonlyArray1753<T> extends ReadonlyArray<DeepReadonly1753<T>> {}

type DeepReadonlyObject1753<T> = {
  readonly [P in keyof T]: DeepReadonly1753<T[P]>;
};

type UnionToIntersection1753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1753<T> = UnionToIntersection1753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1753<T extends unknown[], V> = [...T, V];

type TuplifyUnion1753<T, L = LastOf1753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1753<TuplifyUnion1753<Exclude<T, L>>, L>;

type DeepPartial1753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1753<T[P]> }
  : T;

type Paths1753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1753<K, Paths1753<T[K], Prev1753[D]>> : never }[keyof T]
  : never;

type Prev1753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1753 {
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

type ConfigPaths1753 = Paths1753<NestedConfig1753>;

interface HeavyProps1753 {
  config: DeepPartial1753<NestedConfig1753>;
  path?: ConfigPaths1753;
}

const HeavyComponent1753 = memo(function HeavyComponent1753({ config }: HeavyProps1753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1753.displayName = 'HeavyComponent1753';
export default HeavyComponent1753;
