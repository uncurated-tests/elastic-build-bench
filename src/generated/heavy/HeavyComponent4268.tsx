'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4268<T> = T extends (infer U)[]
  ? DeepReadonlyArray4268<U>
  : T extends object
  ? DeepReadonlyObject4268<T>
  : T;

interface DeepReadonlyArray4268<T> extends ReadonlyArray<DeepReadonly4268<T>> {}

type DeepReadonlyObject4268<T> = {
  readonly [P in keyof T]: DeepReadonly4268<T[P]>;
};

type UnionToIntersection4268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4268<T> = UnionToIntersection4268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4268<T extends unknown[], V> = [...T, V];

type TuplifyUnion4268<T, L = LastOf4268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4268<TuplifyUnion4268<Exclude<T, L>>, L>;

type DeepPartial4268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4268<T[P]> }
  : T;

type Paths4268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4268<K, Paths4268<T[K], Prev4268[D]>> : never }[keyof T]
  : never;

type Prev4268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4268 {
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

type ConfigPaths4268 = Paths4268<NestedConfig4268>;

interface HeavyProps4268 {
  config: DeepPartial4268<NestedConfig4268>;
  path?: ConfigPaths4268;
}

const HeavyComponent4268 = memo(function HeavyComponent4268({ config }: HeavyProps4268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4268.displayName = 'HeavyComponent4268';
export default HeavyComponent4268;
