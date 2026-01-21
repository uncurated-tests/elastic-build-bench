'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1528<T> = T extends (infer U)[]
  ? DeepReadonlyArray1528<U>
  : T extends object
  ? DeepReadonlyObject1528<T>
  : T;

interface DeepReadonlyArray1528<T> extends ReadonlyArray<DeepReadonly1528<T>> {}

type DeepReadonlyObject1528<T> = {
  readonly [P in keyof T]: DeepReadonly1528<T[P]>;
};

type UnionToIntersection1528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1528<T> = UnionToIntersection1528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1528<T extends unknown[], V> = [...T, V];

type TuplifyUnion1528<T, L = LastOf1528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1528<TuplifyUnion1528<Exclude<T, L>>, L>;

type DeepPartial1528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1528<T[P]> }
  : T;

type Paths1528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1528<K, Paths1528<T[K], Prev1528[D]>> : never }[keyof T]
  : never;

type Prev1528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1528 {
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

type ConfigPaths1528 = Paths1528<NestedConfig1528>;

interface HeavyProps1528 {
  config: DeepPartial1528<NestedConfig1528>;
  path?: ConfigPaths1528;
}

const HeavyComponent1528 = memo(function HeavyComponent1528({ config }: HeavyProps1528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1528.displayName = 'HeavyComponent1528';
export default HeavyComponent1528;
