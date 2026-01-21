'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1773<T> = T extends (infer U)[]
  ? DeepReadonlyArray1773<U>
  : T extends object
  ? DeepReadonlyObject1773<T>
  : T;

interface DeepReadonlyArray1773<T> extends ReadonlyArray<DeepReadonly1773<T>> {}

type DeepReadonlyObject1773<T> = {
  readonly [P in keyof T]: DeepReadonly1773<T[P]>;
};

type UnionToIntersection1773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1773<T> = UnionToIntersection1773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1773<T extends unknown[], V> = [...T, V];

type TuplifyUnion1773<T, L = LastOf1773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1773<TuplifyUnion1773<Exclude<T, L>>, L>;

type DeepPartial1773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1773<T[P]> }
  : T;

type Paths1773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1773<K, Paths1773<T[K], Prev1773[D]>> : never }[keyof T]
  : never;

type Prev1773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1773 {
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

type ConfigPaths1773 = Paths1773<NestedConfig1773>;

interface HeavyProps1773 {
  config: DeepPartial1773<NestedConfig1773>;
  path?: ConfigPaths1773;
}

const HeavyComponent1773 = memo(function HeavyComponent1773({ config }: HeavyProps1773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1773.displayName = 'HeavyComponent1773';
export default HeavyComponent1773;
