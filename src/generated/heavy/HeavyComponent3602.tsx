'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3602<T> = T extends (infer U)[]
  ? DeepReadonlyArray3602<U>
  : T extends object
  ? DeepReadonlyObject3602<T>
  : T;

interface DeepReadonlyArray3602<T> extends ReadonlyArray<DeepReadonly3602<T>> {}

type DeepReadonlyObject3602<T> = {
  readonly [P in keyof T]: DeepReadonly3602<T[P]>;
};

type UnionToIntersection3602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3602<T> = UnionToIntersection3602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3602<T extends unknown[], V> = [...T, V];

type TuplifyUnion3602<T, L = LastOf3602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3602<TuplifyUnion3602<Exclude<T, L>>, L>;

type DeepPartial3602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3602<T[P]> }
  : T;

type Paths3602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3602<K, Paths3602<T[K], Prev3602[D]>> : never }[keyof T]
  : never;

type Prev3602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3602 {
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

type ConfigPaths3602 = Paths3602<NestedConfig3602>;

interface HeavyProps3602 {
  config: DeepPartial3602<NestedConfig3602>;
  path?: ConfigPaths3602;
}

const HeavyComponent3602 = memo(function HeavyComponent3602({ config }: HeavyProps3602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3602.displayName = 'HeavyComponent3602';
export default HeavyComponent3602;
