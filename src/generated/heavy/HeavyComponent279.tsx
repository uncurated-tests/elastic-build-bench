'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly279<T> = T extends (infer U)[]
  ? DeepReadonlyArray279<U>
  : T extends object
  ? DeepReadonlyObject279<T>
  : T;

interface DeepReadonlyArray279<T> extends ReadonlyArray<DeepReadonly279<T>> {}

type DeepReadonlyObject279<T> = {
  readonly [P in keyof T]: DeepReadonly279<T[P]>;
};

type UnionToIntersection279<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf279<T> = UnionToIntersection279<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push279<T extends unknown[], V> = [...T, V];

type TuplifyUnion279<T, L = LastOf279<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push279<TuplifyUnion279<Exclude<T, L>>, L>;

type DeepPartial279<T> = T extends object
  ? { [P in keyof T]?: DeepPartial279<T[P]> }
  : T;

type Paths279<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join279<K, Paths279<T[K], Prev279[D]>> : never }[keyof T]
  : never;

type Prev279 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join279<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig279 {
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

type ConfigPaths279 = Paths279<NestedConfig279>;

interface HeavyProps279 {
  config: DeepPartial279<NestedConfig279>;
  path?: ConfigPaths279;
}

const HeavyComponent279 = memo(function HeavyComponent279({ config }: HeavyProps279) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 279) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-279 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H279: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent279.displayName = 'HeavyComponent279';
export default HeavyComponent279;
