'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4436<T> = T extends (infer U)[]
  ? DeepReadonlyArray4436<U>
  : T extends object
  ? DeepReadonlyObject4436<T>
  : T;

interface DeepReadonlyArray4436<T> extends ReadonlyArray<DeepReadonly4436<T>> {}

type DeepReadonlyObject4436<T> = {
  readonly [P in keyof T]: DeepReadonly4436<T[P]>;
};

type UnionToIntersection4436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4436<T> = UnionToIntersection4436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4436<T extends unknown[], V> = [...T, V];

type TuplifyUnion4436<T, L = LastOf4436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4436<TuplifyUnion4436<Exclude<T, L>>, L>;

type DeepPartial4436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4436<T[P]> }
  : T;

type Paths4436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4436<K, Paths4436<T[K], Prev4436[D]>> : never }[keyof T]
  : never;

type Prev4436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4436 {
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

type ConfigPaths4436 = Paths4436<NestedConfig4436>;

interface HeavyProps4436 {
  config: DeepPartial4436<NestedConfig4436>;
  path?: ConfigPaths4436;
}

const HeavyComponent4436 = memo(function HeavyComponent4436({ config }: HeavyProps4436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4436.displayName = 'HeavyComponent4436';
export default HeavyComponent4436;
