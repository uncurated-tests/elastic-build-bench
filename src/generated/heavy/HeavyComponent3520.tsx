'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3520<T> = T extends (infer U)[]
  ? DeepReadonlyArray3520<U>
  : T extends object
  ? DeepReadonlyObject3520<T>
  : T;

interface DeepReadonlyArray3520<T> extends ReadonlyArray<DeepReadonly3520<T>> {}

type DeepReadonlyObject3520<T> = {
  readonly [P in keyof T]: DeepReadonly3520<T[P]>;
};

type UnionToIntersection3520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3520<T> = UnionToIntersection3520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3520<T extends unknown[], V> = [...T, V];

type TuplifyUnion3520<T, L = LastOf3520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3520<TuplifyUnion3520<Exclude<T, L>>, L>;

type DeepPartial3520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3520<T[P]> }
  : T;

type Paths3520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3520<K, Paths3520<T[K], Prev3520[D]>> : never }[keyof T]
  : never;

type Prev3520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3520 {
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

type ConfigPaths3520 = Paths3520<NestedConfig3520>;

interface HeavyProps3520 {
  config: DeepPartial3520<NestedConfig3520>;
  path?: ConfigPaths3520;
}

const HeavyComponent3520 = memo(function HeavyComponent3520({ config }: HeavyProps3520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3520.displayName = 'HeavyComponent3520';
export default HeavyComponent3520;
