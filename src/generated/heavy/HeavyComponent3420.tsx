'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3420<T> = T extends (infer U)[]
  ? DeepReadonlyArray3420<U>
  : T extends object
  ? DeepReadonlyObject3420<T>
  : T;

interface DeepReadonlyArray3420<T> extends ReadonlyArray<DeepReadonly3420<T>> {}

type DeepReadonlyObject3420<T> = {
  readonly [P in keyof T]: DeepReadonly3420<T[P]>;
};

type UnionToIntersection3420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3420<T> = UnionToIntersection3420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3420<T extends unknown[], V> = [...T, V];

type TuplifyUnion3420<T, L = LastOf3420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3420<TuplifyUnion3420<Exclude<T, L>>, L>;

type DeepPartial3420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3420<T[P]> }
  : T;

type Paths3420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3420<K, Paths3420<T[K], Prev3420[D]>> : never }[keyof T]
  : never;

type Prev3420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3420 {
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

type ConfigPaths3420 = Paths3420<NestedConfig3420>;

interface HeavyProps3420 {
  config: DeepPartial3420<NestedConfig3420>;
  path?: ConfigPaths3420;
}

const HeavyComponent3420 = memo(function HeavyComponent3420({ config }: HeavyProps3420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3420.displayName = 'HeavyComponent3420';
export default HeavyComponent3420;
