'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2860<T> = T extends (infer U)[]
  ? DeepReadonlyArray2860<U>
  : T extends object
  ? DeepReadonlyObject2860<T>
  : T;

interface DeepReadonlyArray2860<T> extends ReadonlyArray<DeepReadonly2860<T>> {}

type DeepReadonlyObject2860<T> = {
  readonly [P in keyof T]: DeepReadonly2860<T[P]>;
};

type UnionToIntersection2860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2860<T> = UnionToIntersection2860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2860<T extends unknown[], V> = [...T, V];

type TuplifyUnion2860<T, L = LastOf2860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2860<TuplifyUnion2860<Exclude<T, L>>, L>;

type DeepPartial2860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2860<T[P]> }
  : T;

type Paths2860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2860<K, Paths2860<T[K], Prev2860[D]>> : never }[keyof T]
  : never;

type Prev2860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2860 {
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

type ConfigPaths2860 = Paths2860<NestedConfig2860>;

interface HeavyProps2860 {
  config: DeepPartial2860<NestedConfig2860>;
  path?: ConfigPaths2860;
}

const HeavyComponent2860 = memo(function HeavyComponent2860({ config }: HeavyProps2860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2860.displayName = 'HeavyComponent2860';
export default HeavyComponent2860;
