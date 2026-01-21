'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1408<T> = T extends (infer U)[]
  ? DeepReadonlyArray1408<U>
  : T extends object
  ? DeepReadonlyObject1408<T>
  : T;

interface DeepReadonlyArray1408<T> extends ReadonlyArray<DeepReadonly1408<T>> {}

type DeepReadonlyObject1408<T> = {
  readonly [P in keyof T]: DeepReadonly1408<T[P]>;
};

type UnionToIntersection1408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1408<T> = UnionToIntersection1408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1408<T extends unknown[], V> = [...T, V];

type TuplifyUnion1408<T, L = LastOf1408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1408<TuplifyUnion1408<Exclude<T, L>>, L>;

type DeepPartial1408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1408<T[P]> }
  : T;

type Paths1408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1408<K, Paths1408<T[K], Prev1408[D]>> : never }[keyof T]
  : never;

type Prev1408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1408 {
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

type ConfigPaths1408 = Paths1408<NestedConfig1408>;

interface HeavyProps1408 {
  config: DeepPartial1408<NestedConfig1408>;
  path?: ConfigPaths1408;
}

const HeavyComponent1408 = memo(function HeavyComponent1408({ config }: HeavyProps1408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1408.displayName = 'HeavyComponent1408';
export default HeavyComponent1408;
