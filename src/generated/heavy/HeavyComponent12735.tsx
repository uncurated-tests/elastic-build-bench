'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12735<T> = T extends (infer U)[]
  ? DeepReadonlyArray12735<U>
  : T extends object
  ? DeepReadonlyObject12735<T>
  : T;

interface DeepReadonlyArray12735<T> extends ReadonlyArray<DeepReadonly12735<T>> {}

type DeepReadonlyObject12735<T> = {
  readonly [P in keyof T]: DeepReadonly12735<T[P]>;
};

type UnionToIntersection12735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12735<T> = UnionToIntersection12735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12735<T extends unknown[], V> = [...T, V];

type TuplifyUnion12735<T, L = LastOf12735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12735<TuplifyUnion12735<Exclude<T, L>>, L>;

type DeepPartial12735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12735<T[P]> }
  : T;

type Paths12735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12735<K, Paths12735<T[K], Prev12735[D]>> : never }[keyof T]
  : never;

type Prev12735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12735 {
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

type ConfigPaths12735 = Paths12735<NestedConfig12735>;

interface HeavyProps12735 {
  config: DeepPartial12735<NestedConfig12735>;
  path?: ConfigPaths12735;
}

const HeavyComponent12735 = memo(function HeavyComponent12735({ config }: HeavyProps12735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12735.displayName = 'HeavyComponent12735';
export default HeavyComponent12735;
