'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1614<T> = T extends (infer U)[]
  ? DeepReadonlyArray1614<U>
  : T extends object
  ? DeepReadonlyObject1614<T>
  : T;

interface DeepReadonlyArray1614<T> extends ReadonlyArray<DeepReadonly1614<T>> {}

type DeepReadonlyObject1614<T> = {
  readonly [P in keyof T]: DeepReadonly1614<T[P]>;
};

type UnionToIntersection1614<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1614<T> = UnionToIntersection1614<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1614<T extends unknown[], V> = [...T, V];

type TuplifyUnion1614<T, L = LastOf1614<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1614<TuplifyUnion1614<Exclude<T, L>>, L>;

type DeepPartial1614<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1614<T[P]> }
  : T;

type Paths1614<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1614<K, Paths1614<T[K], Prev1614[D]>> : never }[keyof T]
  : never;

type Prev1614 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1614<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1614 {
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

type ConfigPaths1614 = Paths1614<NestedConfig1614>;

interface HeavyProps1614 {
  config: DeepPartial1614<NestedConfig1614>;
  path?: ConfigPaths1614;
}

const HeavyComponent1614 = memo(function HeavyComponent1614({ config }: HeavyProps1614) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1614) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1614 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1614: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1614.displayName = 'HeavyComponent1614';
export default HeavyComponent1614;
