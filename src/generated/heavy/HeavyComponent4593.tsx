'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4593<T> = T extends (infer U)[]
  ? DeepReadonlyArray4593<U>
  : T extends object
  ? DeepReadonlyObject4593<T>
  : T;

interface DeepReadonlyArray4593<T> extends ReadonlyArray<DeepReadonly4593<T>> {}

type DeepReadonlyObject4593<T> = {
  readonly [P in keyof T]: DeepReadonly4593<T[P]>;
};

type UnionToIntersection4593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4593<T> = UnionToIntersection4593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4593<T extends unknown[], V> = [...T, V];

type TuplifyUnion4593<T, L = LastOf4593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4593<TuplifyUnion4593<Exclude<T, L>>, L>;

type DeepPartial4593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4593<T[P]> }
  : T;

type Paths4593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4593<K, Paths4593<T[K], Prev4593[D]>> : never }[keyof T]
  : never;

type Prev4593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4593 {
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

type ConfigPaths4593 = Paths4593<NestedConfig4593>;

interface HeavyProps4593 {
  config: DeepPartial4593<NestedConfig4593>;
  path?: ConfigPaths4593;
}

const HeavyComponent4593 = memo(function HeavyComponent4593({ config }: HeavyProps4593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4593.displayName = 'HeavyComponent4593';
export default HeavyComponent4593;
