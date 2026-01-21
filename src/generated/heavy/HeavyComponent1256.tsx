'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1256<T> = T extends (infer U)[]
  ? DeepReadonlyArray1256<U>
  : T extends object
  ? DeepReadonlyObject1256<T>
  : T;

interface DeepReadonlyArray1256<T> extends ReadonlyArray<DeepReadonly1256<T>> {}

type DeepReadonlyObject1256<T> = {
  readonly [P in keyof T]: DeepReadonly1256<T[P]>;
};

type UnionToIntersection1256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1256<T> = UnionToIntersection1256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1256<T extends unknown[], V> = [...T, V];

type TuplifyUnion1256<T, L = LastOf1256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1256<TuplifyUnion1256<Exclude<T, L>>, L>;

type DeepPartial1256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1256<T[P]> }
  : T;

type Paths1256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1256<K, Paths1256<T[K], Prev1256[D]>> : never }[keyof T]
  : never;

type Prev1256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1256 {
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

type ConfigPaths1256 = Paths1256<NestedConfig1256>;

interface HeavyProps1256 {
  config: DeepPartial1256<NestedConfig1256>;
  path?: ConfigPaths1256;
}

const HeavyComponent1256 = memo(function HeavyComponent1256({ config }: HeavyProps1256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1256.displayName = 'HeavyComponent1256';
export default HeavyComponent1256;
