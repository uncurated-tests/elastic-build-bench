'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3713<T> = T extends (infer U)[]
  ? DeepReadonlyArray3713<U>
  : T extends object
  ? DeepReadonlyObject3713<T>
  : T;

interface DeepReadonlyArray3713<T> extends ReadonlyArray<DeepReadonly3713<T>> {}

type DeepReadonlyObject3713<T> = {
  readonly [P in keyof T]: DeepReadonly3713<T[P]>;
};

type UnionToIntersection3713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3713<T> = UnionToIntersection3713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3713<T extends unknown[], V> = [...T, V];

type TuplifyUnion3713<T, L = LastOf3713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3713<TuplifyUnion3713<Exclude<T, L>>, L>;

type DeepPartial3713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3713<T[P]> }
  : T;

type Paths3713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3713<K, Paths3713<T[K], Prev3713[D]>> : never }[keyof T]
  : never;

type Prev3713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3713 {
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

type ConfigPaths3713 = Paths3713<NestedConfig3713>;

interface HeavyProps3713 {
  config: DeepPartial3713<NestedConfig3713>;
  path?: ConfigPaths3713;
}

const HeavyComponent3713 = memo(function HeavyComponent3713({ config }: HeavyProps3713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3713.displayName = 'HeavyComponent3713';
export default HeavyComponent3713;
