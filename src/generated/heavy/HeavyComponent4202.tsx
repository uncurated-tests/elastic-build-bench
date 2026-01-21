'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4202<T> = T extends (infer U)[]
  ? DeepReadonlyArray4202<U>
  : T extends object
  ? DeepReadonlyObject4202<T>
  : T;

interface DeepReadonlyArray4202<T> extends ReadonlyArray<DeepReadonly4202<T>> {}

type DeepReadonlyObject4202<T> = {
  readonly [P in keyof T]: DeepReadonly4202<T[P]>;
};

type UnionToIntersection4202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4202<T> = UnionToIntersection4202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4202<T extends unknown[], V> = [...T, V];

type TuplifyUnion4202<T, L = LastOf4202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4202<TuplifyUnion4202<Exclude<T, L>>, L>;

type DeepPartial4202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4202<T[P]> }
  : T;

type Paths4202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4202<K, Paths4202<T[K], Prev4202[D]>> : never }[keyof T]
  : never;

type Prev4202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4202 {
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

type ConfigPaths4202 = Paths4202<NestedConfig4202>;

interface HeavyProps4202 {
  config: DeepPartial4202<NestedConfig4202>;
  path?: ConfigPaths4202;
}

const HeavyComponent4202 = memo(function HeavyComponent4202({ config }: HeavyProps4202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4202.displayName = 'HeavyComponent4202';
export default HeavyComponent4202;
