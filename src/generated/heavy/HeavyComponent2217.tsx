'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2217<T> = T extends (infer U)[]
  ? DeepReadonlyArray2217<U>
  : T extends object
  ? DeepReadonlyObject2217<T>
  : T;

interface DeepReadonlyArray2217<T> extends ReadonlyArray<DeepReadonly2217<T>> {}

type DeepReadonlyObject2217<T> = {
  readonly [P in keyof T]: DeepReadonly2217<T[P]>;
};

type UnionToIntersection2217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2217<T> = UnionToIntersection2217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2217<T extends unknown[], V> = [...T, V];

type TuplifyUnion2217<T, L = LastOf2217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2217<TuplifyUnion2217<Exclude<T, L>>, L>;

type DeepPartial2217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2217<T[P]> }
  : T;

type Paths2217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2217<K, Paths2217<T[K], Prev2217[D]>> : never }[keyof T]
  : never;

type Prev2217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2217 {
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

type ConfigPaths2217 = Paths2217<NestedConfig2217>;

interface HeavyProps2217 {
  config: DeepPartial2217<NestedConfig2217>;
  path?: ConfigPaths2217;
}

const HeavyComponent2217 = memo(function HeavyComponent2217({ config }: HeavyProps2217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2217.displayName = 'HeavyComponent2217';
export default HeavyComponent2217;
