'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1488<T> = T extends (infer U)[]
  ? DeepReadonlyArray1488<U>
  : T extends object
  ? DeepReadonlyObject1488<T>
  : T;

interface DeepReadonlyArray1488<T> extends ReadonlyArray<DeepReadonly1488<T>> {}

type DeepReadonlyObject1488<T> = {
  readonly [P in keyof T]: DeepReadonly1488<T[P]>;
};

type UnionToIntersection1488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1488<T> = UnionToIntersection1488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1488<T extends unknown[], V> = [...T, V];

type TuplifyUnion1488<T, L = LastOf1488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1488<TuplifyUnion1488<Exclude<T, L>>, L>;

type DeepPartial1488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1488<T[P]> }
  : T;

type Paths1488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1488<K, Paths1488<T[K], Prev1488[D]>> : never }[keyof T]
  : never;

type Prev1488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1488 {
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

type ConfigPaths1488 = Paths1488<NestedConfig1488>;

interface HeavyProps1488 {
  config: DeepPartial1488<NestedConfig1488>;
  path?: ConfigPaths1488;
}

const HeavyComponent1488 = memo(function HeavyComponent1488({ config }: HeavyProps1488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1488.displayName = 'HeavyComponent1488';
export default HeavyComponent1488;
