'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4186<T> = T extends (infer U)[]
  ? DeepReadonlyArray4186<U>
  : T extends object
  ? DeepReadonlyObject4186<T>
  : T;

interface DeepReadonlyArray4186<T> extends ReadonlyArray<DeepReadonly4186<T>> {}

type DeepReadonlyObject4186<T> = {
  readonly [P in keyof T]: DeepReadonly4186<T[P]>;
};

type UnionToIntersection4186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4186<T> = UnionToIntersection4186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4186<T extends unknown[], V> = [...T, V];

type TuplifyUnion4186<T, L = LastOf4186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4186<TuplifyUnion4186<Exclude<T, L>>, L>;

type DeepPartial4186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4186<T[P]> }
  : T;

type Paths4186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4186<K, Paths4186<T[K], Prev4186[D]>> : never }[keyof T]
  : never;

type Prev4186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4186 {
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

type ConfigPaths4186 = Paths4186<NestedConfig4186>;

interface HeavyProps4186 {
  config: DeepPartial4186<NestedConfig4186>;
  path?: ConfigPaths4186;
}

const HeavyComponent4186 = memo(function HeavyComponent4186({ config }: HeavyProps4186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4186.displayName = 'HeavyComponent4186';
export default HeavyComponent4186;
