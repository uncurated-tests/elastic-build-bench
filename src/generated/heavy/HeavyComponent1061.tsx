'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1061<T> = T extends (infer U)[]
  ? DeepReadonlyArray1061<U>
  : T extends object
  ? DeepReadonlyObject1061<T>
  : T;

interface DeepReadonlyArray1061<T> extends ReadonlyArray<DeepReadonly1061<T>> {}

type DeepReadonlyObject1061<T> = {
  readonly [P in keyof T]: DeepReadonly1061<T[P]>;
};

type UnionToIntersection1061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1061<T> = UnionToIntersection1061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1061<T extends unknown[], V> = [...T, V];

type TuplifyUnion1061<T, L = LastOf1061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1061<TuplifyUnion1061<Exclude<T, L>>, L>;

type DeepPartial1061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1061<T[P]> }
  : T;

type Paths1061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1061<K, Paths1061<T[K], Prev1061[D]>> : never }[keyof T]
  : never;

type Prev1061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1061 {
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

type ConfigPaths1061 = Paths1061<NestedConfig1061>;

interface HeavyProps1061 {
  config: DeepPartial1061<NestedConfig1061>;
  path?: ConfigPaths1061;
}

const HeavyComponent1061 = memo(function HeavyComponent1061({ config }: HeavyProps1061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1061.displayName = 'HeavyComponent1061';
export default HeavyComponent1061;
