'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1389<T> = T extends (infer U)[]
  ? DeepReadonlyArray1389<U>
  : T extends object
  ? DeepReadonlyObject1389<T>
  : T;

interface DeepReadonlyArray1389<T> extends ReadonlyArray<DeepReadonly1389<T>> {}

type DeepReadonlyObject1389<T> = {
  readonly [P in keyof T]: DeepReadonly1389<T[P]>;
};

type UnionToIntersection1389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1389<T> = UnionToIntersection1389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1389<T extends unknown[], V> = [...T, V];

type TuplifyUnion1389<T, L = LastOf1389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1389<TuplifyUnion1389<Exclude<T, L>>, L>;

type DeepPartial1389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1389<T[P]> }
  : T;

type Paths1389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1389<K, Paths1389<T[K], Prev1389[D]>> : never }[keyof T]
  : never;

type Prev1389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1389 {
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

type ConfigPaths1389 = Paths1389<NestedConfig1389>;

interface HeavyProps1389 {
  config: DeepPartial1389<NestedConfig1389>;
  path?: ConfigPaths1389;
}

const HeavyComponent1389 = memo(function HeavyComponent1389({ config }: HeavyProps1389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1389.displayName = 'HeavyComponent1389';
export default HeavyComponent1389;
