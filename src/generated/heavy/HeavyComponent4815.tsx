'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4815<T> = T extends (infer U)[]
  ? DeepReadonlyArray4815<U>
  : T extends object
  ? DeepReadonlyObject4815<T>
  : T;

interface DeepReadonlyArray4815<T> extends ReadonlyArray<DeepReadonly4815<T>> {}

type DeepReadonlyObject4815<T> = {
  readonly [P in keyof T]: DeepReadonly4815<T[P]>;
};

type UnionToIntersection4815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4815<T> = UnionToIntersection4815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4815<T extends unknown[], V> = [...T, V];

type TuplifyUnion4815<T, L = LastOf4815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4815<TuplifyUnion4815<Exclude<T, L>>, L>;

type DeepPartial4815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4815<T[P]> }
  : T;

type Paths4815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4815<K, Paths4815<T[K], Prev4815[D]>> : never }[keyof T]
  : never;

type Prev4815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4815 {
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

type ConfigPaths4815 = Paths4815<NestedConfig4815>;

interface HeavyProps4815 {
  config: DeepPartial4815<NestedConfig4815>;
  path?: ConfigPaths4815;
}

const HeavyComponent4815 = memo(function HeavyComponent4815({ config }: HeavyProps4815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4815.displayName = 'HeavyComponent4815';
export default HeavyComponent4815;
