'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1208<T> = T extends (infer U)[]
  ? DeepReadonlyArray1208<U>
  : T extends object
  ? DeepReadonlyObject1208<T>
  : T;

interface DeepReadonlyArray1208<T> extends ReadonlyArray<DeepReadonly1208<T>> {}

type DeepReadonlyObject1208<T> = {
  readonly [P in keyof T]: DeepReadonly1208<T[P]>;
};

type UnionToIntersection1208<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1208<T> = UnionToIntersection1208<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1208<T extends unknown[], V> = [...T, V];

type TuplifyUnion1208<T, L = LastOf1208<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1208<TuplifyUnion1208<Exclude<T, L>>, L>;

type DeepPartial1208<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1208<T[P]> }
  : T;

type Paths1208<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1208<K, Paths1208<T[K], Prev1208[D]>> : never }[keyof T]
  : never;

type Prev1208 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1208<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1208 {
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

type ConfigPaths1208 = Paths1208<NestedConfig1208>;

interface HeavyProps1208 {
  config: DeepPartial1208<NestedConfig1208>;
  path?: ConfigPaths1208;
}

const HeavyComponent1208 = memo(function HeavyComponent1208({ config }: HeavyProps1208) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1208) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1208 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1208: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1208.displayName = 'HeavyComponent1208';
export default HeavyComponent1208;
