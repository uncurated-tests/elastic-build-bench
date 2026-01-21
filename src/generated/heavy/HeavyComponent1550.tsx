'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1550<T> = T extends (infer U)[]
  ? DeepReadonlyArray1550<U>
  : T extends object
  ? DeepReadonlyObject1550<T>
  : T;

interface DeepReadonlyArray1550<T> extends ReadonlyArray<DeepReadonly1550<T>> {}

type DeepReadonlyObject1550<T> = {
  readonly [P in keyof T]: DeepReadonly1550<T[P]>;
};

type UnionToIntersection1550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1550<T> = UnionToIntersection1550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1550<T extends unknown[], V> = [...T, V];

type TuplifyUnion1550<T, L = LastOf1550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1550<TuplifyUnion1550<Exclude<T, L>>, L>;

type DeepPartial1550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1550<T[P]> }
  : T;

type Paths1550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1550<K, Paths1550<T[K], Prev1550[D]>> : never }[keyof T]
  : never;

type Prev1550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1550 {
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

type ConfigPaths1550 = Paths1550<NestedConfig1550>;

interface HeavyProps1550 {
  config: DeepPartial1550<NestedConfig1550>;
  path?: ConfigPaths1550;
}

const HeavyComponent1550 = memo(function HeavyComponent1550({ config }: HeavyProps1550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1550.displayName = 'HeavyComponent1550';
export default HeavyComponent1550;
