'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1625<T> = T extends (infer U)[]
  ? DeepReadonlyArray1625<U>
  : T extends object
  ? DeepReadonlyObject1625<T>
  : T;

interface DeepReadonlyArray1625<T> extends ReadonlyArray<DeepReadonly1625<T>> {}

type DeepReadonlyObject1625<T> = {
  readonly [P in keyof T]: DeepReadonly1625<T[P]>;
};

type UnionToIntersection1625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1625<T> = UnionToIntersection1625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1625<T extends unknown[], V> = [...T, V];

type TuplifyUnion1625<T, L = LastOf1625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1625<TuplifyUnion1625<Exclude<T, L>>, L>;

type DeepPartial1625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1625<T[P]> }
  : T;

type Paths1625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1625<K, Paths1625<T[K], Prev1625[D]>> : never }[keyof T]
  : never;

type Prev1625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1625 {
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

type ConfigPaths1625 = Paths1625<NestedConfig1625>;

interface HeavyProps1625 {
  config: DeepPartial1625<NestedConfig1625>;
  path?: ConfigPaths1625;
}

const HeavyComponent1625 = memo(function HeavyComponent1625({ config }: HeavyProps1625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1625.displayName = 'HeavyComponent1625';
export default HeavyComponent1625;
