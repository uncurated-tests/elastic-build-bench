'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1020<T> = T extends (infer U)[]
  ? DeepReadonlyArray1020<U>
  : T extends object
  ? DeepReadonlyObject1020<T>
  : T;

interface DeepReadonlyArray1020<T> extends ReadonlyArray<DeepReadonly1020<T>> {}

type DeepReadonlyObject1020<T> = {
  readonly [P in keyof T]: DeepReadonly1020<T[P]>;
};

type UnionToIntersection1020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1020<T> = UnionToIntersection1020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1020<T extends unknown[], V> = [...T, V];

type TuplifyUnion1020<T, L = LastOf1020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1020<TuplifyUnion1020<Exclude<T, L>>, L>;

type DeepPartial1020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1020<T[P]> }
  : T;

type Paths1020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1020<K, Paths1020<T[K], Prev1020[D]>> : never }[keyof T]
  : never;

type Prev1020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1020 {
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

type ConfigPaths1020 = Paths1020<NestedConfig1020>;

interface HeavyProps1020 {
  config: DeepPartial1020<NestedConfig1020>;
  path?: ConfigPaths1020;
}

const HeavyComponent1020 = memo(function HeavyComponent1020({ config }: HeavyProps1020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1020.displayName = 'HeavyComponent1020';
export default HeavyComponent1020;
