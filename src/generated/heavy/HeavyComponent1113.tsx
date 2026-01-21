'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1113<T> = T extends (infer U)[]
  ? DeepReadonlyArray1113<U>
  : T extends object
  ? DeepReadonlyObject1113<T>
  : T;

interface DeepReadonlyArray1113<T> extends ReadonlyArray<DeepReadonly1113<T>> {}

type DeepReadonlyObject1113<T> = {
  readonly [P in keyof T]: DeepReadonly1113<T[P]>;
};

type UnionToIntersection1113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1113<T> = UnionToIntersection1113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1113<T extends unknown[], V> = [...T, V];

type TuplifyUnion1113<T, L = LastOf1113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1113<TuplifyUnion1113<Exclude<T, L>>, L>;

type DeepPartial1113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1113<T[P]> }
  : T;

type Paths1113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1113<K, Paths1113<T[K], Prev1113[D]>> : never }[keyof T]
  : never;

type Prev1113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1113 {
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

type ConfigPaths1113 = Paths1113<NestedConfig1113>;

interface HeavyProps1113 {
  config: DeepPartial1113<NestedConfig1113>;
  path?: ConfigPaths1113;
}

const HeavyComponent1113 = memo(function HeavyComponent1113({ config }: HeavyProps1113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1113.displayName = 'HeavyComponent1113';
export default HeavyComponent1113;
