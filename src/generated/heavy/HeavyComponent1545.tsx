'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1545<T> = T extends (infer U)[]
  ? DeepReadonlyArray1545<U>
  : T extends object
  ? DeepReadonlyObject1545<T>
  : T;

interface DeepReadonlyArray1545<T> extends ReadonlyArray<DeepReadonly1545<T>> {}

type DeepReadonlyObject1545<T> = {
  readonly [P in keyof T]: DeepReadonly1545<T[P]>;
};

type UnionToIntersection1545<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1545<T> = UnionToIntersection1545<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1545<T extends unknown[], V> = [...T, V];

type TuplifyUnion1545<T, L = LastOf1545<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1545<TuplifyUnion1545<Exclude<T, L>>, L>;

type DeepPartial1545<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1545<T[P]> }
  : T;

type Paths1545<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1545<K, Paths1545<T[K], Prev1545[D]>> : never }[keyof T]
  : never;

type Prev1545 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1545<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1545 {
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

type ConfigPaths1545 = Paths1545<NestedConfig1545>;

interface HeavyProps1545 {
  config: DeepPartial1545<NestedConfig1545>;
  path?: ConfigPaths1545;
}

const HeavyComponent1545 = memo(function HeavyComponent1545({ config }: HeavyProps1545) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1545) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1545 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1545: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1545.displayName = 'HeavyComponent1545';
export default HeavyComponent1545;
