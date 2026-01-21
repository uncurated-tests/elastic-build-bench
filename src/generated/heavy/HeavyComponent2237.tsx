'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2237<T> = T extends (infer U)[]
  ? DeepReadonlyArray2237<U>
  : T extends object
  ? DeepReadonlyObject2237<T>
  : T;

interface DeepReadonlyArray2237<T> extends ReadonlyArray<DeepReadonly2237<T>> {}

type DeepReadonlyObject2237<T> = {
  readonly [P in keyof T]: DeepReadonly2237<T[P]>;
};

type UnionToIntersection2237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2237<T> = UnionToIntersection2237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2237<T extends unknown[], V> = [...T, V];

type TuplifyUnion2237<T, L = LastOf2237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2237<TuplifyUnion2237<Exclude<T, L>>, L>;

type DeepPartial2237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2237<T[P]> }
  : T;

type Paths2237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2237<K, Paths2237<T[K], Prev2237[D]>> : never }[keyof T]
  : never;

type Prev2237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2237 {
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

type ConfigPaths2237 = Paths2237<NestedConfig2237>;

interface HeavyProps2237 {
  config: DeepPartial2237<NestedConfig2237>;
  path?: ConfigPaths2237;
}

const HeavyComponent2237 = memo(function HeavyComponent2237({ config }: HeavyProps2237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2237.displayName = 'HeavyComponent2237';
export default HeavyComponent2237;
