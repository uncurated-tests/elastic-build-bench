'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4492<T> = T extends (infer U)[]
  ? DeepReadonlyArray4492<U>
  : T extends object
  ? DeepReadonlyObject4492<T>
  : T;

interface DeepReadonlyArray4492<T> extends ReadonlyArray<DeepReadonly4492<T>> {}

type DeepReadonlyObject4492<T> = {
  readonly [P in keyof T]: DeepReadonly4492<T[P]>;
};

type UnionToIntersection4492<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4492<T> = UnionToIntersection4492<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4492<T extends unknown[], V> = [...T, V];

type TuplifyUnion4492<T, L = LastOf4492<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4492<TuplifyUnion4492<Exclude<T, L>>, L>;

type DeepPartial4492<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4492<T[P]> }
  : T;

type Paths4492<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4492<K, Paths4492<T[K], Prev4492[D]>> : never }[keyof T]
  : never;

type Prev4492 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4492<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4492 {
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

type ConfigPaths4492 = Paths4492<NestedConfig4492>;

interface HeavyProps4492 {
  config: DeepPartial4492<NestedConfig4492>;
  path?: ConfigPaths4492;
}

const HeavyComponent4492 = memo(function HeavyComponent4492({ config }: HeavyProps4492) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4492) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4492 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4492: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4492.displayName = 'HeavyComponent4492';
export default HeavyComponent4492;
