'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1461<T> = T extends (infer U)[]
  ? DeepReadonlyArray1461<U>
  : T extends object
  ? DeepReadonlyObject1461<T>
  : T;

interface DeepReadonlyArray1461<T> extends ReadonlyArray<DeepReadonly1461<T>> {}

type DeepReadonlyObject1461<T> = {
  readonly [P in keyof T]: DeepReadonly1461<T[P]>;
};

type UnionToIntersection1461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1461<T> = UnionToIntersection1461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1461<T extends unknown[], V> = [...T, V];

type TuplifyUnion1461<T, L = LastOf1461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1461<TuplifyUnion1461<Exclude<T, L>>, L>;

type DeepPartial1461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1461<T[P]> }
  : T;

type Paths1461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1461<K, Paths1461<T[K], Prev1461[D]>> : never }[keyof T]
  : never;

type Prev1461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1461 {
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

type ConfigPaths1461 = Paths1461<NestedConfig1461>;

interface HeavyProps1461 {
  config: DeepPartial1461<NestedConfig1461>;
  path?: ConfigPaths1461;
}

const HeavyComponent1461 = memo(function HeavyComponent1461({ config }: HeavyProps1461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1461.displayName = 'HeavyComponent1461';
export default HeavyComponent1461;
