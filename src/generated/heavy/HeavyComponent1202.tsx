'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1202<T> = T extends (infer U)[]
  ? DeepReadonlyArray1202<U>
  : T extends object
  ? DeepReadonlyObject1202<T>
  : T;

interface DeepReadonlyArray1202<T> extends ReadonlyArray<DeepReadonly1202<T>> {}

type DeepReadonlyObject1202<T> = {
  readonly [P in keyof T]: DeepReadonly1202<T[P]>;
};

type UnionToIntersection1202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1202<T> = UnionToIntersection1202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1202<T extends unknown[], V> = [...T, V];

type TuplifyUnion1202<T, L = LastOf1202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1202<TuplifyUnion1202<Exclude<T, L>>, L>;

type DeepPartial1202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1202<T[P]> }
  : T;

type Paths1202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1202<K, Paths1202<T[K], Prev1202[D]>> : never }[keyof T]
  : never;

type Prev1202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1202 {
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

type ConfigPaths1202 = Paths1202<NestedConfig1202>;

interface HeavyProps1202 {
  config: DeepPartial1202<NestedConfig1202>;
  path?: ConfigPaths1202;
}

const HeavyComponent1202 = memo(function HeavyComponent1202({ config }: HeavyProps1202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1202.displayName = 'HeavyComponent1202';
export default HeavyComponent1202;
