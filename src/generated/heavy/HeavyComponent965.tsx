'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly965<T> = T extends (infer U)[]
  ? DeepReadonlyArray965<U>
  : T extends object
  ? DeepReadonlyObject965<T>
  : T;

interface DeepReadonlyArray965<T> extends ReadonlyArray<DeepReadonly965<T>> {}

type DeepReadonlyObject965<T> = {
  readonly [P in keyof T]: DeepReadonly965<T[P]>;
};

type UnionToIntersection965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf965<T> = UnionToIntersection965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push965<T extends unknown[], V> = [...T, V];

type TuplifyUnion965<T, L = LastOf965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push965<TuplifyUnion965<Exclude<T, L>>, L>;

type DeepPartial965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial965<T[P]> }
  : T;

type Paths965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join965<K, Paths965<T[K], Prev965[D]>> : never }[keyof T]
  : never;

type Prev965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig965 {
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

type ConfigPaths965 = Paths965<NestedConfig965>;

interface HeavyProps965 {
  config: DeepPartial965<NestedConfig965>;
  path?: ConfigPaths965;
}

const HeavyComponent965 = memo(function HeavyComponent965({ config }: HeavyProps965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent965.displayName = 'HeavyComponent965';
export default HeavyComponent965;
