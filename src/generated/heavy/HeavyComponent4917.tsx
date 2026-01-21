'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4917<T> = T extends (infer U)[]
  ? DeepReadonlyArray4917<U>
  : T extends object
  ? DeepReadonlyObject4917<T>
  : T;

interface DeepReadonlyArray4917<T> extends ReadonlyArray<DeepReadonly4917<T>> {}

type DeepReadonlyObject4917<T> = {
  readonly [P in keyof T]: DeepReadonly4917<T[P]>;
};

type UnionToIntersection4917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4917<T> = UnionToIntersection4917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4917<T extends unknown[], V> = [...T, V];

type TuplifyUnion4917<T, L = LastOf4917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4917<TuplifyUnion4917<Exclude<T, L>>, L>;

type DeepPartial4917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4917<T[P]> }
  : T;

type Paths4917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4917<K, Paths4917<T[K], Prev4917[D]>> : never }[keyof T]
  : never;

type Prev4917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4917 {
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

type ConfigPaths4917 = Paths4917<NestedConfig4917>;

interface HeavyProps4917 {
  config: DeepPartial4917<NestedConfig4917>;
  path?: ConfigPaths4917;
}

const HeavyComponent4917 = memo(function HeavyComponent4917({ config }: HeavyProps4917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4917.displayName = 'HeavyComponent4917';
export default HeavyComponent4917;
