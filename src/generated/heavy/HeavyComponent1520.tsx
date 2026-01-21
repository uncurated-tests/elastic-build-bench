'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1520<T> = T extends (infer U)[]
  ? DeepReadonlyArray1520<U>
  : T extends object
  ? DeepReadonlyObject1520<T>
  : T;

interface DeepReadonlyArray1520<T> extends ReadonlyArray<DeepReadonly1520<T>> {}

type DeepReadonlyObject1520<T> = {
  readonly [P in keyof T]: DeepReadonly1520<T[P]>;
};

type UnionToIntersection1520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1520<T> = UnionToIntersection1520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1520<T extends unknown[], V> = [...T, V];

type TuplifyUnion1520<T, L = LastOf1520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1520<TuplifyUnion1520<Exclude<T, L>>, L>;

type DeepPartial1520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1520<T[P]> }
  : T;

type Paths1520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1520<K, Paths1520<T[K], Prev1520[D]>> : never }[keyof T]
  : never;

type Prev1520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1520 {
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

type ConfigPaths1520 = Paths1520<NestedConfig1520>;

interface HeavyProps1520 {
  config: DeepPartial1520<NestedConfig1520>;
  path?: ConfigPaths1520;
}

const HeavyComponent1520 = memo(function HeavyComponent1520({ config }: HeavyProps1520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1520.displayName = 'HeavyComponent1520';
export default HeavyComponent1520;
