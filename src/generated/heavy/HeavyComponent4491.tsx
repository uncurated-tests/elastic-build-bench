'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4491<T> = T extends (infer U)[]
  ? DeepReadonlyArray4491<U>
  : T extends object
  ? DeepReadonlyObject4491<T>
  : T;

interface DeepReadonlyArray4491<T> extends ReadonlyArray<DeepReadonly4491<T>> {}

type DeepReadonlyObject4491<T> = {
  readonly [P in keyof T]: DeepReadonly4491<T[P]>;
};

type UnionToIntersection4491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4491<T> = UnionToIntersection4491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4491<T extends unknown[], V> = [...T, V];

type TuplifyUnion4491<T, L = LastOf4491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4491<TuplifyUnion4491<Exclude<T, L>>, L>;

type DeepPartial4491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4491<T[P]> }
  : T;

type Paths4491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4491<K, Paths4491<T[K], Prev4491[D]>> : never }[keyof T]
  : never;

type Prev4491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4491 {
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

type ConfigPaths4491 = Paths4491<NestedConfig4491>;

interface HeavyProps4491 {
  config: DeepPartial4491<NestedConfig4491>;
  path?: ConfigPaths4491;
}

const HeavyComponent4491 = memo(function HeavyComponent4491({ config }: HeavyProps4491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4491.displayName = 'HeavyComponent4491';
export default HeavyComponent4491;
