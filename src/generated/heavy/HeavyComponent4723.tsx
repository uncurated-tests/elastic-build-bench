'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4723<T> = T extends (infer U)[]
  ? DeepReadonlyArray4723<U>
  : T extends object
  ? DeepReadonlyObject4723<T>
  : T;

interface DeepReadonlyArray4723<T> extends ReadonlyArray<DeepReadonly4723<T>> {}

type DeepReadonlyObject4723<T> = {
  readonly [P in keyof T]: DeepReadonly4723<T[P]>;
};

type UnionToIntersection4723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4723<T> = UnionToIntersection4723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4723<T extends unknown[], V> = [...T, V];

type TuplifyUnion4723<T, L = LastOf4723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4723<TuplifyUnion4723<Exclude<T, L>>, L>;

type DeepPartial4723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4723<T[P]> }
  : T;

type Paths4723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4723<K, Paths4723<T[K], Prev4723[D]>> : never }[keyof T]
  : never;

type Prev4723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4723 {
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

type ConfigPaths4723 = Paths4723<NestedConfig4723>;

interface HeavyProps4723 {
  config: DeepPartial4723<NestedConfig4723>;
  path?: ConfigPaths4723;
}

const HeavyComponent4723 = memo(function HeavyComponent4723({ config }: HeavyProps4723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4723.displayName = 'HeavyComponent4723';
export default HeavyComponent4723;
