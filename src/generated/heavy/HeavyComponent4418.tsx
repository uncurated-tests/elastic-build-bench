'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4418<T> = T extends (infer U)[]
  ? DeepReadonlyArray4418<U>
  : T extends object
  ? DeepReadonlyObject4418<T>
  : T;

interface DeepReadonlyArray4418<T> extends ReadonlyArray<DeepReadonly4418<T>> {}

type DeepReadonlyObject4418<T> = {
  readonly [P in keyof T]: DeepReadonly4418<T[P]>;
};

type UnionToIntersection4418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4418<T> = UnionToIntersection4418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4418<T extends unknown[], V> = [...T, V];

type TuplifyUnion4418<T, L = LastOf4418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4418<TuplifyUnion4418<Exclude<T, L>>, L>;

type DeepPartial4418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4418<T[P]> }
  : T;

type Paths4418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4418<K, Paths4418<T[K], Prev4418[D]>> : never }[keyof T]
  : never;

type Prev4418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4418 {
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

type ConfigPaths4418 = Paths4418<NestedConfig4418>;

interface HeavyProps4418 {
  config: DeepPartial4418<NestedConfig4418>;
  path?: ConfigPaths4418;
}

const HeavyComponent4418 = memo(function HeavyComponent4418({ config }: HeavyProps4418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4418.displayName = 'HeavyComponent4418';
export default HeavyComponent4418;
