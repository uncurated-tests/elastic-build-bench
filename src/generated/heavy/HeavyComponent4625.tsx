'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4625<T> = T extends (infer U)[]
  ? DeepReadonlyArray4625<U>
  : T extends object
  ? DeepReadonlyObject4625<T>
  : T;

interface DeepReadonlyArray4625<T> extends ReadonlyArray<DeepReadonly4625<T>> {}

type DeepReadonlyObject4625<T> = {
  readonly [P in keyof T]: DeepReadonly4625<T[P]>;
};

type UnionToIntersection4625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4625<T> = UnionToIntersection4625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4625<T extends unknown[], V> = [...T, V];

type TuplifyUnion4625<T, L = LastOf4625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4625<TuplifyUnion4625<Exclude<T, L>>, L>;

type DeepPartial4625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4625<T[P]> }
  : T;

type Paths4625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4625<K, Paths4625<T[K], Prev4625[D]>> : never }[keyof T]
  : never;

type Prev4625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4625 {
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

type ConfigPaths4625 = Paths4625<NestedConfig4625>;

interface HeavyProps4625 {
  config: DeepPartial4625<NestedConfig4625>;
  path?: ConfigPaths4625;
}

const HeavyComponent4625 = memo(function HeavyComponent4625({ config }: HeavyProps4625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4625.displayName = 'HeavyComponent4625';
export default HeavyComponent4625;
