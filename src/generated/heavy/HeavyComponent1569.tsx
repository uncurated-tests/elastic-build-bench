'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1569<T> = T extends (infer U)[]
  ? DeepReadonlyArray1569<U>
  : T extends object
  ? DeepReadonlyObject1569<T>
  : T;

interface DeepReadonlyArray1569<T> extends ReadonlyArray<DeepReadonly1569<T>> {}

type DeepReadonlyObject1569<T> = {
  readonly [P in keyof T]: DeepReadonly1569<T[P]>;
};

type UnionToIntersection1569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1569<T> = UnionToIntersection1569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1569<T extends unknown[], V> = [...T, V];

type TuplifyUnion1569<T, L = LastOf1569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1569<TuplifyUnion1569<Exclude<T, L>>, L>;

type DeepPartial1569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1569<T[P]> }
  : T;

type Paths1569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1569<K, Paths1569<T[K], Prev1569[D]>> : never }[keyof T]
  : never;

type Prev1569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1569 {
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

type ConfigPaths1569 = Paths1569<NestedConfig1569>;

interface HeavyProps1569 {
  config: DeepPartial1569<NestedConfig1569>;
  path?: ConfigPaths1569;
}

const HeavyComponent1569 = memo(function HeavyComponent1569({ config }: HeavyProps1569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1569.displayName = 'HeavyComponent1569';
export default HeavyComponent1569;
