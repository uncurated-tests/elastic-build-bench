'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4923<T> = T extends (infer U)[]
  ? DeepReadonlyArray4923<U>
  : T extends object
  ? DeepReadonlyObject4923<T>
  : T;

interface DeepReadonlyArray4923<T> extends ReadonlyArray<DeepReadonly4923<T>> {}

type DeepReadonlyObject4923<T> = {
  readonly [P in keyof T]: DeepReadonly4923<T[P]>;
};

type UnionToIntersection4923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4923<T> = UnionToIntersection4923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4923<T extends unknown[], V> = [...T, V];

type TuplifyUnion4923<T, L = LastOf4923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4923<TuplifyUnion4923<Exclude<T, L>>, L>;

type DeepPartial4923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4923<T[P]> }
  : T;

type Paths4923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4923<K, Paths4923<T[K], Prev4923[D]>> : never }[keyof T]
  : never;

type Prev4923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4923 {
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

type ConfigPaths4923 = Paths4923<NestedConfig4923>;

interface HeavyProps4923 {
  config: DeepPartial4923<NestedConfig4923>;
  path?: ConfigPaths4923;
}

const HeavyComponent4923 = memo(function HeavyComponent4923({ config }: HeavyProps4923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4923.displayName = 'HeavyComponent4923';
export default HeavyComponent4923;
