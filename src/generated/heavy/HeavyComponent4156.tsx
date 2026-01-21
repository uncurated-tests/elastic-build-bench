'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4156<T> = T extends (infer U)[]
  ? DeepReadonlyArray4156<U>
  : T extends object
  ? DeepReadonlyObject4156<T>
  : T;

interface DeepReadonlyArray4156<T> extends ReadonlyArray<DeepReadonly4156<T>> {}

type DeepReadonlyObject4156<T> = {
  readonly [P in keyof T]: DeepReadonly4156<T[P]>;
};

type UnionToIntersection4156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4156<T> = UnionToIntersection4156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4156<T extends unknown[], V> = [...T, V];

type TuplifyUnion4156<T, L = LastOf4156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4156<TuplifyUnion4156<Exclude<T, L>>, L>;

type DeepPartial4156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4156<T[P]> }
  : T;

type Paths4156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4156<K, Paths4156<T[K], Prev4156[D]>> : never }[keyof T]
  : never;

type Prev4156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4156 {
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

type ConfigPaths4156 = Paths4156<NestedConfig4156>;

interface HeavyProps4156 {
  config: DeepPartial4156<NestedConfig4156>;
  path?: ConfigPaths4156;
}

const HeavyComponent4156 = memo(function HeavyComponent4156({ config }: HeavyProps4156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4156.displayName = 'HeavyComponent4156';
export default HeavyComponent4156;
