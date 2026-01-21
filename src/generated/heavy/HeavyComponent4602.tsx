'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4602<T> = T extends (infer U)[]
  ? DeepReadonlyArray4602<U>
  : T extends object
  ? DeepReadonlyObject4602<T>
  : T;

interface DeepReadonlyArray4602<T> extends ReadonlyArray<DeepReadonly4602<T>> {}

type DeepReadonlyObject4602<T> = {
  readonly [P in keyof T]: DeepReadonly4602<T[P]>;
};

type UnionToIntersection4602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4602<T> = UnionToIntersection4602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4602<T extends unknown[], V> = [...T, V];

type TuplifyUnion4602<T, L = LastOf4602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4602<TuplifyUnion4602<Exclude<T, L>>, L>;

type DeepPartial4602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4602<T[P]> }
  : T;

type Paths4602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4602<K, Paths4602<T[K], Prev4602[D]>> : never }[keyof T]
  : never;

type Prev4602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4602 {
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

type ConfigPaths4602 = Paths4602<NestedConfig4602>;

interface HeavyProps4602 {
  config: DeepPartial4602<NestedConfig4602>;
  path?: ConfigPaths4602;
}

const HeavyComponent4602 = memo(function HeavyComponent4602({ config }: HeavyProps4602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4602.displayName = 'HeavyComponent4602';
export default HeavyComponent4602;
