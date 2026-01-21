'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2923<T> = T extends (infer U)[]
  ? DeepReadonlyArray2923<U>
  : T extends object
  ? DeepReadonlyObject2923<T>
  : T;

interface DeepReadonlyArray2923<T> extends ReadonlyArray<DeepReadonly2923<T>> {}

type DeepReadonlyObject2923<T> = {
  readonly [P in keyof T]: DeepReadonly2923<T[P]>;
};

type UnionToIntersection2923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2923<T> = UnionToIntersection2923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2923<T extends unknown[], V> = [...T, V];

type TuplifyUnion2923<T, L = LastOf2923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2923<TuplifyUnion2923<Exclude<T, L>>, L>;

type DeepPartial2923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2923<T[P]> }
  : T;

type Paths2923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2923<K, Paths2923<T[K], Prev2923[D]>> : never }[keyof T]
  : never;

type Prev2923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2923 {
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

type ConfigPaths2923 = Paths2923<NestedConfig2923>;

interface HeavyProps2923 {
  config: DeepPartial2923<NestedConfig2923>;
  path?: ConfigPaths2923;
}

const HeavyComponent2923 = memo(function HeavyComponent2923({ config }: HeavyProps2923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2923.displayName = 'HeavyComponent2923';
export default HeavyComponent2923;
