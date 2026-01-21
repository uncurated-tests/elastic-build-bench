'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4131<T> = T extends (infer U)[]
  ? DeepReadonlyArray4131<U>
  : T extends object
  ? DeepReadonlyObject4131<T>
  : T;

interface DeepReadonlyArray4131<T> extends ReadonlyArray<DeepReadonly4131<T>> {}

type DeepReadonlyObject4131<T> = {
  readonly [P in keyof T]: DeepReadonly4131<T[P]>;
};

type UnionToIntersection4131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4131<T> = UnionToIntersection4131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4131<T extends unknown[], V> = [...T, V];

type TuplifyUnion4131<T, L = LastOf4131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4131<TuplifyUnion4131<Exclude<T, L>>, L>;

type DeepPartial4131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4131<T[P]> }
  : T;

type Paths4131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4131<K, Paths4131<T[K], Prev4131[D]>> : never }[keyof T]
  : never;

type Prev4131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4131 {
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

type ConfigPaths4131 = Paths4131<NestedConfig4131>;

interface HeavyProps4131 {
  config: DeepPartial4131<NestedConfig4131>;
  path?: ConfigPaths4131;
}

const HeavyComponent4131 = memo(function HeavyComponent4131({ config }: HeavyProps4131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4131.displayName = 'HeavyComponent4131';
export default HeavyComponent4131;
