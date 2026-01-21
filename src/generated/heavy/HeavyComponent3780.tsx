'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3780<T> = T extends (infer U)[]
  ? DeepReadonlyArray3780<U>
  : T extends object
  ? DeepReadonlyObject3780<T>
  : T;

interface DeepReadonlyArray3780<T> extends ReadonlyArray<DeepReadonly3780<T>> {}

type DeepReadonlyObject3780<T> = {
  readonly [P in keyof T]: DeepReadonly3780<T[P]>;
};

type UnionToIntersection3780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3780<T> = UnionToIntersection3780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3780<T extends unknown[], V> = [...T, V];

type TuplifyUnion3780<T, L = LastOf3780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3780<TuplifyUnion3780<Exclude<T, L>>, L>;

type DeepPartial3780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3780<T[P]> }
  : T;

type Paths3780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3780<K, Paths3780<T[K], Prev3780[D]>> : never }[keyof T]
  : never;

type Prev3780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3780 {
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

type ConfigPaths3780 = Paths3780<NestedConfig3780>;

interface HeavyProps3780 {
  config: DeepPartial3780<NestedConfig3780>;
  path?: ConfigPaths3780;
}

const HeavyComponent3780 = memo(function HeavyComponent3780({ config }: HeavyProps3780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3780.displayName = 'HeavyComponent3780';
export default HeavyComponent3780;
