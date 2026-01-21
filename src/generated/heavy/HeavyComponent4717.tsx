'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4717<T> = T extends (infer U)[]
  ? DeepReadonlyArray4717<U>
  : T extends object
  ? DeepReadonlyObject4717<T>
  : T;

interface DeepReadonlyArray4717<T> extends ReadonlyArray<DeepReadonly4717<T>> {}

type DeepReadonlyObject4717<T> = {
  readonly [P in keyof T]: DeepReadonly4717<T[P]>;
};

type UnionToIntersection4717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4717<T> = UnionToIntersection4717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4717<T extends unknown[], V> = [...T, V];

type TuplifyUnion4717<T, L = LastOf4717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4717<TuplifyUnion4717<Exclude<T, L>>, L>;

type DeepPartial4717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4717<T[P]> }
  : T;

type Paths4717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4717<K, Paths4717<T[K], Prev4717[D]>> : never }[keyof T]
  : never;

type Prev4717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4717 {
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

type ConfigPaths4717 = Paths4717<NestedConfig4717>;

interface HeavyProps4717 {
  config: DeepPartial4717<NestedConfig4717>;
  path?: ConfigPaths4717;
}

const HeavyComponent4717 = memo(function HeavyComponent4717({ config }: HeavyProps4717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4717.displayName = 'HeavyComponent4717';
export default HeavyComponent4717;
