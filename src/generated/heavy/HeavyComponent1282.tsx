'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1282<T> = T extends (infer U)[]
  ? DeepReadonlyArray1282<U>
  : T extends object
  ? DeepReadonlyObject1282<T>
  : T;

interface DeepReadonlyArray1282<T> extends ReadonlyArray<DeepReadonly1282<T>> {}

type DeepReadonlyObject1282<T> = {
  readonly [P in keyof T]: DeepReadonly1282<T[P]>;
};

type UnionToIntersection1282<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1282<T> = UnionToIntersection1282<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1282<T extends unknown[], V> = [...T, V];

type TuplifyUnion1282<T, L = LastOf1282<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1282<TuplifyUnion1282<Exclude<T, L>>, L>;

type DeepPartial1282<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1282<T[P]> }
  : T;

type Paths1282<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1282<K, Paths1282<T[K], Prev1282[D]>> : never }[keyof T]
  : never;

type Prev1282 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1282<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1282 {
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

type ConfigPaths1282 = Paths1282<NestedConfig1282>;

interface HeavyProps1282 {
  config: DeepPartial1282<NestedConfig1282>;
  path?: ConfigPaths1282;
}

const HeavyComponent1282 = memo(function HeavyComponent1282({ config }: HeavyProps1282) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1282) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1282 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1282: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1282.displayName = 'HeavyComponent1282';
export default HeavyComponent1282;
