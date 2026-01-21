'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1525<T> = T extends (infer U)[]
  ? DeepReadonlyArray1525<U>
  : T extends object
  ? DeepReadonlyObject1525<T>
  : T;

interface DeepReadonlyArray1525<T> extends ReadonlyArray<DeepReadonly1525<T>> {}

type DeepReadonlyObject1525<T> = {
  readonly [P in keyof T]: DeepReadonly1525<T[P]>;
};

type UnionToIntersection1525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1525<T> = UnionToIntersection1525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1525<T extends unknown[], V> = [...T, V];

type TuplifyUnion1525<T, L = LastOf1525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1525<TuplifyUnion1525<Exclude<T, L>>, L>;

type DeepPartial1525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1525<T[P]> }
  : T;

type Paths1525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1525<K, Paths1525<T[K], Prev1525[D]>> : never }[keyof T]
  : never;

type Prev1525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1525 {
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

type ConfigPaths1525 = Paths1525<NestedConfig1525>;

interface HeavyProps1525 {
  config: DeepPartial1525<NestedConfig1525>;
  path?: ConfigPaths1525;
}

const HeavyComponent1525 = memo(function HeavyComponent1525({ config }: HeavyProps1525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1525.displayName = 'HeavyComponent1525';
export default HeavyComponent1525;
