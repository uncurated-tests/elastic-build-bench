'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1978<T> = T extends (infer U)[]
  ? DeepReadonlyArray1978<U>
  : T extends object
  ? DeepReadonlyObject1978<T>
  : T;

interface DeepReadonlyArray1978<T> extends ReadonlyArray<DeepReadonly1978<T>> {}

type DeepReadonlyObject1978<T> = {
  readonly [P in keyof T]: DeepReadonly1978<T[P]>;
};

type UnionToIntersection1978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1978<T> = UnionToIntersection1978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1978<T extends unknown[], V> = [...T, V];

type TuplifyUnion1978<T, L = LastOf1978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1978<TuplifyUnion1978<Exclude<T, L>>, L>;

type DeepPartial1978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1978<T[P]> }
  : T;

type Paths1978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1978<K, Paths1978<T[K], Prev1978[D]>> : never }[keyof T]
  : never;

type Prev1978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1978 {
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

type ConfigPaths1978 = Paths1978<NestedConfig1978>;

interface HeavyProps1978 {
  config: DeepPartial1978<NestedConfig1978>;
  path?: ConfigPaths1978;
}

const HeavyComponent1978 = memo(function HeavyComponent1978({ config }: HeavyProps1978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1978.displayName = 'HeavyComponent1978';
export default HeavyComponent1978;
