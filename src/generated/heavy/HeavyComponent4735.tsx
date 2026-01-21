'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4735<T> = T extends (infer U)[]
  ? DeepReadonlyArray4735<U>
  : T extends object
  ? DeepReadonlyObject4735<T>
  : T;

interface DeepReadonlyArray4735<T> extends ReadonlyArray<DeepReadonly4735<T>> {}

type DeepReadonlyObject4735<T> = {
  readonly [P in keyof T]: DeepReadonly4735<T[P]>;
};

type UnionToIntersection4735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4735<T> = UnionToIntersection4735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4735<T extends unknown[], V> = [...T, V];

type TuplifyUnion4735<T, L = LastOf4735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4735<TuplifyUnion4735<Exclude<T, L>>, L>;

type DeepPartial4735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4735<T[P]> }
  : T;

type Paths4735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4735<K, Paths4735<T[K], Prev4735[D]>> : never }[keyof T]
  : never;

type Prev4735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4735 {
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

type ConfigPaths4735 = Paths4735<NestedConfig4735>;

interface HeavyProps4735 {
  config: DeepPartial4735<NestedConfig4735>;
  path?: ConfigPaths4735;
}

const HeavyComponent4735 = memo(function HeavyComponent4735({ config }: HeavyProps4735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4735.displayName = 'HeavyComponent4735';
export default HeavyComponent4735;
