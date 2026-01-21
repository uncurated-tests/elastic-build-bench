'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1666<T> = T extends (infer U)[]
  ? DeepReadonlyArray1666<U>
  : T extends object
  ? DeepReadonlyObject1666<T>
  : T;

interface DeepReadonlyArray1666<T> extends ReadonlyArray<DeepReadonly1666<T>> {}

type DeepReadonlyObject1666<T> = {
  readonly [P in keyof T]: DeepReadonly1666<T[P]>;
};

type UnionToIntersection1666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1666<T> = UnionToIntersection1666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1666<T extends unknown[], V> = [...T, V];

type TuplifyUnion1666<T, L = LastOf1666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1666<TuplifyUnion1666<Exclude<T, L>>, L>;

type DeepPartial1666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1666<T[P]> }
  : T;

type Paths1666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1666<K, Paths1666<T[K], Prev1666[D]>> : never }[keyof T]
  : never;

type Prev1666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1666 {
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

type ConfigPaths1666 = Paths1666<NestedConfig1666>;

interface HeavyProps1666 {
  config: DeepPartial1666<NestedConfig1666>;
  path?: ConfigPaths1666;
}

const HeavyComponent1666 = memo(function HeavyComponent1666({ config }: HeavyProps1666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1666.displayName = 'HeavyComponent1666';
export default HeavyComponent1666;
