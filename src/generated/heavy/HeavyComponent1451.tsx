'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1451<T> = T extends (infer U)[]
  ? DeepReadonlyArray1451<U>
  : T extends object
  ? DeepReadonlyObject1451<T>
  : T;

interface DeepReadonlyArray1451<T> extends ReadonlyArray<DeepReadonly1451<T>> {}

type DeepReadonlyObject1451<T> = {
  readonly [P in keyof T]: DeepReadonly1451<T[P]>;
};

type UnionToIntersection1451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1451<T> = UnionToIntersection1451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1451<T extends unknown[], V> = [...T, V];

type TuplifyUnion1451<T, L = LastOf1451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1451<TuplifyUnion1451<Exclude<T, L>>, L>;

type DeepPartial1451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1451<T[P]> }
  : T;

type Paths1451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1451<K, Paths1451<T[K], Prev1451[D]>> : never }[keyof T]
  : never;

type Prev1451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1451 {
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

type ConfigPaths1451 = Paths1451<NestedConfig1451>;

interface HeavyProps1451 {
  config: DeepPartial1451<NestedConfig1451>;
  path?: ConfigPaths1451;
}

const HeavyComponent1451 = memo(function HeavyComponent1451({ config }: HeavyProps1451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1451.displayName = 'HeavyComponent1451';
export default HeavyComponent1451;
