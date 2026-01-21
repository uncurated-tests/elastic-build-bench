'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1321<T> = T extends (infer U)[]
  ? DeepReadonlyArray1321<U>
  : T extends object
  ? DeepReadonlyObject1321<T>
  : T;

interface DeepReadonlyArray1321<T> extends ReadonlyArray<DeepReadonly1321<T>> {}

type DeepReadonlyObject1321<T> = {
  readonly [P in keyof T]: DeepReadonly1321<T[P]>;
};

type UnionToIntersection1321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1321<T> = UnionToIntersection1321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1321<T extends unknown[], V> = [...T, V];

type TuplifyUnion1321<T, L = LastOf1321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1321<TuplifyUnion1321<Exclude<T, L>>, L>;

type DeepPartial1321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1321<T[P]> }
  : T;

type Paths1321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1321<K, Paths1321<T[K], Prev1321[D]>> : never }[keyof T]
  : never;

type Prev1321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1321 {
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

type ConfigPaths1321 = Paths1321<NestedConfig1321>;

interface HeavyProps1321 {
  config: DeepPartial1321<NestedConfig1321>;
  path?: ConfigPaths1321;
}

const HeavyComponent1321 = memo(function HeavyComponent1321({ config }: HeavyProps1321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1321.displayName = 'HeavyComponent1321';
export default HeavyComponent1321;
