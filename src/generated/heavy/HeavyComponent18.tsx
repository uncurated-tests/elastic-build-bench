'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly18<T> = T extends (infer U)[]
  ? DeepReadonlyArray18<U>
  : T extends object
  ? DeepReadonlyObject18<T>
  : T;

interface DeepReadonlyArray18<T> extends ReadonlyArray<DeepReadonly18<T>> {}

type DeepReadonlyObject18<T> = {
  readonly [P in keyof T]: DeepReadonly18<T[P]>;
};

type UnionToIntersection18<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf18<T> = UnionToIntersection18<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push18<T extends unknown[], V> = [...T, V];

type TuplifyUnion18<T, L = LastOf18<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push18<TuplifyUnion18<Exclude<T, L>>, L>;

type DeepPartial18<T> = T extends object
  ? { [P in keyof T]?: DeepPartial18<T[P]> }
  : T;

type Paths18<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join18<K, Paths18<T[K], Prev18[D]>> : never }[keyof T]
  : never;

type Prev18 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join18<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig18 {
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

type ConfigPaths18 = Paths18<NestedConfig18>;

interface HeavyProps18 {
  config: DeepPartial18<NestedConfig18>;
  path?: ConfigPaths18;
}

const HeavyComponent18 = memo(function HeavyComponent18({ config }: HeavyProps18) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 18) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-18 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H18: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent18.displayName = 'HeavyComponent18';
export default HeavyComponent18;
