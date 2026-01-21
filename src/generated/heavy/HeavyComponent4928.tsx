'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4928<T> = T extends (infer U)[]
  ? DeepReadonlyArray4928<U>
  : T extends object
  ? DeepReadonlyObject4928<T>
  : T;

interface DeepReadonlyArray4928<T> extends ReadonlyArray<DeepReadonly4928<T>> {}

type DeepReadonlyObject4928<T> = {
  readonly [P in keyof T]: DeepReadonly4928<T[P]>;
};

type UnionToIntersection4928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4928<T> = UnionToIntersection4928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4928<T extends unknown[], V> = [...T, V];

type TuplifyUnion4928<T, L = LastOf4928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4928<TuplifyUnion4928<Exclude<T, L>>, L>;

type DeepPartial4928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4928<T[P]> }
  : T;

type Paths4928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4928<K, Paths4928<T[K], Prev4928[D]>> : never }[keyof T]
  : never;

type Prev4928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4928 {
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

type ConfigPaths4928 = Paths4928<NestedConfig4928>;

interface HeavyProps4928 {
  config: DeepPartial4928<NestedConfig4928>;
  path?: ConfigPaths4928;
}

const HeavyComponent4928 = memo(function HeavyComponent4928({ config }: HeavyProps4928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4928.displayName = 'HeavyComponent4928';
export default HeavyComponent4928;
