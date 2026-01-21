'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3671<T> = T extends (infer U)[]
  ? DeepReadonlyArray3671<U>
  : T extends object
  ? DeepReadonlyObject3671<T>
  : T;

interface DeepReadonlyArray3671<T> extends ReadonlyArray<DeepReadonly3671<T>> {}

type DeepReadonlyObject3671<T> = {
  readonly [P in keyof T]: DeepReadonly3671<T[P]>;
};

type UnionToIntersection3671<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3671<T> = UnionToIntersection3671<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3671<T extends unknown[], V> = [...T, V];

type TuplifyUnion3671<T, L = LastOf3671<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3671<TuplifyUnion3671<Exclude<T, L>>, L>;

type DeepPartial3671<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3671<T[P]> }
  : T;

type Paths3671<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3671<K, Paths3671<T[K], Prev3671[D]>> : never }[keyof T]
  : never;

type Prev3671 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3671<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3671 {
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

type ConfigPaths3671 = Paths3671<NestedConfig3671>;

interface HeavyProps3671 {
  config: DeepPartial3671<NestedConfig3671>;
  path?: ConfigPaths3671;
}

const HeavyComponent3671 = memo(function HeavyComponent3671({ config }: HeavyProps3671) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3671) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3671 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3671: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3671.displayName = 'HeavyComponent3671';
export default HeavyComponent3671;
