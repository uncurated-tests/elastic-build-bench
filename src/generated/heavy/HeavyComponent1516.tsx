'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1516<T> = T extends (infer U)[]
  ? DeepReadonlyArray1516<U>
  : T extends object
  ? DeepReadonlyObject1516<T>
  : T;

interface DeepReadonlyArray1516<T> extends ReadonlyArray<DeepReadonly1516<T>> {}

type DeepReadonlyObject1516<T> = {
  readonly [P in keyof T]: DeepReadonly1516<T[P]>;
};

type UnionToIntersection1516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1516<T> = UnionToIntersection1516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1516<T extends unknown[], V> = [...T, V];

type TuplifyUnion1516<T, L = LastOf1516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1516<TuplifyUnion1516<Exclude<T, L>>, L>;

type DeepPartial1516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1516<T[P]> }
  : T;

type Paths1516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1516<K, Paths1516<T[K], Prev1516[D]>> : never }[keyof T]
  : never;

type Prev1516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1516 {
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

type ConfigPaths1516 = Paths1516<NestedConfig1516>;

interface HeavyProps1516 {
  config: DeepPartial1516<NestedConfig1516>;
  path?: ConfigPaths1516;
}

const HeavyComponent1516 = memo(function HeavyComponent1516({ config }: HeavyProps1516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1516.displayName = 'HeavyComponent1516';
export default HeavyComponent1516;
