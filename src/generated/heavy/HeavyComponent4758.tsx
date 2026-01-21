'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4758<T> = T extends (infer U)[]
  ? DeepReadonlyArray4758<U>
  : T extends object
  ? DeepReadonlyObject4758<T>
  : T;

interface DeepReadonlyArray4758<T> extends ReadonlyArray<DeepReadonly4758<T>> {}

type DeepReadonlyObject4758<T> = {
  readonly [P in keyof T]: DeepReadonly4758<T[P]>;
};

type UnionToIntersection4758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4758<T> = UnionToIntersection4758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4758<T extends unknown[], V> = [...T, V];

type TuplifyUnion4758<T, L = LastOf4758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4758<TuplifyUnion4758<Exclude<T, L>>, L>;

type DeepPartial4758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4758<T[P]> }
  : T;

type Paths4758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4758<K, Paths4758<T[K], Prev4758[D]>> : never }[keyof T]
  : never;

type Prev4758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4758 {
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

type ConfigPaths4758 = Paths4758<NestedConfig4758>;

interface HeavyProps4758 {
  config: DeepPartial4758<NestedConfig4758>;
  path?: ConfigPaths4758;
}

const HeavyComponent4758 = memo(function HeavyComponent4758({ config }: HeavyProps4758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4758.displayName = 'HeavyComponent4758';
export default HeavyComponent4758;
