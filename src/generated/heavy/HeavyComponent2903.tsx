'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2903<T> = T extends (infer U)[]
  ? DeepReadonlyArray2903<U>
  : T extends object
  ? DeepReadonlyObject2903<T>
  : T;

interface DeepReadonlyArray2903<T> extends ReadonlyArray<DeepReadonly2903<T>> {}

type DeepReadonlyObject2903<T> = {
  readonly [P in keyof T]: DeepReadonly2903<T[P]>;
};

type UnionToIntersection2903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2903<T> = UnionToIntersection2903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2903<T extends unknown[], V> = [...T, V];

type TuplifyUnion2903<T, L = LastOf2903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2903<TuplifyUnion2903<Exclude<T, L>>, L>;

type DeepPartial2903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2903<T[P]> }
  : T;

type Paths2903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2903<K, Paths2903<T[K], Prev2903[D]>> : never }[keyof T]
  : never;

type Prev2903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2903 {
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

type ConfigPaths2903 = Paths2903<NestedConfig2903>;

interface HeavyProps2903 {
  config: DeepPartial2903<NestedConfig2903>;
  path?: ConfigPaths2903;
}

const HeavyComponent2903 = memo(function HeavyComponent2903({ config }: HeavyProps2903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2903.displayName = 'HeavyComponent2903';
export default HeavyComponent2903;
