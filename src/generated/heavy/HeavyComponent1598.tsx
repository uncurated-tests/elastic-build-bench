'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1598<T> = T extends (infer U)[]
  ? DeepReadonlyArray1598<U>
  : T extends object
  ? DeepReadonlyObject1598<T>
  : T;

interface DeepReadonlyArray1598<T> extends ReadonlyArray<DeepReadonly1598<T>> {}

type DeepReadonlyObject1598<T> = {
  readonly [P in keyof T]: DeepReadonly1598<T[P]>;
};

type UnionToIntersection1598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1598<T> = UnionToIntersection1598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1598<T extends unknown[], V> = [...T, V];

type TuplifyUnion1598<T, L = LastOf1598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1598<TuplifyUnion1598<Exclude<T, L>>, L>;

type DeepPartial1598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1598<T[P]> }
  : T;

type Paths1598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1598<K, Paths1598<T[K], Prev1598[D]>> : never }[keyof T]
  : never;

type Prev1598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1598 {
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

type ConfigPaths1598 = Paths1598<NestedConfig1598>;

interface HeavyProps1598 {
  config: DeepPartial1598<NestedConfig1598>;
  path?: ConfigPaths1598;
}

const HeavyComponent1598 = memo(function HeavyComponent1598({ config }: HeavyProps1598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1598.displayName = 'HeavyComponent1598';
export default HeavyComponent1598;
