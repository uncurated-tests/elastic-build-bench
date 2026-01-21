'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1353<T> = T extends (infer U)[]
  ? DeepReadonlyArray1353<U>
  : T extends object
  ? DeepReadonlyObject1353<T>
  : T;

interface DeepReadonlyArray1353<T> extends ReadonlyArray<DeepReadonly1353<T>> {}

type DeepReadonlyObject1353<T> = {
  readonly [P in keyof T]: DeepReadonly1353<T[P]>;
};

type UnionToIntersection1353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1353<T> = UnionToIntersection1353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1353<T extends unknown[], V> = [...T, V];

type TuplifyUnion1353<T, L = LastOf1353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1353<TuplifyUnion1353<Exclude<T, L>>, L>;

type DeepPartial1353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1353<T[P]> }
  : T;

type Paths1353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1353<K, Paths1353<T[K], Prev1353[D]>> : never }[keyof T]
  : never;

type Prev1353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1353 {
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

type ConfigPaths1353 = Paths1353<NestedConfig1353>;

interface HeavyProps1353 {
  config: DeepPartial1353<NestedConfig1353>;
  path?: ConfigPaths1353;
}

const HeavyComponent1353 = memo(function HeavyComponent1353({ config }: HeavyProps1353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1353.displayName = 'HeavyComponent1353';
export default HeavyComponent1353;
