'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1193<T> = T extends (infer U)[]
  ? DeepReadonlyArray1193<U>
  : T extends object
  ? DeepReadonlyObject1193<T>
  : T;

interface DeepReadonlyArray1193<T> extends ReadonlyArray<DeepReadonly1193<T>> {}

type DeepReadonlyObject1193<T> = {
  readonly [P in keyof T]: DeepReadonly1193<T[P]>;
};

type UnionToIntersection1193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1193<T> = UnionToIntersection1193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1193<T extends unknown[], V> = [...T, V];

type TuplifyUnion1193<T, L = LastOf1193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1193<TuplifyUnion1193<Exclude<T, L>>, L>;

type DeepPartial1193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1193<T[P]> }
  : T;

type Paths1193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1193<K, Paths1193<T[K], Prev1193[D]>> : never }[keyof T]
  : never;

type Prev1193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1193 {
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

type ConfigPaths1193 = Paths1193<NestedConfig1193>;

interface HeavyProps1193 {
  config: DeepPartial1193<NestedConfig1193>;
  path?: ConfigPaths1193;
}

const HeavyComponent1193 = memo(function HeavyComponent1193({ config }: HeavyProps1193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1193.displayName = 'HeavyComponent1193';
export default HeavyComponent1193;
