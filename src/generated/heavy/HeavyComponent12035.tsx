'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12035<T> = T extends (infer U)[]
  ? DeepReadonlyArray12035<U>
  : T extends object
  ? DeepReadonlyObject12035<T>
  : T;

interface DeepReadonlyArray12035<T> extends ReadonlyArray<DeepReadonly12035<T>> {}

type DeepReadonlyObject12035<T> = {
  readonly [P in keyof T]: DeepReadonly12035<T[P]>;
};

type UnionToIntersection12035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12035<T> = UnionToIntersection12035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12035<T extends unknown[], V> = [...T, V];

type TuplifyUnion12035<T, L = LastOf12035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12035<TuplifyUnion12035<Exclude<T, L>>, L>;

type DeepPartial12035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12035<T[P]> }
  : T;

type Paths12035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12035<K, Paths12035<T[K], Prev12035[D]>> : never }[keyof T]
  : never;

type Prev12035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12035 {
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

type ConfigPaths12035 = Paths12035<NestedConfig12035>;

interface HeavyProps12035 {
  config: DeepPartial12035<NestedConfig12035>;
  path?: ConfigPaths12035;
}

const HeavyComponent12035 = memo(function HeavyComponent12035({ config }: HeavyProps12035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12035.displayName = 'HeavyComponent12035';
export default HeavyComponent12035;
