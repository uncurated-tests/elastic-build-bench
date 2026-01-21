'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1498<T> = T extends (infer U)[]
  ? DeepReadonlyArray1498<U>
  : T extends object
  ? DeepReadonlyObject1498<T>
  : T;

interface DeepReadonlyArray1498<T> extends ReadonlyArray<DeepReadonly1498<T>> {}

type DeepReadonlyObject1498<T> = {
  readonly [P in keyof T]: DeepReadonly1498<T[P]>;
};

type UnionToIntersection1498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1498<T> = UnionToIntersection1498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1498<T extends unknown[], V> = [...T, V];

type TuplifyUnion1498<T, L = LastOf1498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1498<TuplifyUnion1498<Exclude<T, L>>, L>;

type DeepPartial1498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1498<T[P]> }
  : T;

type Paths1498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1498<K, Paths1498<T[K], Prev1498[D]>> : never }[keyof T]
  : never;

type Prev1498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1498 {
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

type ConfigPaths1498 = Paths1498<NestedConfig1498>;

interface HeavyProps1498 {
  config: DeepPartial1498<NestedConfig1498>;
  path?: ConfigPaths1498;
}

const HeavyComponent1498 = memo(function HeavyComponent1498({ config }: HeavyProps1498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1498.displayName = 'HeavyComponent1498';
export default HeavyComponent1498;
