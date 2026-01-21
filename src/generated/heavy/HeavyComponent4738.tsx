'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4738<T> = T extends (infer U)[]
  ? DeepReadonlyArray4738<U>
  : T extends object
  ? DeepReadonlyObject4738<T>
  : T;

interface DeepReadonlyArray4738<T> extends ReadonlyArray<DeepReadonly4738<T>> {}

type DeepReadonlyObject4738<T> = {
  readonly [P in keyof T]: DeepReadonly4738<T[P]>;
};

type UnionToIntersection4738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4738<T> = UnionToIntersection4738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4738<T extends unknown[], V> = [...T, V];

type TuplifyUnion4738<T, L = LastOf4738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4738<TuplifyUnion4738<Exclude<T, L>>, L>;

type DeepPartial4738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4738<T[P]> }
  : T;

type Paths4738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4738<K, Paths4738<T[K], Prev4738[D]>> : never }[keyof T]
  : never;

type Prev4738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4738 {
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

type ConfigPaths4738 = Paths4738<NestedConfig4738>;

interface HeavyProps4738 {
  config: DeepPartial4738<NestedConfig4738>;
  path?: ConfigPaths4738;
}

const HeavyComponent4738 = memo(function HeavyComponent4738({ config }: HeavyProps4738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4738.displayName = 'HeavyComponent4738';
export default HeavyComponent4738;
