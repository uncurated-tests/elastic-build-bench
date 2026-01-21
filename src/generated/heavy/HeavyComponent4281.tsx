'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4281<T> = T extends (infer U)[]
  ? DeepReadonlyArray4281<U>
  : T extends object
  ? DeepReadonlyObject4281<T>
  : T;

interface DeepReadonlyArray4281<T> extends ReadonlyArray<DeepReadonly4281<T>> {}

type DeepReadonlyObject4281<T> = {
  readonly [P in keyof T]: DeepReadonly4281<T[P]>;
};

type UnionToIntersection4281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4281<T> = UnionToIntersection4281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4281<T extends unknown[], V> = [...T, V];

type TuplifyUnion4281<T, L = LastOf4281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4281<TuplifyUnion4281<Exclude<T, L>>, L>;

type DeepPartial4281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4281<T[P]> }
  : T;

type Paths4281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4281<K, Paths4281<T[K], Prev4281[D]>> : never }[keyof T]
  : never;

type Prev4281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4281 {
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

type ConfigPaths4281 = Paths4281<NestedConfig4281>;

interface HeavyProps4281 {
  config: DeepPartial4281<NestedConfig4281>;
  path?: ConfigPaths4281;
}

const HeavyComponent4281 = memo(function HeavyComponent4281({ config }: HeavyProps4281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4281.displayName = 'HeavyComponent4281';
export default HeavyComponent4281;
