'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3849<T> = T extends (infer U)[]
  ? DeepReadonlyArray3849<U>
  : T extends object
  ? DeepReadonlyObject3849<T>
  : T;

interface DeepReadonlyArray3849<T> extends ReadonlyArray<DeepReadonly3849<T>> {}

type DeepReadonlyObject3849<T> = {
  readonly [P in keyof T]: DeepReadonly3849<T[P]>;
};

type UnionToIntersection3849<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3849<T> = UnionToIntersection3849<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3849<T extends unknown[], V> = [...T, V];

type TuplifyUnion3849<T, L = LastOf3849<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3849<TuplifyUnion3849<Exclude<T, L>>, L>;

type DeepPartial3849<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3849<T[P]> }
  : T;

type Paths3849<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3849<K, Paths3849<T[K], Prev3849[D]>> : never }[keyof T]
  : never;

type Prev3849 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3849<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3849 {
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

type ConfigPaths3849 = Paths3849<NestedConfig3849>;

interface HeavyProps3849 {
  config: DeepPartial3849<NestedConfig3849>;
  path?: ConfigPaths3849;
}

const HeavyComponent3849 = memo(function HeavyComponent3849({ config }: HeavyProps3849) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3849) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3849 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3849: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3849.displayName = 'HeavyComponent3849';
export default HeavyComponent3849;
