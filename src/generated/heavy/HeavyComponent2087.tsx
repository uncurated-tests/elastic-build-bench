'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2087<T> = T extends (infer U)[]
  ? DeepReadonlyArray2087<U>
  : T extends object
  ? DeepReadonlyObject2087<T>
  : T;

interface DeepReadonlyArray2087<T> extends ReadonlyArray<DeepReadonly2087<T>> {}

type DeepReadonlyObject2087<T> = {
  readonly [P in keyof T]: DeepReadonly2087<T[P]>;
};

type UnionToIntersection2087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2087<T> = UnionToIntersection2087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2087<T extends unknown[], V> = [...T, V];

type TuplifyUnion2087<T, L = LastOf2087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2087<TuplifyUnion2087<Exclude<T, L>>, L>;

type DeepPartial2087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2087<T[P]> }
  : T;

type Paths2087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2087<K, Paths2087<T[K], Prev2087[D]>> : never }[keyof T]
  : never;

type Prev2087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2087 {
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

type ConfigPaths2087 = Paths2087<NestedConfig2087>;

interface HeavyProps2087 {
  config: DeepPartial2087<NestedConfig2087>;
  path?: ConfigPaths2087;
}

const HeavyComponent2087 = memo(function HeavyComponent2087({ config }: HeavyProps2087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2087.displayName = 'HeavyComponent2087';
export default HeavyComponent2087;
