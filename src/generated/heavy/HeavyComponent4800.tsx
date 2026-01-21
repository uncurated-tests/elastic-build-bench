'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4800<T> = T extends (infer U)[]
  ? DeepReadonlyArray4800<U>
  : T extends object
  ? DeepReadonlyObject4800<T>
  : T;

interface DeepReadonlyArray4800<T> extends ReadonlyArray<DeepReadonly4800<T>> {}

type DeepReadonlyObject4800<T> = {
  readonly [P in keyof T]: DeepReadonly4800<T[P]>;
};

type UnionToIntersection4800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4800<T> = UnionToIntersection4800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4800<T extends unknown[], V> = [...T, V];

type TuplifyUnion4800<T, L = LastOf4800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4800<TuplifyUnion4800<Exclude<T, L>>, L>;

type DeepPartial4800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4800<T[P]> }
  : T;

type Paths4800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4800<K, Paths4800<T[K], Prev4800[D]>> : never }[keyof T]
  : never;

type Prev4800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4800 {
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

type ConfigPaths4800 = Paths4800<NestedConfig4800>;

interface HeavyProps4800 {
  config: DeepPartial4800<NestedConfig4800>;
  path?: ConfigPaths4800;
}

const HeavyComponent4800 = memo(function HeavyComponent4800({ config }: HeavyProps4800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4800.displayName = 'HeavyComponent4800';
export default HeavyComponent4800;
