'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4428<T> = T extends (infer U)[]
  ? DeepReadonlyArray4428<U>
  : T extends object
  ? DeepReadonlyObject4428<T>
  : T;

interface DeepReadonlyArray4428<T> extends ReadonlyArray<DeepReadonly4428<T>> {}

type DeepReadonlyObject4428<T> = {
  readonly [P in keyof T]: DeepReadonly4428<T[P]>;
};

type UnionToIntersection4428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4428<T> = UnionToIntersection4428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4428<T extends unknown[], V> = [...T, V];

type TuplifyUnion4428<T, L = LastOf4428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4428<TuplifyUnion4428<Exclude<T, L>>, L>;

type DeepPartial4428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4428<T[P]> }
  : T;

type Paths4428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4428<K, Paths4428<T[K], Prev4428[D]>> : never }[keyof T]
  : never;

type Prev4428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4428 {
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

type ConfigPaths4428 = Paths4428<NestedConfig4428>;

interface HeavyProps4428 {
  config: DeepPartial4428<NestedConfig4428>;
  path?: ConfigPaths4428;
}

const HeavyComponent4428 = memo(function HeavyComponent4428({ config }: HeavyProps4428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4428.displayName = 'HeavyComponent4428';
export default HeavyComponent4428;
