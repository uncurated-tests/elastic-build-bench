'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1284<T> = T extends (infer U)[]
  ? DeepReadonlyArray1284<U>
  : T extends object
  ? DeepReadonlyObject1284<T>
  : T;

interface DeepReadonlyArray1284<T> extends ReadonlyArray<DeepReadonly1284<T>> {}

type DeepReadonlyObject1284<T> = {
  readonly [P in keyof T]: DeepReadonly1284<T[P]>;
};

type UnionToIntersection1284<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1284<T> = UnionToIntersection1284<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1284<T extends unknown[], V> = [...T, V];

type TuplifyUnion1284<T, L = LastOf1284<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1284<TuplifyUnion1284<Exclude<T, L>>, L>;

type DeepPartial1284<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1284<T[P]> }
  : T;

type Paths1284<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1284<K, Paths1284<T[K], Prev1284[D]>> : never }[keyof T]
  : never;

type Prev1284 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1284<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1284 {
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

type ConfigPaths1284 = Paths1284<NestedConfig1284>;

interface HeavyProps1284 {
  config: DeepPartial1284<NestedConfig1284>;
  path?: ConfigPaths1284;
}

const HeavyComponent1284 = memo(function HeavyComponent1284({ config }: HeavyProps1284) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1284) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1284 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1284: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1284.displayName = 'HeavyComponent1284';
export default HeavyComponent1284;
