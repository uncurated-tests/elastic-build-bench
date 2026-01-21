'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1566<T> = T extends (infer U)[]
  ? DeepReadonlyArray1566<U>
  : T extends object
  ? DeepReadonlyObject1566<T>
  : T;

interface DeepReadonlyArray1566<T> extends ReadonlyArray<DeepReadonly1566<T>> {}

type DeepReadonlyObject1566<T> = {
  readonly [P in keyof T]: DeepReadonly1566<T[P]>;
};

type UnionToIntersection1566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1566<T> = UnionToIntersection1566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1566<T extends unknown[], V> = [...T, V];

type TuplifyUnion1566<T, L = LastOf1566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1566<TuplifyUnion1566<Exclude<T, L>>, L>;

type DeepPartial1566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1566<T[P]> }
  : T;

type Paths1566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1566<K, Paths1566<T[K], Prev1566[D]>> : never }[keyof T]
  : never;

type Prev1566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1566 {
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

type ConfigPaths1566 = Paths1566<NestedConfig1566>;

interface HeavyProps1566 {
  config: DeepPartial1566<NestedConfig1566>;
  path?: ConfigPaths1566;
}

const HeavyComponent1566 = memo(function HeavyComponent1566({ config }: HeavyProps1566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1566.displayName = 'HeavyComponent1566';
export default HeavyComponent1566;
