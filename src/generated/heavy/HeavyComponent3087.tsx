'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3087<T> = T extends (infer U)[]
  ? DeepReadonlyArray3087<U>
  : T extends object
  ? DeepReadonlyObject3087<T>
  : T;

interface DeepReadonlyArray3087<T> extends ReadonlyArray<DeepReadonly3087<T>> {}

type DeepReadonlyObject3087<T> = {
  readonly [P in keyof T]: DeepReadonly3087<T[P]>;
};

type UnionToIntersection3087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3087<T> = UnionToIntersection3087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3087<T extends unknown[], V> = [...T, V];

type TuplifyUnion3087<T, L = LastOf3087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3087<TuplifyUnion3087<Exclude<T, L>>, L>;

type DeepPartial3087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3087<T[P]> }
  : T;

type Paths3087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3087<K, Paths3087<T[K], Prev3087[D]>> : never }[keyof T]
  : never;

type Prev3087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3087 {
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

type ConfigPaths3087 = Paths3087<NestedConfig3087>;

interface HeavyProps3087 {
  config: DeepPartial3087<NestedConfig3087>;
  path?: ConfigPaths3087;
}

const HeavyComponent3087 = memo(function HeavyComponent3087({ config }: HeavyProps3087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3087.displayName = 'HeavyComponent3087';
export default HeavyComponent3087;
