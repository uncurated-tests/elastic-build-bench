'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4015<T> = T extends (infer U)[]
  ? DeepReadonlyArray4015<U>
  : T extends object
  ? DeepReadonlyObject4015<T>
  : T;

interface DeepReadonlyArray4015<T> extends ReadonlyArray<DeepReadonly4015<T>> {}

type DeepReadonlyObject4015<T> = {
  readonly [P in keyof T]: DeepReadonly4015<T[P]>;
};

type UnionToIntersection4015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4015<T> = UnionToIntersection4015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4015<T extends unknown[], V> = [...T, V];

type TuplifyUnion4015<T, L = LastOf4015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4015<TuplifyUnion4015<Exclude<T, L>>, L>;

type DeepPartial4015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4015<T[P]> }
  : T;

type Paths4015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4015<K, Paths4015<T[K], Prev4015[D]>> : never }[keyof T]
  : never;

type Prev4015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4015 {
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

type ConfigPaths4015 = Paths4015<NestedConfig4015>;

interface HeavyProps4015 {
  config: DeepPartial4015<NestedConfig4015>;
  path?: ConfigPaths4015;
}

const HeavyComponent4015 = memo(function HeavyComponent4015({ config }: HeavyProps4015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4015.displayName = 'HeavyComponent4015';
export default HeavyComponent4015;
