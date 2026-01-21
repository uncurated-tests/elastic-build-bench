'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2313<T> = T extends (infer U)[]
  ? DeepReadonlyArray2313<U>
  : T extends object
  ? DeepReadonlyObject2313<T>
  : T;

interface DeepReadonlyArray2313<T> extends ReadonlyArray<DeepReadonly2313<T>> {}

type DeepReadonlyObject2313<T> = {
  readonly [P in keyof T]: DeepReadonly2313<T[P]>;
};

type UnionToIntersection2313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2313<T> = UnionToIntersection2313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2313<T extends unknown[], V> = [...T, V];

type TuplifyUnion2313<T, L = LastOf2313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2313<TuplifyUnion2313<Exclude<T, L>>, L>;

type DeepPartial2313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2313<T[P]> }
  : T;

type Paths2313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2313<K, Paths2313<T[K], Prev2313[D]>> : never }[keyof T]
  : never;

type Prev2313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2313 {
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

type ConfigPaths2313 = Paths2313<NestedConfig2313>;

interface HeavyProps2313 {
  config: DeepPartial2313<NestedConfig2313>;
  path?: ConfigPaths2313;
}

const HeavyComponent2313 = memo(function HeavyComponent2313({ config }: HeavyProps2313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2313.displayName = 'HeavyComponent2313';
export default HeavyComponent2313;
