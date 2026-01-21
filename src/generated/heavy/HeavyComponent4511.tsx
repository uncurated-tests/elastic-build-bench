'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4511<T> = T extends (infer U)[]
  ? DeepReadonlyArray4511<U>
  : T extends object
  ? DeepReadonlyObject4511<T>
  : T;

interface DeepReadonlyArray4511<T> extends ReadonlyArray<DeepReadonly4511<T>> {}

type DeepReadonlyObject4511<T> = {
  readonly [P in keyof T]: DeepReadonly4511<T[P]>;
};

type UnionToIntersection4511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4511<T> = UnionToIntersection4511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4511<T extends unknown[], V> = [...T, V];

type TuplifyUnion4511<T, L = LastOf4511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4511<TuplifyUnion4511<Exclude<T, L>>, L>;

type DeepPartial4511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4511<T[P]> }
  : T;

type Paths4511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4511<K, Paths4511<T[K], Prev4511[D]>> : never }[keyof T]
  : never;

type Prev4511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4511 {
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

type ConfigPaths4511 = Paths4511<NestedConfig4511>;

interface HeavyProps4511 {
  config: DeepPartial4511<NestedConfig4511>;
  path?: ConfigPaths4511;
}

const HeavyComponent4511 = memo(function HeavyComponent4511({ config }: HeavyProps4511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4511.displayName = 'HeavyComponent4511';
export default HeavyComponent4511;
