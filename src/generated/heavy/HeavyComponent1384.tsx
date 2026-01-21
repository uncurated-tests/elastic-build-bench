'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1384<T> = T extends (infer U)[]
  ? DeepReadonlyArray1384<U>
  : T extends object
  ? DeepReadonlyObject1384<T>
  : T;

interface DeepReadonlyArray1384<T> extends ReadonlyArray<DeepReadonly1384<T>> {}

type DeepReadonlyObject1384<T> = {
  readonly [P in keyof T]: DeepReadonly1384<T[P]>;
};

type UnionToIntersection1384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1384<T> = UnionToIntersection1384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1384<T extends unknown[], V> = [...T, V];

type TuplifyUnion1384<T, L = LastOf1384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1384<TuplifyUnion1384<Exclude<T, L>>, L>;

type DeepPartial1384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1384<T[P]> }
  : T;

type Paths1384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1384<K, Paths1384<T[K], Prev1384[D]>> : never }[keyof T]
  : never;

type Prev1384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1384 {
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

type ConfigPaths1384 = Paths1384<NestedConfig1384>;

interface HeavyProps1384 {
  config: DeepPartial1384<NestedConfig1384>;
  path?: ConfigPaths1384;
}

const HeavyComponent1384 = memo(function HeavyComponent1384({ config }: HeavyProps1384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1384.displayName = 'HeavyComponent1384';
export default HeavyComponent1384;
