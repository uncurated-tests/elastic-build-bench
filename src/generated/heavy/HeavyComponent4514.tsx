'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4514<T> = T extends (infer U)[]
  ? DeepReadonlyArray4514<U>
  : T extends object
  ? DeepReadonlyObject4514<T>
  : T;

interface DeepReadonlyArray4514<T> extends ReadonlyArray<DeepReadonly4514<T>> {}

type DeepReadonlyObject4514<T> = {
  readonly [P in keyof T]: DeepReadonly4514<T[P]>;
};

type UnionToIntersection4514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4514<T> = UnionToIntersection4514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4514<T extends unknown[], V> = [...T, V];

type TuplifyUnion4514<T, L = LastOf4514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4514<TuplifyUnion4514<Exclude<T, L>>, L>;

type DeepPartial4514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4514<T[P]> }
  : T;

type Paths4514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4514<K, Paths4514<T[K], Prev4514[D]>> : never }[keyof T]
  : never;

type Prev4514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4514 {
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

type ConfigPaths4514 = Paths4514<NestedConfig4514>;

interface HeavyProps4514 {
  config: DeepPartial4514<NestedConfig4514>;
  path?: ConfigPaths4514;
}

const HeavyComponent4514 = memo(function HeavyComponent4514({ config }: HeavyProps4514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4514.displayName = 'HeavyComponent4514';
export default HeavyComponent4514;
