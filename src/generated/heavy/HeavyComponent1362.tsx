'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1362<T> = T extends (infer U)[]
  ? DeepReadonlyArray1362<U>
  : T extends object
  ? DeepReadonlyObject1362<T>
  : T;

interface DeepReadonlyArray1362<T> extends ReadonlyArray<DeepReadonly1362<T>> {}

type DeepReadonlyObject1362<T> = {
  readonly [P in keyof T]: DeepReadonly1362<T[P]>;
};

type UnionToIntersection1362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1362<T> = UnionToIntersection1362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1362<T extends unknown[], V> = [...T, V];

type TuplifyUnion1362<T, L = LastOf1362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1362<TuplifyUnion1362<Exclude<T, L>>, L>;

type DeepPartial1362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1362<T[P]> }
  : T;

type Paths1362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1362<K, Paths1362<T[K], Prev1362[D]>> : never }[keyof T]
  : never;

type Prev1362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1362 {
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

type ConfigPaths1362 = Paths1362<NestedConfig1362>;

interface HeavyProps1362 {
  config: DeepPartial1362<NestedConfig1362>;
  path?: ConfigPaths1362;
}

const HeavyComponent1362 = memo(function HeavyComponent1362({ config }: HeavyProps1362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1362.displayName = 'HeavyComponent1362';
export default HeavyComponent1362;
