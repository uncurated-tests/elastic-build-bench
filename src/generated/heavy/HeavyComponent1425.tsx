'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1425<T> = T extends (infer U)[]
  ? DeepReadonlyArray1425<U>
  : T extends object
  ? DeepReadonlyObject1425<T>
  : T;

interface DeepReadonlyArray1425<T> extends ReadonlyArray<DeepReadonly1425<T>> {}

type DeepReadonlyObject1425<T> = {
  readonly [P in keyof T]: DeepReadonly1425<T[P]>;
};

type UnionToIntersection1425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1425<T> = UnionToIntersection1425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1425<T extends unknown[], V> = [...T, V];

type TuplifyUnion1425<T, L = LastOf1425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1425<TuplifyUnion1425<Exclude<T, L>>, L>;

type DeepPartial1425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1425<T[P]> }
  : T;

type Paths1425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1425<K, Paths1425<T[K], Prev1425[D]>> : never }[keyof T]
  : never;

type Prev1425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1425 {
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

type ConfigPaths1425 = Paths1425<NestedConfig1425>;

interface HeavyProps1425 {
  config: DeepPartial1425<NestedConfig1425>;
  path?: ConfigPaths1425;
}

const HeavyComponent1425 = memo(function HeavyComponent1425({ config }: HeavyProps1425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1425.displayName = 'HeavyComponent1425';
export default HeavyComponent1425;
