'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4175<T> = T extends (infer U)[]
  ? DeepReadonlyArray4175<U>
  : T extends object
  ? DeepReadonlyObject4175<T>
  : T;

interface DeepReadonlyArray4175<T> extends ReadonlyArray<DeepReadonly4175<T>> {}

type DeepReadonlyObject4175<T> = {
  readonly [P in keyof T]: DeepReadonly4175<T[P]>;
};

type UnionToIntersection4175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4175<T> = UnionToIntersection4175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4175<T extends unknown[], V> = [...T, V];

type TuplifyUnion4175<T, L = LastOf4175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4175<TuplifyUnion4175<Exclude<T, L>>, L>;

type DeepPartial4175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4175<T[P]> }
  : T;

type Paths4175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4175<K, Paths4175<T[K], Prev4175[D]>> : never }[keyof T]
  : never;

type Prev4175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4175 {
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

type ConfigPaths4175 = Paths4175<NestedConfig4175>;

interface HeavyProps4175 {
  config: DeepPartial4175<NestedConfig4175>;
  path?: ConfigPaths4175;
}

const HeavyComponent4175 = memo(function HeavyComponent4175({ config }: HeavyProps4175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4175.displayName = 'HeavyComponent4175';
export default HeavyComponent4175;
