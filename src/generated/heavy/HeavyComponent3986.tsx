'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3986<T> = T extends (infer U)[]
  ? DeepReadonlyArray3986<U>
  : T extends object
  ? DeepReadonlyObject3986<T>
  : T;

interface DeepReadonlyArray3986<T> extends ReadonlyArray<DeepReadonly3986<T>> {}

type DeepReadonlyObject3986<T> = {
  readonly [P in keyof T]: DeepReadonly3986<T[P]>;
};

type UnionToIntersection3986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3986<T> = UnionToIntersection3986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3986<T extends unknown[], V> = [...T, V];

type TuplifyUnion3986<T, L = LastOf3986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3986<TuplifyUnion3986<Exclude<T, L>>, L>;

type DeepPartial3986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3986<T[P]> }
  : T;

type Paths3986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3986<K, Paths3986<T[K], Prev3986[D]>> : never }[keyof T]
  : never;

type Prev3986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3986 {
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

type ConfigPaths3986 = Paths3986<NestedConfig3986>;

interface HeavyProps3986 {
  config: DeepPartial3986<NestedConfig3986>;
  path?: ConfigPaths3986;
}

const HeavyComponent3986 = memo(function HeavyComponent3986({ config }: HeavyProps3986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3986.displayName = 'HeavyComponent3986';
export default HeavyComponent3986;
