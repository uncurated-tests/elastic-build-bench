'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12391<T> = T extends (infer U)[]
  ? DeepReadonlyArray12391<U>
  : T extends object
  ? DeepReadonlyObject12391<T>
  : T;

interface DeepReadonlyArray12391<T> extends ReadonlyArray<DeepReadonly12391<T>> {}

type DeepReadonlyObject12391<T> = {
  readonly [P in keyof T]: DeepReadonly12391<T[P]>;
};

type UnionToIntersection12391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12391<T> = UnionToIntersection12391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12391<T extends unknown[], V> = [...T, V];

type TuplifyUnion12391<T, L = LastOf12391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12391<TuplifyUnion12391<Exclude<T, L>>, L>;

type DeepPartial12391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12391<T[P]> }
  : T;

type Paths12391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12391<K, Paths12391<T[K], Prev12391[D]>> : never }[keyof T]
  : never;

type Prev12391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12391 {
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

type ConfigPaths12391 = Paths12391<NestedConfig12391>;

interface HeavyProps12391 {
  config: DeepPartial12391<NestedConfig12391>;
  path?: ConfigPaths12391;
}

const HeavyComponent12391 = memo(function HeavyComponent12391({ config }: HeavyProps12391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12391.displayName = 'HeavyComponent12391';
export default HeavyComponent12391;
