'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1513<T> = T extends (infer U)[]
  ? DeepReadonlyArray1513<U>
  : T extends object
  ? DeepReadonlyObject1513<T>
  : T;

interface DeepReadonlyArray1513<T> extends ReadonlyArray<DeepReadonly1513<T>> {}

type DeepReadonlyObject1513<T> = {
  readonly [P in keyof T]: DeepReadonly1513<T[P]>;
};

type UnionToIntersection1513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1513<T> = UnionToIntersection1513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1513<T extends unknown[], V> = [...T, V];

type TuplifyUnion1513<T, L = LastOf1513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1513<TuplifyUnion1513<Exclude<T, L>>, L>;

type DeepPartial1513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1513<T[P]> }
  : T;

type Paths1513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1513<K, Paths1513<T[K], Prev1513[D]>> : never }[keyof T]
  : never;

type Prev1513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1513 {
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

type ConfigPaths1513 = Paths1513<NestedConfig1513>;

interface HeavyProps1513 {
  config: DeepPartial1513<NestedConfig1513>;
  path?: ConfigPaths1513;
}

const HeavyComponent1513 = memo(function HeavyComponent1513({ config }: HeavyProps1513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1513.displayName = 'HeavyComponent1513';
export default HeavyComponent1513;
