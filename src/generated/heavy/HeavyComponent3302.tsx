'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3302<T> = T extends (infer U)[]
  ? DeepReadonlyArray3302<U>
  : T extends object
  ? DeepReadonlyObject3302<T>
  : T;

interface DeepReadonlyArray3302<T> extends ReadonlyArray<DeepReadonly3302<T>> {}

type DeepReadonlyObject3302<T> = {
  readonly [P in keyof T]: DeepReadonly3302<T[P]>;
};

type UnionToIntersection3302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3302<T> = UnionToIntersection3302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3302<T extends unknown[], V> = [...T, V];

type TuplifyUnion3302<T, L = LastOf3302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3302<TuplifyUnion3302<Exclude<T, L>>, L>;

type DeepPartial3302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3302<T[P]> }
  : T;

type Paths3302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3302<K, Paths3302<T[K], Prev3302[D]>> : never }[keyof T]
  : never;

type Prev3302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3302 {
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

type ConfigPaths3302 = Paths3302<NestedConfig3302>;

interface HeavyProps3302 {
  config: DeepPartial3302<NestedConfig3302>;
  path?: ConfigPaths3302;
}

const HeavyComponent3302 = memo(function HeavyComponent3302({ config }: HeavyProps3302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3302.displayName = 'HeavyComponent3302';
export default HeavyComponent3302;
