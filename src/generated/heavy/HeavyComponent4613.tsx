'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4613<T> = T extends (infer U)[]
  ? DeepReadonlyArray4613<U>
  : T extends object
  ? DeepReadonlyObject4613<T>
  : T;

interface DeepReadonlyArray4613<T> extends ReadonlyArray<DeepReadonly4613<T>> {}

type DeepReadonlyObject4613<T> = {
  readonly [P in keyof T]: DeepReadonly4613<T[P]>;
};

type UnionToIntersection4613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4613<T> = UnionToIntersection4613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4613<T extends unknown[], V> = [...T, V];

type TuplifyUnion4613<T, L = LastOf4613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4613<TuplifyUnion4613<Exclude<T, L>>, L>;

type DeepPartial4613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4613<T[P]> }
  : T;

type Paths4613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4613<K, Paths4613<T[K], Prev4613[D]>> : never }[keyof T]
  : never;

type Prev4613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4613 {
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

type ConfigPaths4613 = Paths4613<NestedConfig4613>;

interface HeavyProps4613 {
  config: DeepPartial4613<NestedConfig4613>;
  path?: ConfigPaths4613;
}

const HeavyComponent4613 = memo(function HeavyComponent4613({ config }: HeavyProps4613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4613.displayName = 'HeavyComponent4613';
export default HeavyComponent4613;
