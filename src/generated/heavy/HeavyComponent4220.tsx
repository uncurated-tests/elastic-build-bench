'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4220<T> = T extends (infer U)[]
  ? DeepReadonlyArray4220<U>
  : T extends object
  ? DeepReadonlyObject4220<T>
  : T;

interface DeepReadonlyArray4220<T> extends ReadonlyArray<DeepReadonly4220<T>> {}

type DeepReadonlyObject4220<T> = {
  readonly [P in keyof T]: DeepReadonly4220<T[P]>;
};

type UnionToIntersection4220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4220<T> = UnionToIntersection4220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4220<T extends unknown[], V> = [...T, V];

type TuplifyUnion4220<T, L = LastOf4220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4220<TuplifyUnion4220<Exclude<T, L>>, L>;

type DeepPartial4220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4220<T[P]> }
  : T;

type Paths4220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4220<K, Paths4220<T[K], Prev4220[D]>> : never }[keyof T]
  : never;

type Prev4220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4220 {
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

type ConfigPaths4220 = Paths4220<NestedConfig4220>;

interface HeavyProps4220 {
  config: DeepPartial4220<NestedConfig4220>;
  path?: ConfigPaths4220;
}

const HeavyComponent4220 = memo(function HeavyComponent4220({ config }: HeavyProps4220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4220.displayName = 'HeavyComponent4220';
export default HeavyComponent4220;
