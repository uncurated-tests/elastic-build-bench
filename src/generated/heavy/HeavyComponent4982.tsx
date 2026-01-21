'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4982<T> = T extends (infer U)[]
  ? DeepReadonlyArray4982<U>
  : T extends object
  ? DeepReadonlyObject4982<T>
  : T;

interface DeepReadonlyArray4982<T> extends ReadonlyArray<DeepReadonly4982<T>> {}

type DeepReadonlyObject4982<T> = {
  readonly [P in keyof T]: DeepReadonly4982<T[P]>;
};

type UnionToIntersection4982<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4982<T> = UnionToIntersection4982<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4982<T extends unknown[], V> = [...T, V];

type TuplifyUnion4982<T, L = LastOf4982<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4982<TuplifyUnion4982<Exclude<T, L>>, L>;

type DeepPartial4982<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4982<T[P]> }
  : T;

type Paths4982<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4982<K, Paths4982<T[K], Prev4982[D]>> : never }[keyof T]
  : never;

type Prev4982 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4982<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4982 {
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

type ConfigPaths4982 = Paths4982<NestedConfig4982>;

interface HeavyProps4982 {
  config: DeepPartial4982<NestedConfig4982>;
  path?: ConfigPaths4982;
}

const HeavyComponent4982 = memo(function HeavyComponent4982({ config }: HeavyProps4982) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4982) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4982 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4982: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4982.displayName = 'HeavyComponent4982';
export default HeavyComponent4982;
