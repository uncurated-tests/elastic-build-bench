'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1561<T> = T extends (infer U)[]
  ? DeepReadonlyArray1561<U>
  : T extends object
  ? DeepReadonlyObject1561<T>
  : T;

interface DeepReadonlyArray1561<T> extends ReadonlyArray<DeepReadonly1561<T>> {}

type DeepReadonlyObject1561<T> = {
  readonly [P in keyof T]: DeepReadonly1561<T[P]>;
};

type UnionToIntersection1561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1561<T> = UnionToIntersection1561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1561<T extends unknown[], V> = [...T, V];

type TuplifyUnion1561<T, L = LastOf1561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1561<TuplifyUnion1561<Exclude<T, L>>, L>;

type DeepPartial1561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1561<T[P]> }
  : T;

type Paths1561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1561<K, Paths1561<T[K], Prev1561[D]>> : never }[keyof T]
  : never;

type Prev1561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1561 {
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

type ConfigPaths1561 = Paths1561<NestedConfig1561>;

interface HeavyProps1561 {
  config: DeepPartial1561<NestedConfig1561>;
  path?: ConfigPaths1561;
}

const HeavyComponent1561 = memo(function HeavyComponent1561({ config }: HeavyProps1561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1561.displayName = 'HeavyComponent1561';
export default HeavyComponent1561;
