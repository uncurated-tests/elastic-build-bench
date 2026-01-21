'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4775<T> = T extends (infer U)[]
  ? DeepReadonlyArray4775<U>
  : T extends object
  ? DeepReadonlyObject4775<T>
  : T;

interface DeepReadonlyArray4775<T> extends ReadonlyArray<DeepReadonly4775<T>> {}

type DeepReadonlyObject4775<T> = {
  readonly [P in keyof T]: DeepReadonly4775<T[P]>;
};

type UnionToIntersection4775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4775<T> = UnionToIntersection4775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4775<T extends unknown[], V> = [...T, V];

type TuplifyUnion4775<T, L = LastOf4775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4775<TuplifyUnion4775<Exclude<T, L>>, L>;

type DeepPartial4775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4775<T[P]> }
  : T;

type Paths4775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4775<K, Paths4775<T[K], Prev4775[D]>> : never }[keyof T]
  : never;

type Prev4775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4775 {
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

type ConfigPaths4775 = Paths4775<NestedConfig4775>;

interface HeavyProps4775 {
  config: DeepPartial4775<NestedConfig4775>;
  path?: ConfigPaths4775;
}

const HeavyComponent4775 = memo(function HeavyComponent4775({ config }: HeavyProps4775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4775.displayName = 'HeavyComponent4775';
export default HeavyComponent4775;
