'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2477<T> = T extends (infer U)[]
  ? DeepReadonlyArray2477<U>
  : T extends object
  ? DeepReadonlyObject2477<T>
  : T;

interface DeepReadonlyArray2477<T> extends ReadonlyArray<DeepReadonly2477<T>> {}

type DeepReadonlyObject2477<T> = {
  readonly [P in keyof T]: DeepReadonly2477<T[P]>;
};

type UnionToIntersection2477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2477<T> = UnionToIntersection2477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2477<T extends unknown[], V> = [...T, V];

type TuplifyUnion2477<T, L = LastOf2477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2477<TuplifyUnion2477<Exclude<T, L>>, L>;

type DeepPartial2477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2477<T[P]> }
  : T;

type Paths2477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2477<K, Paths2477<T[K], Prev2477[D]>> : never }[keyof T]
  : never;

type Prev2477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2477 {
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

type ConfigPaths2477 = Paths2477<NestedConfig2477>;

interface HeavyProps2477 {
  config: DeepPartial2477<NestedConfig2477>;
  path?: ConfigPaths2477;
}

const HeavyComponent2477 = memo(function HeavyComponent2477({ config }: HeavyProps2477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2477.displayName = 'HeavyComponent2477';
export default HeavyComponent2477;
