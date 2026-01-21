'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1242<T> = T extends (infer U)[]
  ? DeepReadonlyArray1242<U>
  : T extends object
  ? DeepReadonlyObject1242<T>
  : T;

interface DeepReadonlyArray1242<T> extends ReadonlyArray<DeepReadonly1242<T>> {}

type DeepReadonlyObject1242<T> = {
  readonly [P in keyof T]: DeepReadonly1242<T[P]>;
};

type UnionToIntersection1242<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1242<T> = UnionToIntersection1242<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1242<T extends unknown[], V> = [...T, V];

type TuplifyUnion1242<T, L = LastOf1242<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1242<TuplifyUnion1242<Exclude<T, L>>, L>;

type DeepPartial1242<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1242<T[P]> }
  : T;

type Paths1242<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1242<K, Paths1242<T[K], Prev1242[D]>> : never }[keyof T]
  : never;

type Prev1242 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1242<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1242 {
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

type ConfigPaths1242 = Paths1242<NestedConfig1242>;

interface HeavyProps1242 {
  config: DeepPartial1242<NestedConfig1242>;
  path?: ConfigPaths1242;
}

const HeavyComponent1242 = memo(function HeavyComponent1242({ config }: HeavyProps1242) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1242) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1242 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1242: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1242.displayName = 'HeavyComponent1242';
export default HeavyComponent1242;
