'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1443<T> = T extends (infer U)[]
  ? DeepReadonlyArray1443<U>
  : T extends object
  ? DeepReadonlyObject1443<T>
  : T;

interface DeepReadonlyArray1443<T> extends ReadonlyArray<DeepReadonly1443<T>> {}

type DeepReadonlyObject1443<T> = {
  readonly [P in keyof T]: DeepReadonly1443<T[P]>;
};

type UnionToIntersection1443<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1443<T> = UnionToIntersection1443<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1443<T extends unknown[], V> = [...T, V];

type TuplifyUnion1443<T, L = LastOf1443<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1443<TuplifyUnion1443<Exclude<T, L>>, L>;

type DeepPartial1443<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1443<T[P]> }
  : T;

type Paths1443<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1443<K, Paths1443<T[K], Prev1443[D]>> : never }[keyof T]
  : never;

type Prev1443 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1443<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1443 {
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

type ConfigPaths1443 = Paths1443<NestedConfig1443>;

interface HeavyProps1443 {
  config: DeepPartial1443<NestedConfig1443>;
  path?: ConfigPaths1443;
}

const HeavyComponent1443 = memo(function HeavyComponent1443({ config }: HeavyProps1443) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1443) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1443 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1443: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1443.displayName = 'HeavyComponent1443';
export default HeavyComponent1443;
