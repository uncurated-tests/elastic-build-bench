'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4241<T> = T extends (infer U)[]
  ? DeepReadonlyArray4241<U>
  : T extends object
  ? DeepReadonlyObject4241<T>
  : T;

interface DeepReadonlyArray4241<T> extends ReadonlyArray<DeepReadonly4241<T>> {}

type DeepReadonlyObject4241<T> = {
  readonly [P in keyof T]: DeepReadonly4241<T[P]>;
};

type UnionToIntersection4241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4241<T> = UnionToIntersection4241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4241<T extends unknown[], V> = [...T, V];

type TuplifyUnion4241<T, L = LastOf4241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4241<TuplifyUnion4241<Exclude<T, L>>, L>;

type DeepPartial4241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4241<T[P]> }
  : T;

type Paths4241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4241<K, Paths4241<T[K], Prev4241[D]>> : never }[keyof T]
  : never;

type Prev4241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4241 {
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

type ConfigPaths4241 = Paths4241<NestedConfig4241>;

interface HeavyProps4241 {
  config: DeepPartial4241<NestedConfig4241>;
  path?: ConfigPaths4241;
}

const HeavyComponent4241 = memo(function HeavyComponent4241({ config }: HeavyProps4241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4241.displayName = 'HeavyComponent4241';
export default HeavyComponent4241;
