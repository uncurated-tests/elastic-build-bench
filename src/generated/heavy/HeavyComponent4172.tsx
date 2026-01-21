'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4172<T> = T extends (infer U)[]
  ? DeepReadonlyArray4172<U>
  : T extends object
  ? DeepReadonlyObject4172<T>
  : T;

interface DeepReadonlyArray4172<T> extends ReadonlyArray<DeepReadonly4172<T>> {}

type DeepReadonlyObject4172<T> = {
  readonly [P in keyof T]: DeepReadonly4172<T[P]>;
};

type UnionToIntersection4172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4172<T> = UnionToIntersection4172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4172<T extends unknown[], V> = [...T, V];

type TuplifyUnion4172<T, L = LastOf4172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4172<TuplifyUnion4172<Exclude<T, L>>, L>;

type DeepPartial4172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4172<T[P]> }
  : T;

type Paths4172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4172<K, Paths4172<T[K], Prev4172[D]>> : never }[keyof T]
  : never;

type Prev4172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4172 {
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

type ConfigPaths4172 = Paths4172<NestedConfig4172>;

interface HeavyProps4172 {
  config: DeepPartial4172<NestedConfig4172>;
  path?: ConfigPaths4172;
}

const HeavyComponent4172 = memo(function HeavyComponent4172({ config }: HeavyProps4172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4172.displayName = 'HeavyComponent4172';
export default HeavyComponent4172;
