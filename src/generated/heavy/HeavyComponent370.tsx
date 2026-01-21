'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly370<T> = T extends (infer U)[]
  ? DeepReadonlyArray370<U>
  : T extends object
  ? DeepReadonlyObject370<T>
  : T;

interface DeepReadonlyArray370<T> extends ReadonlyArray<DeepReadonly370<T>> {}

type DeepReadonlyObject370<T> = {
  readonly [P in keyof T]: DeepReadonly370<T[P]>;
};

type UnionToIntersection370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf370<T> = UnionToIntersection370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push370<T extends unknown[], V> = [...T, V];

type TuplifyUnion370<T, L = LastOf370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push370<TuplifyUnion370<Exclude<T, L>>, L>;

type DeepPartial370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial370<T[P]> }
  : T;

type Paths370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join370<K, Paths370<T[K], Prev370[D]>> : never }[keyof T]
  : never;

type Prev370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig370 {
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

type ConfigPaths370 = Paths370<NestedConfig370>;

interface HeavyProps370 {
  config: DeepPartial370<NestedConfig370>;
  path?: ConfigPaths370;
}

const HeavyComponent370 = memo(function HeavyComponent370({ config }: HeavyProps370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent370.displayName = 'HeavyComponent370';
export default HeavyComponent370;
