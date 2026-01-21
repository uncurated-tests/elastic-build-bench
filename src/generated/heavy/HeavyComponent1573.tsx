'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1573<T> = T extends (infer U)[]
  ? DeepReadonlyArray1573<U>
  : T extends object
  ? DeepReadonlyObject1573<T>
  : T;

interface DeepReadonlyArray1573<T> extends ReadonlyArray<DeepReadonly1573<T>> {}

type DeepReadonlyObject1573<T> = {
  readonly [P in keyof T]: DeepReadonly1573<T[P]>;
};

type UnionToIntersection1573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1573<T> = UnionToIntersection1573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1573<T extends unknown[], V> = [...T, V];

type TuplifyUnion1573<T, L = LastOf1573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1573<TuplifyUnion1573<Exclude<T, L>>, L>;

type DeepPartial1573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1573<T[P]> }
  : T;

type Paths1573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1573<K, Paths1573<T[K], Prev1573[D]>> : never }[keyof T]
  : never;

type Prev1573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1573 {
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

type ConfigPaths1573 = Paths1573<NestedConfig1573>;

interface HeavyProps1573 {
  config: DeepPartial1573<NestedConfig1573>;
  path?: ConfigPaths1573;
}

const HeavyComponent1573 = memo(function HeavyComponent1573({ config }: HeavyProps1573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1573.displayName = 'HeavyComponent1573';
export default HeavyComponent1573;
