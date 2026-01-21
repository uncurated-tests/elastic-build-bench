'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3404<T> = T extends (infer U)[]
  ? DeepReadonlyArray3404<U>
  : T extends object
  ? DeepReadonlyObject3404<T>
  : T;

interface DeepReadonlyArray3404<T> extends ReadonlyArray<DeepReadonly3404<T>> {}

type DeepReadonlyObject3404<T> = {
  readonly [P in keyof T]: DeepReadonly3404<T[P]>;
};

type UnionToIntersection3404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3404<T> = UnionToIntersection3404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3404<T extends unknown[], V> = [...T, V];

type TuplifyUnion3404<T, L = LastOf3404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3404<TuplifyUnion3404<Exclude<T, L>>, L>;

type DeepPartial3404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3404<T[P]> }
  : T;

type Paths3404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3404<K, Paths3404<T[K], Prev3404[D]>> : never }[keyof T]
  : never;

type Prev3404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3404 {
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

type ConfigPaths3404 = Paths3404<NestedConfig3404>;

interface HeavyProps3404 {
  config: DeepPartial3404<NestedConfig3404>;
  path?: ConfigPaths3404;
}

const HeavyComponent3404 = memo(function HeavyComponent3404({ config }: HeavyProps3404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3404.displayName = 'HeavyComponent3404';
export default HeavyComponent3404;
