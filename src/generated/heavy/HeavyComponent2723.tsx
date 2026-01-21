'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2723<T> = T extends (infer U)[]
  ? DeepReadonlyArray2723<U>
  : T extends object
  ? DeepReadonlyObject2723<T>
  : T;

interface DeepReadonlyArray2723<T> extends ReadonlyArray<DeepReadonly2723<T>> {}

type DeepReadonlyObject2723<T> = {
  readonly [P in keyof T]: DeepReadonly2723<T[P]>;
};

type UnionToIntersection2723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2723<T> = UnionToIntersection2723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2723<T extends unknown[], V> = [...T, V];

type TuplifyUnion2723<T, L = LastOf2723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2723<TuplifyUnion2723<Exclude<T, L>>, L>;

type DeepPartial2723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2723<T[P]> }
  : T;

type Paths2723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2723<K, Paths2723<T[K], Prev2723[D]>> : never }[keyof T]
  : never;

type Prev2723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2723 {
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

type ConfigPaths2723 = Paths2723<NestedConfig2723>;

interface HeavyProps2723 {
  config: DeepPartial2723<NestedConfig2723>;
  path?: ConfigPaths2723;
}

const HeavyComponent2723 = memo(function HeavyComponent2723({ config }: HeavyProps2723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2723.displayName = 'HeavyComponent2723';
export default HeavyComponent2723;
