'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4293<T> = T extends (infer U)[]
  ? DeepReadonlyArray4293<U>
  : T extends object
  ? DeepReadonlyObject4293<T>
  : T;

interface DeepReadonlyArray4293<T> extends ReadonlyArray<DeepReadonly4293<T>> {}

type DeepReadonlyObject4293<T> = {
  readonly [P in keyof T]: DeepReadonly4293<T[P]>;
};

type UnionToIntersection4293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4293<T> = UnionToIntersection4293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4293<T extends unknown[], V> = [...T, V];

type TuplifyUnion4293<T, L = LastOf4293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4293<TuplifyUnion4293<Exclude<T, L>>, L>;

type DeepPartial4293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4293<T[P]> }
  : T;

type Paths4293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4293<K, Paths4293<T[K], Prev4293[D]>> : never }[keyof T]
  : never;

type Prev4293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4293 {
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

type ConfigPaths4293 = Paths4293<NestedConfig4293>;

interface HeavyProps4293 {
  config: DeepPartial4293<NestedConfig4293>;
  path?: ConfigPaths4293;
}

const HeavyComponent4293 = memo(function HeavyComponent4293({ config }: HeavyProps4293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4293.displayName = 'HeavyComponent4293';
export default HeavyComponent4293;
