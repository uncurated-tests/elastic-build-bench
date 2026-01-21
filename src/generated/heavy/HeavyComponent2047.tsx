'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2047<T> = T extends (infer U)[]
  ? DeepReadonlyArray2047<U>
  : T extends object
  ? DeepReadonlyObject2047<T>
  : T;

interface DeepReadonlyArray2047<T> extends ReadonlyArray<DeepReadonly2047<T>> {}

type DeepReadonlyObject2047<T> = {
  readonly [P in keyof T]: DeepReadonly2047<T[P]>;
};

type UnionToIntersection2047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2047<T> = UnionToIntersection2047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2047<T extends unknown[], V> = [...T, V];

type TuplifyUnion2047<T, L = LastOf2047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2047<TuplifyUnion2047<Exclude<T, L>>, L>;

type DeepPartial2047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2047<T[P]> }
  : T;

type Paths2047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2047<K, Paths2047<T[K], Prev2047[D]>> : never }[keyof T]
  : never;

type Prev2047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2047 {
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

type ConfigPaths2047 = Paths2047<NestedConfig2047>;

interface HeavyProps2047 {
  config: DeepPartial2047<NestedConfig2047>;
  path?: ConfigPaths2047;
}

const HeavyComponent2047 = memo(function HeavyComponent2047({ config }: HeavyProps2047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2047.displayName = 'HeavyComponent2047';
export default HeavyComponent2047;
