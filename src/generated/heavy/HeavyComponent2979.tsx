'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2979<T> = T extends (infer U)[]
  ? DeepReadonlyArray2979<U>
  : T extends object
  ? DeepReadonlyObject2979<T>
  : T;

interface DeepReadonlyArray2979<T> extends ReadonlyArray<DeepReadonly2979<T>> {}

type DeepReadonlyObject2979<T> = {
  readonly [P in keyof T]: DeepReadonly2979<T[P]>;
};

type UnionToIntersection2979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2979<T> = UnionToIntersection2979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2979<T extends unknown[], V> = [...T, V];

type TuplifyUnion2979<T, L = LastOf2979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2979<TuplifyUnion2979<Exclude<T, L>>, L>;

type DeepPartial2979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2979<T[P]> }
  : T;

type Paths2979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2979<K, Paths2979<T[K], Prev2979[D]>> : never }[keyof T]
  : never;

type Prev2979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2979 {
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

type ConfigPaths2979 = Paths2979<NestedConfig2979>;

interface HeavyProps2979 {
  config: DeepPartial2979<NestedConfig2979>;
  path?: ConfigPaths2979;
}

const HeavyComponent2979 = memo(function HeavyComponent2979({ config }: HeavyProps2979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2979.displayName = 'HeavyComponent2979';
export default HeavyComponent2979;
