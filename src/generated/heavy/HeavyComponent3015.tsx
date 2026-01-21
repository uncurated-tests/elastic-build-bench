'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3015<T> = T extends (infer U)[]
  ? DeepReadonlyArray3015<U>
  : T extends object
  ? DeepReadonlyObject3015<T>
  : T;

interface DeepReadonlyArray3015<T> extends ReadonlyArray<DeepReadonly3015<T>> {}

type DeepReadonlyObject3015<T> = {
  readonly [P in keyof T]: DeepReadonly3015<T[P]>;
};

type UnionToIntersection3015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3015<T> = UnionToIntersection3015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3015<T extends unknown[], V> = [...T, V];

type TuplifyUnion3015<T, L = LastOf3015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3015<TuplifyUnion3015<Exclude<T, L>>, L>;

type DeepPartial3015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3015<T[P]> }
  : T;

type Paths3015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3015<K, Paths3015<T[K], Prev3015[D]>> : never }[keyof T]
  : never;

type Prev3015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3015 {
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

type ConfigPaths3015 = Paths3015<NestedConfig3015>;

interface HeavyProps3015 {
  config: DeepPartial3015<NestedConfig3015>;
  path?: ConfigPaths3015;
}

const HeavyComponent3015 = memo(function HeavyComponent3015({ config }: HeavyProps3015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3015.displayName = 'HeavyComponent3015';
export default HeavyComponent3015;
