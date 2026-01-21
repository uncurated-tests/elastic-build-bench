'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1613<T> = T extends (infer U)[]
  ? DeepReadonlyArray1613<U>
  : T extends object
  ? DeepReadonlyObject1613<T>
  : T;

interface DeepReadonlyArray1613<T> extends ReadonlyArray<DeepReadonly1613<T>> {}

type DeepReadonlyObject1613<T> = {
  readonly [P in keyof T]: DeepReadonly1613<T[P]>;
};

type UnionToIntersection1613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1613<T> = UnionToIntersection1613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1613<T extends unknown[], V> = [...T, V];

type TuplifyUnion1613<T, L = LastOf1613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1613<TuplifyUnion1613<Exclude<T, L>>, L>;

type DeepPartial1613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1613<T[P]> }
  : T;

type Paths1613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1613<K, Paths1613<T[K], Prev1613[D]>> : never }[keyof T]
  : never;

type Prev1613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1613 {
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

type ConfigPaths1613 = Paths1613<NestedConfig1613>;

interface HeavyProps1613 {
  config: DeepPartial1613<NestedConfig1613>;
  path?: ConfigPaths1613;
}

const HeavyComponent1613 = memo(function HeavyComponent1613({ config }: HeavyProps1613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1613.displayName = 'HeavyComponent1613';
export default HeavyComponent1613;
