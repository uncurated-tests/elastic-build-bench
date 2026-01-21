'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3563<T> = T extends (infer U)[]
  ? DeepReadonlyArray3563<U>
  : T extends object
  ? DeepReadonlyObject3563<T>
  : T;

interface DeepReadonlyArray3563<T> extends ReadonlyArray<DeepReadonly3563<T>> {}

type DeepReadonlyObject3563<T> = {
  readonly [P in keyof T]: DeepReadonly3563<T[P]>;
};

type UnionToIntersection3563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3563<T> = UnionToIntersection3563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3563<T extends unknown[], V> = [...T, V];

type TuplifyUnion3563<T, L = LastOf3563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3563<TuplifyUnion3563<Exclude<T, L>>, L>;

type DeepPartial3563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3563<T[P]> }
  : T;

type Paths3563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3563<K, Paths3563<T[K], Prev3563[D]>> : never }[keyof T]
  : never;

type Prev3563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3563 {
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

type ConfigPaths3563 = Paths3563<NestedConfig3563>;

interface HeavyProps3563 {
  config: DeepPartial3563<NestedConfig3563>;
  path?: ConfigPaths3563;
}

const HeavyComponent3563 = memo(function HeavyComponent3563({ config }: HeavyProps3563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3563.displayName = 'HeavyComponent3563';
export default HeavyComponent3563;
