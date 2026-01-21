'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4077<T> = T extends (infer U)[]
  ? DeepReadonlyArray4077<U>
  : T extends object
  ? DeepReadonlyObject4077<T>
  : T;

interface DeepReadonlyArray4077<T> extends ReadonlyArray<DeepReadonly4077<T>> {}

type DeepReadonlyObject4077<T> = {
  readonly [P in keyof T]: DeepReadonly4077<T[P]>;
};

type UnionToIntersection4077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4077<T> = UnionToIntersection4077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4077<T extends unknown[], V> = [...T, V];

type TuplifyUnion4077<T, L = LastOf4077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4077<TuplifyUnion4077<Exclude<T, L>>, L>;

type DeepPartial4077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4077<T[P]> }
  : T;

type Paths4077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4077<K, Paths4077<T[K], Prev4077[D]>> : never }[keyof T]
  : never;

type Prev4077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4077 {
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

type ConfigPaths4077 = Paths4077<NestedConfig4077>;

interface HeavyProps4077 {
  config: DeepPartial4077<NestedConfig4077>;
  path?: ConfigPaths4077;
}

const HeavyComponent4077 = memo(function HeavyComponent4077({ config }: HeavyProps4077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4077.displayName = 'HeavyComponent4077';
export default HeavyComponent4077;
