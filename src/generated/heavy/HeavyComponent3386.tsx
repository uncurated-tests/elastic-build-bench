'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3386<T> = T extends (infer U)[]
  ? DeepReadonlyArray3386<U>
  : T extends object
  ? DeepReadonlyObject3386<T>
  : T;

interface DeepReadonlyArray3386<T> extends ReadonlyArray<DeepReadonly3386<T>> {}

type DeepReadonlyObject3386<T> = {
  readonly [P in keyof T]: DeepReadonly3386<T[P]>;
};

type UnionToIntersection3386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3386<T> = UnionToIntersection3386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3386<T extends unknown[], V> = [...T, V];

type TuplifyUnion3386<T, L = LastOf3386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3386<TuplifyUnion3386<Exclude<T, L>>, L>;

type DeepPartial3386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3386<T[P]> }
  : T;

type Paths3386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3386<K, Paths3386<T[K], Prev3386[D]>> : never }[keyof T]
  : never;

type Prev3386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3386 {
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

type ConfigPaths3386 = Paths3386<NestedConfig3386>;

interface HeavyProps3386 {
  config: DeepPartial3386<NestedConfig3386>;
  path?: ConfigPaths3386;
}

const HeavyComponent3386 = memo(function HeavyComponent3386({ config }: HeavyProps3386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3386.displayName = 'HeavyComponent3386';
export default HeavyComponent3386;
