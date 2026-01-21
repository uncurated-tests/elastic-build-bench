'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4790<T> = T extends (infer U)[]
  ? DeepReadonlyArray4790<U>
  : T extends object
  ? DeepReadonlyObject4790<T>
  : T;

interface DeepReadonlyArray4790<T> extends ReadonlyArray<DeepReadonly4790<T>> {}

type DeepReadonlyObject4790<T> = {
  readonly [P in keyof T]: DeepReadonly4790<T[P]>;
};

type UnionToIntersection4790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4790<T> = UnionToIntersection4790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4790<T extends unknown[], V> = [...T, V];

type TuplifyUnion4790<T, L = LastOf4790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4790<TuplifyUnion4790<Exclude<T, L>>, L>;

type DeepPartial4790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4790<T[P]> }
  : T;

type Paths4790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4790<K, Paths4790<T[K], Prev4790[D]>> : never }[keyof T]
  : never;

type Prev4790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4790 {
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

type ConfigPaths4790 = Paths4790<NestedConfig4790>;

interface HeavyProps4790 {
  config: DeepPartial4790<NestedConfig4790>;
  path?: ConfigPaths4790;
}

const HeavyComponent4790 = memo(function HeavyComponent4790({ config }: HeavyProps4790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4790.displayName = 'HeavyComponent4790';
export default HeavyComponent4790;
