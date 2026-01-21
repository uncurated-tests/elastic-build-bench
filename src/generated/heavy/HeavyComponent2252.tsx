'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2252<T> = T extends (infer U)[]
  ? DeepReadonlyArray2252<U>
  : T extends object
  ? DeepReadonlyObject2252<T>
  : T;

interface DeepReadonlyArray2252<T> extends ReadonlyArray<DeepReadonly2252<T>> {}

type DeepReadonlyObject2252<T> = {
  readonly [P in keyof T]: DeepReadonly2252<T[P]>;
};

type UnionToIntersection2252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2252<T> = UnionToIntersection2252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2252<T extends unknown[], V> = [...T, V];

type TuplifyUnion2252<T, L = LastOf2252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2252<TuplifyUnion2252<Exclude<T, L>>, L>;

type DeepPartial2252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2252<T[P]> }
  : T;

type Paths2252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2252<K, Paths2252<T[K], Prev2252[D]>> : never }[keyof T]
  : never;

type Prev2252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2252 {
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

type ConfigPaths2252 = Paths2252<NestedConfig2252>;

interface HeavyProps2252 {
  config: DeepPartial2252<NestedConfig2252>;
  path?: ConfigPaths2252;
}

const HeavyComponent2252 = memo(function HeavyComponent2252({ config }: HeavyProps2252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2252.displayName = 'HeavyComponent2252';
export default HeavyComponent2252;
