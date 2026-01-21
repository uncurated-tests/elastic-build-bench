'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1315<T> = T extends (infer U)[]
  ? DeepReadonlyArray1315<U>
  : T extends object
  ? DeepReadonlyObject1315<T>
  : T;

interface DeepReadonlyArray1315<T> extends ReadonlyArray<DeepReadonly1315<T>> {}

type DeepReadonlyObject1315<T> = {
  readonly [P in keyof T]: DeepReadonly1315<T[P]>;
};

type UnionToIntersection1315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1315<T> = UnionToIntersection1315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1315<T extends unknown[], V> = [...T, V];

type TuplifyUnion1315<T, L = LastOf1315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1315<TuplifyUnion1315<Exclude<T, L>>, L>;

type DeepPartial1315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1315<T[P]> }
  : T;

type Paths1315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1315<K, Paths1315<T[K], Prev1315[D]>> : never }[keyof T]
  : never;

type Prev1315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1315 {
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

type ConfigPaths1315 = Paths1315<NestedConfig1315>;

interface HeavyProps1315 {
  config: DeepPartial1315<NestedConfig1315>;
  path?: ConfigPaths1315;
}

const HeavyComponent1315 = memo(function HeavyComponent1315({ config }: HeavyProps1315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1315.displayName = 'HeavyComponent1315';
export default HeavyComponent1315;
