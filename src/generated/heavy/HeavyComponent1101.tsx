'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1101<T> = T extends (infer U)[]
  ? DeepReadonlyArray1101<U>
  : T extends object
  ? DeepReadonlyObject1101<T>
  : T;

interface DeepReadonlyArray1101<T> extends ReadonlyArray<DeepReadonly1101<T>> {}

type DeepReadonlyObject1101<T> = {
  readonly [P in keyof T]: DeepReadonly1101<T[P]>;
};

type UnionToIntersection1101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1101<T> = UnionToIntersection1101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1101<T extends unknown[], V> = [...T, V];

type TuplifyUnion1101<T, L = LastOf1101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1101<TuplifyUnion1101<Exclude<T, L>>, L>;

type DeepPartial1101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1101<T[P]> }
  : T;

type Paths1101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1101<K, Paths1101<T[K], Prev1101[D]>> : never }[keyof T]
  : never;

type Prev1101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1101 {
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

type ConfigPaths1101 = Paths1101<NestedConfig1101>;

interface HeavyProps1101 {
  config: DeepPartial1101<NestedConfig1101>;
  path?: ConfigPaths1101;
}

const HeavyComponent1101 = memo(function HeavyComponent1101({ config }: HeavyProps1101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1101.displayName = 'HeavyComponent1101';
export default HeavyComponent1101;
