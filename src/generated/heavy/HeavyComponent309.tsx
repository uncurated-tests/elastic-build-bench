'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly309<T> = T extends (infer U)[]
  ? DeepReadonlyArray309<U>
  : T extends object
  ? DeepReadonlyObject309<T>
  : T;

interface DeepReadonlyArray309<T> extends ReadonlyArray<DeepReadonly309<T>> {}

type DeepReadonlyObject309<T> = {
  readonly [P in keyof T]: DeepReadonly309<T[P]>;
};

type UnionToIntersection309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf309<T> = UnionToIntersection309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push309<T extends unknown[], V> = [...T, V];

type TuplifyUnion309<T, L = LastOf309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push309<TuplifyUnion309<Exclude<T, L>>, L>;

type DeepPartial309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial309<T[P]> }
  : T;

type Paths309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join309<K, Paths309<T[K], Prev309[D]>> : never }[keyof T]
  : never;

type Prev309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig309 {
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

type ConfigPaths309 = Paths309<NestedConfig309>;

interface HeavyProps309 {
  config: DeepPartial309<NestedConfig309>;
  path?: ConfigPaths309;
}

const HeavyComponent309 = memo(function HeavyComponent309({ config }: HeavyProps309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent309.displayName = 'HeavyComponent309';
export default HeavyComponent309;
