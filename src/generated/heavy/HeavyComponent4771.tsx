'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4771<T> = T extends (infer U)[]
  ? DeepReadonlyArray4771<U>
  : T extends object
  ? DeepReadonlyObject4771<T>
  : T;

interface DeepReadonlyArray4771<T> extends ReadonlyArray<DeepReadonly4771<T>> {}

type DeepReadonlyObject4771<T> = {
  readonly [P in keyof T]: DeepReadonly4771<T[P]>;
};

type UnionToIntersection4771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4771<T> = UnionToIntersection4771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4771<T extends unknown[], V> = [...T, V];

type TuplifyUnion4771<T, L = LastOf4771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4771<TuplifyUnion4771<Exclude<T, L>>, L>;

type DeepPartial4771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4771<T[P]> }
  : T;

type Paths4771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4771<K, Paths4771<T[K], Prev4771[D]>> : never }[keyof T]
  : never;

type Prev4771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4771 {
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

type ConfigPaths4771 = Paths4771<NestedConfig4771>;

interface HeavyProps4771 {
  config: DeepPartial4771<NestedConfig4771>;
  path?: ConfigPaths4771;
}

const HeavyComponent4771 = memo(function HeavyComponent4771({ config }: HeavyProps4771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4771.displayName = 'HeavyComponent4771';
export default HeavyComponent4771;
