'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1302<T> = T extends (infer U)[]
  ? DeepReadonlyArray1302<U>
  : T extends object
  ? DeepReadonlyObject1302<T>
  : T;

interface DeepReadonlyArray1302<T> extends ReadonlyArray<DeepReadonly1302<T>> {}

type DeepReadonlyObject1302<T> = {
  readonly [P in keyof T]: DeepReadonly1302<T[P]>;
};

type UnionToIntersection1302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1302<T> = UnionToIntersection1302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1302<T extends unknown[], V> = [...T, V];

type TuplifyUnion1302<T, L = LastOf1302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1302<TuplifyUnion1302<Exclude<T, L>>, L>;

type DeepPartial1302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1302<T[P]> }
  : T;

type Paths1302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1302<K, Paths1302<T[K], Prev1302[D]>> : never }[keyof T]
  : never;

type Prev1302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1302 {
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

type ConfigPaths1302 = Paths1302<NestedConfig1302>;

interface HeavyProps1302 {
  config: DeepPartial1302<NestedConfig1302>;
  path?: ConfigPaths1302;
}

const HeavyComponent1302 = memo(function HeavyComponent1302({ config }: HeavyProps1302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1302.displayName = 'HeavyComponent1302';
export default HeavyComponent1302;
