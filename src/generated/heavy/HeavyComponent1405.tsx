'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1405<T> = T extends (infer U)[]
  ? DeepReadonlyArray1405<U>
  : T extends object
  ? DeepReadonlyObject1405<T>
  : T;

interface DeepReadonlyArray1405<T> extends ReadonlyArray<DeepReadonly1405<T>> {}

type DeepReadonlyObject1405<T> = {
  readonly [P in keyof T]: DeepReadonly1405<T[P]>;
};

type UnionToIntersection1405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1405<T> = UnionToIntersection1405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1405<T extends unknown[], V> = [...T, V];

type TuplifyUnion1405<T, L = LastOf1405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1405<TuplifyUnion1405<Exclude<T, L>>, L>;

type DeepPartial1405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1405<T[P]> }
  : T;

type Paths1405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1405<K, Paths1405<T[K], Prev1405[D]>> : never }[keyof T]
  : never;

type Prev1405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1405 {
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

type ConfigPaths1405 = Paths1405<NestedConfig1405>;

interface HeavyProps1405 {
  config: DeepPartial1405<NestedConfig1405>;
  path?: ConfigPaths1405;
}

const HeavyComponent1405 = memo(function HeavyComponent1405({ config }: HeavyProps1405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1405.displayName = 'HeavyComponent1405';
export default HeavyComponent1405;
