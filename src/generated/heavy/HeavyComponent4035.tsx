'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4035<T> = T extends (infer U)[]
  ? DeepReadonlyArray4035<U>
  : T extends object
  ? DeepReadonlyObject4035<T>
  : T;

interface DeepReadonlyArray4035<T> extends ReadonlyArray<DeepReadonly4035<T>> {}

type DeepReadonlyObject4035<T> = {
  readonly [P in keyof T]: DeepReadonly4035<T[P]>;
};

type UnionToIntersection4035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4035<T> = UnionToIntersection4035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4035<T extends unknown[], V> = [...T, V];

type TuplifyUnion4035<T, L = LastOf4035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4035<TuplifyUnion4035<Exclude<T, L>>, L>;

type DeepPartial4035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4035<T[P]> }
  : T;

type Paths4035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4035<K, Paths4035<T[K], Prev4035[D]>> : never }[keyof T]
  : never;

type Prev4035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4035 {
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

type ConfigPaths4035 = Paths4035<NestedConfig4035>;

interface HeavyProps4035 {
  config: DeepPartial4035<NestedConfig4035>;
  path?: ConfigPaths4035;
}

const HeavyComponent4035 = memo(function HeavyComponent4035({ config }: HeavyProps4035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4035.displayName = 'HeavyComponent4035';
export default HeavyComponent4035;
